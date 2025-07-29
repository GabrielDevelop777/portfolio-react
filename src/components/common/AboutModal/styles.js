import { motion } from "framer-motion";
import styled from "styled-components";

// Fundo escuro que cobre a tela atrás do modal.
export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 2000;
`;

// O container principal do modal.
export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px; /* <-- TAMANHO MÁXIMO REDUZIDO */
  max-height: 90vh;
  overflow-y: auto;
  background: #1a1a1a;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.spacing.xl}; /* Padding simplificado */
  z-index: 2001;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    top: 20%;
    left: 5%;
  }
`;

// Botão para fechar o modal.
export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text}99;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(90deg);
  }
`;

// Wrapper para o conteúdo interno, para facilitar a responsividade.
export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Container para a imagem.
export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

// A imagem de perfil, estilizada para ser redonda.
export const ProfileImage = styled.img`
  width: 160px; /* <-- TAMANHO DA IMAGEM REDUZIDO */
  height: 160px; /* <-- TAMANHO DA IMAGEM REDUZIDO */
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

// Container para o texto.
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2rem; /* <-- TAMANHO DO TÍTULO REDUZIDO */
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text}b3;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// Botão para ver os projetos
export const ProjectsButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;
