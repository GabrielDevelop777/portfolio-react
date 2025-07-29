import React from "react";
// Para os ícones, vamos usar uma biblioteca como a 'react-icons'.
// Instale com: yarn add react-icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
	CopyrightText,
	FooterContainer,
	SocialLink,
	SocialLinks,
} from "./styles";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialLinks>
				<SocialLink
					href="[https://github.com](https://github.com)"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<FaGithub />
				</SocialLink>
				<SocialLink
					href="[https://linkedin.com](https://linkedin.com)"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FaLinkedin />
				</SocialLink>
				<SocialLink
					href="[https://instagram.com](https://instagram.com)"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<FaInstagram />
				</SocialLink>
			</SocialLinks>
			<CopyrightText>
				© {new Date().getFullYear()} Gabriel. Todos os direitos reservados.
			</CopyrightText>
		</FooterContainer>
	);
};

export default Footer;
