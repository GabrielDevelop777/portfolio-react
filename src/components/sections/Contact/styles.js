import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  padding: 100px ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  scroll-margin-top: 80px;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text}99;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  text-align: center;
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  color: ${({ theme }) => theme.colors.text}99;
  pointer-events: none;
  transition: all 0.2s ease-out;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + ${FormLabel},
  &:not(:placeholder-shown) + ${FormLabel} {
    top: -10px;
    left: 10px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 5px;
  }
`;

export const FormTextarea = styled(FormInput).attrs({ as: "textarea" })`
  resize: vertical;
  min-height: 150px;
`;

export const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
