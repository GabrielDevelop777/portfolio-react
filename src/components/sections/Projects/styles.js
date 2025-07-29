import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

export const SwiperContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  padding: 0 ${({ theme }) => theme.spacing.md};

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.primary};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectSlide = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; 
  border-radius: ${({ theme }) => theme.borderRadius.default};
  overflow: hidden;
  background: #222;
  box-shadow: ${({ theme }) => theme.shadows.card};

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const ProjectInfoOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectSlide}:hover & {
    opacity: 1;
  }

  ${ProjectSlide}:hover ${ProjectImage} {
    transform: scale(1.1);
  }

    @media (max-width: 768px) {
    top: 20px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ProjectLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
