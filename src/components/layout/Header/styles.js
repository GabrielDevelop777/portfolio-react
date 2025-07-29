import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const HeaderContainer = styled(motion.header)`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  ${({ $scrolled }) =>
		$scrolled &&
		css`
      background-color: rgba(15, 15, 15, 0.85);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    `}
  
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

// O Logo agora é um componente de motion para poder ser animado
export const Logo = styled(motion.a)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 6.25rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  z-index: 101;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// --- NAVEGAÇÃO PARA DESKTOP ---

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const DesktopNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-right: 100px;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// --- NOVA NAVEGAÇÃO PARA MOBILE ---

export const MenuToggle = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 101;
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Container para os links no mobile. Fica posicionado no centro do header.
export const MobileNav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MobileNavList = styled(motion.ul)`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  pointer-events: auto;
`;

export const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
`;
