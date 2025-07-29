import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const SkillsContainer = styled.section`
  width: 60%;
  padding: 100px 0;
  overflow: hidden;
  margin-left: 20%;
  scroll-margin-top: 80px;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const MarqueeContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #0F0F0F, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #0F0F0F, transparent);
  }
`;

// O "trilho" que contém as skills e que será animado.
export const SkillTrack = styled.div`
  display: flex;
  width: fit-content; 
  animation: ${scrollAnimation} 20s linear infinite;
  padding: 30px 0;

  &:hover {
    animation-play-state: paused;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  height: 150px;
  width: 150px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 15px; // Espaçamento entre os cards.
  flex-shrink: 0; // Impede que os cards encolham.
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
