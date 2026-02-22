import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type AdvanceCountUpProps = {
    ending: number;
    durations?: number;
}

const AdvanceCountUp: React.FC<AdvanceCountUpProps> = ({
    ending = 32,
    durations = 3,
}) => {
    const [animationRef, animationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    if (ending) {
        return (
            <span ref={animationRef}>
                {animationInView && <CountUp
                    start={0}
                    end={ending}
                    duration={durations}
                    delay={0}
                    separator=","
                    decimal="."
                    prefix=""
                    suffix=""
                />}
            </span>
        );
    }

    return <span>{200}</span>;
};

export default AdvanceCountUp;