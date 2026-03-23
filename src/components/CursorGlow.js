import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styled from 'styled-components';

const Ring = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1.5px solid rgba(126, 173, 252, 0.5);
    pointer-events: none;
    z-index: 9999;
`;

const Dot = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #7eadfc;
    pointer-events: none;
    z-index: 9999;
`;

const CursorGlow = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    return (
        <>
            <Ring style={{ x: springX, y: springY }} />
            <Dot style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }} />
        </>
    );
};

export default CursorGlow;
