import React from "react";
import { StyledButton } from "./styles";

/**
 * Componente de botão reutilizável.
 * @param {object} props
 * @param {string} [props.variant='primary'] - A variante de estilo do botão ('primary', 'ghost').
 * @param {React.ReactNode} props.children - O conteúdo do botão.
 * @param {string} props.href - O link para onde o botão aponta.
 * @param {object} props.animationProps - Props adicionais para o Framer Motion.
 */
const Button = ({
	children,
	variant = "primary",
	href,
	animationProps,
	...props
}) => {
	return (
		<StyledButton
			variant={variant}
			href={href}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			{...animationProps} // Permite passar variantes de animação, etc.
			{...props}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
