import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
// Vamos usar um ícone da biblioteca 'react-icons' que já temos instalada
import { MdArrowUpward } from "react-icons/md";
import { ButtonWrapper } from "./styles";

// Animação de entrada e saída do botão
const buttonVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

const ScrollToTopButton = () => {
	// Este 'estado' vai nos dizer se o botão deve aparecer ou não.
	const [isVisible, setIsVisible] = useState(false);

	// Esta função é a "mágica" que checa a posição do scroll.
	const toggleVisibility = () => {
		// Se o utilizador rolou mais de 200 pixels para baixo...
		if (window.pageYOffset > 200) {
			setIsVisible(true); // ...a gente mostra o botão.
		} else {
			setIsVisible(false); // ...senão, a gente esconde.
		}
	};

	// Esta função faz a rolagem suave de volta para o topo.
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // A animação acontece por causa disto!
		});
	};

	// O 'useEffect' é como um detetive que fica a "ouvir" os eventos.
	// Neste caso, ele vai ficar a ouvir o evento de 'scroll' da página.
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		// É importante "limpar" o detetive quando o componente não for mais usado,
		// para não sobrecarregar o site.
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []); // O array vazio faz com que isto rode só uma vez.

	return (
		<AnimatePresence>
			{isVisible && (
				<ButtonWrapper
					onClick={scrollToTop}
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<MdArrowUpward />
				</ButtonWrapper>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTopButton;
