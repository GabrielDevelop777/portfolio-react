import { motion } from "framer-motion";
import styled from "styled-components";

// O container principal da seção Hero.
export const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
  position: relative;
  scroll-margin-top: 80px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: auto;
    padding: 120px ${({ theme }) => theme.spacing.md};
  }
`;

// Container para o conteúdo de texto à esquerda.
export const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
  
  @media (max-width: 960px) {
    align-items: center;
    max-width: 100%;
    margin-left: -0rem;
  }
`;

// Título principal (h1).
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  span {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 960px) {
    font-size: 3rem;
  }
`;

// Parágrafo de descrição (p).
export const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text}b3;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 500px;
`;

// Link "Sobre mim".
export const AboutLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 15px 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.7;
    transition: ease-in-out 0.5s
  }
`;

// Container para a imagem à direita.
export const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 960px) {
    margin-top: ${({ theme }) => theme.spacing.xxl};
    width: 100%;
    max-width: 400px;
  }
`;

// A imagem SVG.
export const HeroImage = styled(motion.img)`
  max-width: 80%;
  height: auto;
`;

// NOVO: Link para o GitHub no canto inferior esquerdo.
export const GithubLink = styled.a`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  z-index: 10;

  img {
    width: 32px; // Tamanho do ícone
    height: 32px;
    opacity: 0.7;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover img {
    transform: translateY(-5px); // Efeito de levantar ao passar o rato
    opacity: 1;
  }

  // Esconde em telas muito pequenas para não poluir a interface.
  @media (max-width: 768px) {
    display: fixed;
  }
`;
