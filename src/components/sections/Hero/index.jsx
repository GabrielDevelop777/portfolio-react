import GithubIcon from "@/assets/github.svg";
import HeroSvg from "@/assets/svgs/webdev.svg";
import BackgroundImage from "@/assets/trash.svg";
import AboutModal from "@/components/common/AboutModal";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import {
	AboutLink,
	Description,
	GithubLink,
	HeroContainer,
	HeroImage,
	ImageContainer,
	TextContainer,
	Title,
} from "./styles";

const textContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const textItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const translateX = useTransform(x, [-100, 100], [1, -1]);
	const translateY = useTransform(y, [-100, 100], [1, -1]);

	const handleMouseMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		x.set((mouseX / width) * 200 - 100);
		y.set((mouseY / height) * 200 - 100);
	};

	const handleOpenModal = (e) => {
		e.preventDefault();
		setIsModalOpen(true);
	};

	return (
		<>
			<HeroContainer
				id="inicio"
				bgImage={BackgroundImage}
				onMouseMove={handleMouseMove}
				onMouseLeave={() => {
					x.set(0);
					y.set(0);
				}}
			>
				<TextContainer
					variants={textContainerVariants}
					initial="hidden"
					animate="visible"
				>
					<Title>
						Desenvolvedor <br />
						<span>FullStack</span>
					</Title>
					<motion.div variants={textItemVariants}>
						<Description>
							Resolvendo problemas de design, criando interfaces de usuário
							inteligentes e interações úteis.
						</Description>
					</motion.div>
					<motion.div variants={textItemVariants}>
						<AboutLink href="#" onClick={handleOpenModal}>
							Sobre mim &rarr;
						</AboutLink>
					</motion.div>
				</TextContainer>

				<ImageContainer>
					<HeroImage
						src={HeroSvg}
						alt="Ilustração de tecnologia"
						style={{ x: translateX, y: translateY }}
						transition={{ type: "spring", stiffness: 100, damping: 15 }}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
					/>
				</ImageContainer>

				<GithubLink
					href="https://github.com/GabrielDevelop777"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={GithubIcon} alt="GitHub" />
				</GithubLink>
			</HeroContainer>
			<AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
};

export default Hero;
