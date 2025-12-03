import React from 'react'
import { motion } from 'framer-motion';

//import global style
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

//import showcase style
import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from '../styles/Showcase.styled';

//importing react-icons
import { BsInstagram, BsLinkedin, BsEnvelope, BsPhone } from 'react-icons/bs';

//import asset
import ShowcaseImg from '../assets/profile_img.jpg';
import BackgroundImg from '../assets/emoji.png';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

import { SmallImage } from '../styles/Global.styled';

const Showcase = () => {
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

                    <Heading as="h4" size="h4" right="20px">
                     Creative <BlueText>Frontend Developer</BlueText> with a Background in Leadership and Construction.
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

                    <div onClick={() => alert("emilfloren96@gmail.com")}>
                        <IconContainer color="white" size="1.5rem">
                            <BsEnvelope />
                        </IconContainer>
                    </div>

                    <div onClick={() => alert("+46 70 777 30 79")}>
                        <IconContainer color="white" size="1.5rem">
                            <BsPhone />
                        </IconContainer>
                    </div>

                </FlexContainer>
            </motion.div>

        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase