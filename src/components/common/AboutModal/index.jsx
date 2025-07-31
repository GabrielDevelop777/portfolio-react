import { AnimatePresence } from "framer-motion";
import React from "react";
import {
	Backdrop,
	CloseButton,
	ContentWrapper,
	ImageWrapper,
	ModalContainer,
	ModalText,
	ModalTitle,
	ProfileImage,
	ProjectsButton,
	TextWrapper,
} from "./styles";

import profilePic from "@/assets/images/dev.jpeg";

const backdropVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const modalVariants = {
	hidden: { y: "-50px", opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 30 },
	},
	exit: { y: "50px", opacity: 0, transition: { duration: 0.3 } },
};

const AboutModal = ({ isOpen, onClose }) => {
	// ALTERAÇÃO: A função de rolagem foi refinada para garantir consistência.
	const handleScrollToProjects = (e) => {
		e.preventDefault();
		onClose();

		setTimeout(() => {
			const targetElement = document.getElementById("projetos");
			if (targetElement) {
				const headerOffset = 80;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition =
					elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}, 300); // Atraso para a animação de fecho do modal
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<Backdrop
						variants={backdropVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={onClose}
					/>
					<ModalContainer
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<CloseButton onClick={onClose}>&times;</CloseButton>
						<ContentWrapper>
							<ImageWrapper>
								<ProfileImage src={profilePic} alt="Foto de Perfil" />
							</ImageWrapper>
							<TextWrapper>
								<ModalTitle>Sobre Mim</ModalTitle>
								<ModalText>
									Olá! Eu sou um desenvolvedor apaixonado por criar interfaces
									intuitivas e experiências digitais memoráveis. Com um forte
									foco em design e performance, eu transformo ideias complexas
									em soluções elegantes e funcionais usando as tecnologias mais
									modernas do mercado.
								</ModalText>
								<ProjectsButton
									href="#projetos"
									onClick={handleScrollToProjects}
								>
									Ver meus projetos
								</ProjectsButton>
							</TextWrapper>
						</ContentWrapper>
					</ModalContainer>
				</>
			)}
		</AnimatePresence>
	);
};

export default AboutModal;
