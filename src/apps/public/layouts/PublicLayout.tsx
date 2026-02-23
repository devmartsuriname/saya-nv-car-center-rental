import React from 'react';
import ContextProvider from '../components/context/ContextProvider';

// Gorent template CSS - loaded exclusively inside .public-scope
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome-all.css';
import '../assets/css/flaticon.css';
import '../assets/css/animate.min.css';
import '../assets/css/custom-animate.css';
import '../assets/css/nice-select.css';
import '../assets/css/style.css';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import CustomCursor from '../components/elements/CustomCursor';
import VideoPopup from '../components/elements/VideoPopup';
import SearchProp from '../components/elements/SearchProp';
import SideBar from '../components/elements/SideBar';
import MobileNav from '../components/elements/MobileNav';
import ScrollToTop from '../components/elements/ScrollToTop';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <ContextProvider>
      <div className="public-scope">
        <CustomCursor />
        <VideoPopup />
        <SearchProp />
        <SideBar />
        <MobileNav />
        <ScrollToTop />
        {children}
      </div>
    </ContextProvider>
  );
};

export default PublicLayout;
