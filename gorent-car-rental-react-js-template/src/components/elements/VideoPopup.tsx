
import React, { useCallback, useEffect } from "react";
import useGorentContext from "../context/useGorentContext";

const VideoPopup: React.FC = () => {

    const {
        setShowVideoPopup,
        setCurrentVideoUrl,
        showVideoPopup,
        currentVideoUrl,
    } = useGorentContext();

    // Close popup (memoized)
    const onClose = useCallback(() => {
        setShowVideoPopup(false);
        setCurrentVideoUrl("");
    }, [setShowVideoPopup, setCurrentVideoUrl]);

    const extractYouTubeVideoId = useCallback((url: string): string | null => {
        if (!url) return null;

        const patterns: RegExp[] = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
            /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^&\n?#]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        return null;
    }, []);

    const getEmbedUrl = useCallback(
        (url: string): string => {
            if (!url) {
                return "https://www.youtube-nocookie.com/embed/MLpWrANjFbI?autoplay=1&rel=0&modestbranding=1&showinfo=0";
            }

            const videoId = extractYouTubeVideoId(url);
            if (videoId) {
                return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`;
            }

            return url;
        },
        [extractYouTubeVideoId]
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (showVideoPopup) {
            document.addEventListener("keydown", handleEscKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey);
            document.body.style.overflow = "";
        };
    }, [showVideoPopup, onClose]);

    const handleOverlayClick = () => onClose();
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!showVideoPopup) return null;

    const embedUrl = getEmbedUrl(currentVideoUrl);

    return (
        <div className="video-popup-overlay active" onClick={handleOverlayClick}>
            <div className="video-popup-content" onClick={handleContentClick}>
                <button
                    type="button"
                    aria-label="Close video popup"
                    className="video-popup-close"
                    onClick={onClose}
                >
                    ×
                </button>

                <iframe
                    className="video-iframe"
                    width="800"
                    height="450"
                    src={embedUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        aspectRatio: "16 / 9",
                        border: "none",
                    }}
                />
            </div>
        </div>
    );
};

export default VideoPopup;
