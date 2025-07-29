import styled from "styled-components";

// Container principal do rodapé.
export const FooterContainer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background-color: #111; // Mesma cor de fundo da seção de projetos
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

// Container para os ícones das redes sociais.
export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

// Link individual para uma rede social.
export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem; // Tamanho do ícone
  transition: color 0.3s ease, transform 0.3s ease;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

// Texto de direitos de autor.
export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.text}99; // Cor com um pouco de transparência
  font-size: 0.9rem;
`;
