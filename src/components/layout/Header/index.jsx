import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
	DesktopNav,
	DesktopNavLink,
	HeaderContainer,
	Logo,
	MenuToggle,
	MobileNav,
	MobileNavLink,
	MobileNavList,
} from "./styles";

// Componente para o ícone do Logo
const LogoIcon = () => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
	>
		<path
			d="M8 9.6L4 12L8 14.4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16 9.6L20 12L16 14.4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M13.2 6L10.8 18"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);

// Componente para o ícone animado do menu
const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 92%)"
		strokeLinecap="round"
		{...props}
	/>
);

// --- VARIANTES DE ANIMAÇÃO ATUALIZADAS ---

// Variantes para a Logo
const logoVariants = {
	open: {
		x: "-120%", // Move a logo completamente para fora da tela
		opacity: 0,
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
	closed: {
		x: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 400, damping: 30, delay: 0.2 }, // Delay para a logo voltar depois dos links sumirem
	},
};

// Variantes para a lista de links mobile
const listVariants = {
	open: {
		transition: { staggerChildren: 0.1, delayChildren: 0.1 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

// Variantes para cada item da lista mobile
const itemVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: {
		x: 40,
		opacity: 0,
		transition: { duration: 0.2 },
	},
};

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSmoothScroll = (e) => {
		e.preventDefault();
		if (isOpen) setIsOpen(false);

		const targetId = e.currentTarget.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const headerOffset = 80;
			const elementPosition = targetElement.offsetTop - headerOffset;
			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<HeaderContainer $scrolled={scrolled}>
			<Logo
				href="#inicio"
				onClick={handleSmoothScroll}
				variants={logoVariants}
				animate={isOpen ? "open" : "closed"}
			>
				<LogoIcon />
				Gabriel
			</Logo>

			<DesktopNav>
				<DesktopNavLink href="#inicio" onClick={handleSmoothScroll}>
					Início
				</DesktopNavLink>
				<DesktopNavLink href="#projetos" onClick={handleSmoothScroll}>
					Projetos
				</DesktopNavLink>
				<DesktopNavLink href="#contato" onClick={handleSmoothScroll}>
					Contato
				</DesktopNavLink>
			</DesktopNav>

			<AnimatePresence>
				{isOpen && (
					<MobileNav
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<MobileNavList
							variants={listVariants}
							initial="closed"
							animate="open"
							exit="closed"
						>
							<MobileNavLink
								variants={itemVariants}
								href="#inicio"
								onClick={handleSmoothScroll}
							>
								Início
							</MobileNavLink>
							<MobileNavLink
								variants={itemVariants}
								href="#projetos"
								onClick={handleSmoothScroll}
							>
								Projetos
							</MobileNavLink>
							<MobileNavLink
								variants={itemVariants}
								href="#contato"
								onClick={handleSmoothScroll}
							>
								Contato
							</MobileNavLink>
						</MobileNavList>
					</MobileNav>
				)}
			</AnimatePresence>

			<MenuToggle onClick={() => setIsOpen(!isOpen)}>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg width="23" height="23" viewBox="0 0 23 23">
					<Path
						initial="closed"
						variants={{
							closed: { d: "M 2 2.5 L 20 2.5" },
							open: { d: "M 3 16.5 L 17 2.5" },
						}}
						animate={isOpen ? "open" : "closed"}
					/>
					<Path
						initial="closed"
						d="M 2 9.423 L 20 9.423"
						variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
						transition={{ duration: 0.1 }}
						animate={isOpen ? "open" : "closed"}
					/>
					<Path
						initial="closed"
						variants={{
							closed: { d: "M 2 16.346 L 20 16.346" },
							open: { d: "M 3 2.5 L 17 16.346" },
						}}
						animate={isOpen ? "open" : "closed"}
					/>
				</svg>
			</MenuToggle>
		</HeaderContainer>
	);
};

export default Header;
