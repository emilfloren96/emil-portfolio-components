import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';

const Bar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    transform-origin: 0%;
    z-index: 1001;
`;

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return <Bar style={{ scaleX }} />;
};

export default ScrollProgress;
