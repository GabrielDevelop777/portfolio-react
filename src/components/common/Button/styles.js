import { motion } from "framer-motion";
import styled, { css } from "styled-components";

// Definindo os estilos base para o botão.
const baseButtonStyles = css`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

// Definindo variações de estilo que o botão pode ter.
const variants = {
	primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-3px);
    }
  `,
	ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
    }
  `,
};

// O componente de botão estilizado.
// Ele aplica os estilos base e depois o estilo da variante passada via props.
export const StyledButton = styled(motion.a)`
  ${baseButtonStyles}
  ${({ variant = "primary" }) => variants[variant]}
`;
