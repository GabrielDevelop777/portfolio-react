import { motion } from "framer-motion";
import styled from "styled-components";

// 'position: fixed' é o segredo para ele ficar "flutuando" na tela.
export const ButtonWrapper = styled(motion.button)`
  position: fixed;
  bottom: 30px; /* Distância da parte de baixo */
  right: 30px;  /* Distância da direita */
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: #000; /* Cor do ícone */
  width: 35px;
  height: 35px;
  border-radius: 50%; /* Para ficar redondinho */
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem; /* Tamanho do ícone */
  z-index: 1000; // Garante que ele fique por cima de tudo
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
`;
