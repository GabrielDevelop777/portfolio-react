import useOnScreen from "@/hooks/useOnScreen";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import TrashImg from "../../../assets/trash.svg";
import {
	ContactContainer,
	ContactForm,
	FormGroup,
	FormInput,
	FormLabel,
	FormTextarea,
	SectionDescription,
	SectionTitle,
	SubmitButton,
} from "./styles";

const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const controls = useAnimation();
	const [ref, isOnScreen] = useOnScreen({ threshold: 0.2 });

	useEffect(() => {
		if (isOnScreen) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isOnScreen, controls]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Dados do formulário:", formData);
		alert("Mensagem enviada! (Simulação)");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<ContactContainer bgImage={TrashImg} id="contato" ref={ref}>
			<motion.div
				variants={sectionVariants}
				initial="hidden"
				animate={controls}
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<SectionTitle variants={itemVariants}>Entre em Contato</SectionTitle>
				<SectionDescription variants={itemVariants}>
					Tem uma pergunta ou quer trabalhar junto? Preencha o formulário
					abaixo.
				</SectionDescription>

				<ContactForm
					action="https://formcarry.com/s/WFZq3PikAcc"
					method="POST"
					enctype="multipart/form-data"
					// onSubmit={handleSubmit}
					variants={itemVariants}
				>
					<FormGroup>
						<FormInput
							variants={itemVariants}
							type="text"
							id="name"
							name="name"
							placeholder=" "
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<FormLabel htmlFor="name">Nome</FormLabel>
					</FormGroup>
					<FormGroup>
						<FormInput
							variants={itemVariants}
							type="email"
							id="email"
							name="email"
							placeholder=" "
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<FormLabel htmlFor="email">Email</FormLabel>
					</FormGroup>
					<FormGroup>
						<FormTextarea
							variants={itemVariants}
							id="message"
							name="message"
							placeholder=" "
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<FormLabel htmlFor="message">Sua Mensagem</FormLabel>
					</FormGroup>
					<SubmitButton
						variants={itemVariants}
						type="submit"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Enviar Mensagem
					</SubmitButton>
				</ContactForm>
			</motion.div>
		</ContactContainer>
	);
};

export default Contact;
