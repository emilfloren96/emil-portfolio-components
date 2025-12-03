import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;
    margin-right: 8rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        margin-left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const ShowcaseImageCard = styled.div`
    width: max-content;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 100%;
        max-width: 350px;
    }
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: rotate(${({ rotate }) => rotate});

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      display: none;
    }
`

