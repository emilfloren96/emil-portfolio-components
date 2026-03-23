import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    SmallImage,
} from '../styles/Global.styled';
import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from '../styles/Showcase.styled';
import { BsInstagram, BsLinkedin, BsEnvelope, BsPhone } from 'react-icons/bs';
import ShowcaseImg from '../assets/profile_img.jpg';
import BackgroundImg from '../assets/emoji.png';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Toast = styled(motion.div)`
    position: absolute;
    bottom: -3rem;
    left: 0;
    background: ${({ theme }) => theme.colors.primary_light};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
`;

const roles = [
    'Frontend Developer',
    'Problem Solver',
    'UI Enthusiast',
    'Creative Thinker',
];

const Showcase = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    clearTimeout(toastTimer.current);
    setToast(`${label} copied!`);
    toastTimer.current = setTimeout(() => setToast(null), 2000);
  };

  return (
    <PaddingContainer
        id='Home'
        left="3%"
        right="10%"
        top="18%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
    >

        <FlexContainer align="center" fullWidthChild>
                    {/* --left content-- */}
            <FlexContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
                justify="flex-end"
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <SmallImage src={ShowcaseImg}  alt="showcase" />
                    </ShowcaseImageCard>

                    <Particle 
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="-80px"
                        left="20px"
                        height="50px"
                        rotate="0deg"
                    />
                </ShowcaseParticleContainer>
            </FlexContainer>

            {/* --right content-- */}
            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">Hi there,</Heading>

                <Heading
                    as="h2"
                    size="h2"
                    top="0.5rem"
                    bottom="1rem"
                >
                    I'm <BlueText>Emil Florén</BlueText>
                </Heading>

                <Heading as="h4" size="h4" right="20px" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.3rem' }}>
                    Creative{' '}
                    <AnimatePresence mode="wait">
                        <BlueText
                            as={motion.span}
                            key={roleIndex}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                        >
                            {roles[roleIndex]}
                        </BlueText>
                    </AnimatePresence>
                    {' '}with a Background in Leadership and Construction.
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Emil is a motivated and fast-growing developer who enjoys creating
                    user-friendly solutions. He approaches challenges with curiosity
                    and creativity, making him a valuable addition to any project.
                </ParaText>

                {/* --social-icons-- */}
                <FlexContainer gap="20px"
                    responsiveFlex
                >
                    <a href="https://www.linkedin.com/in/emil-floren-872633332" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn in new window"
                        title="LinkedIn"
                    >    
                        <IconContainer color="white" size="1.5rem">
                            <BsLinkedin />
                        </IconContainer>
                    </a>

                    <a href="https://www.instagram.com/emilfloren96/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Instagram"
                    >
                        <IconContainer color="white" size="1.5rem">
                            <BsInstagram />
                        </IconContainer>
                    </a>

                    <motion.div
                        onClick={() => copyToClipboard('emilfloren96@gmail.com', '📧 emilfloren96@gmail.com')}
                        whileTap={{ scale: 0.85 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <IconContainer color="white" size="1.5rem">
                            <BsEnvelope />
                        </IconContainer>
                    </motion.div>

                    <motion.div
                        onClick={() => copyToClipboard('+46 70 777 30 79', '📞 +46 70 777 30 79')}
                        whileTap={{ scale: 0.85 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <IconContainer color="white" size="1.5rem">
                            <BsPhone />
                        </IconContainer>
                    </motion.div>

                </FlexContainer>

                <div style={{ position: 'relative' }}>
                    <AnimatePresence>
                        {toast && (
                            <Toast
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.2 }}
                            >
                                {toast}
                            </Toast>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase