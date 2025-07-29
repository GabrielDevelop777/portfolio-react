import projectImage1 from "@/assets/images/cadastro.png";
import projectImage2 from "@/assets/images/delicias.png";
import projectImage3 from "@/assets/images/devburguer.png";
import projectImage4 from "@/assets/images/freela.png";
import projectImage5 from "@/assets/images/pedido.png";
import useOnScreen from "@/hooks/useOnScreen";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	ProjectDescription,
	ProjectImage,
	ProjectInfoOverlay,
	ProjectLink,
	ProjectSlide,
	ProjectTitle,
	ProjectsContainer,
	SectionTitle,
	SwiperContainer,
} from "./styles";

const projectsData = [
	{
		title: "Cadastro de Usuarios",
		description:
			"Plataforma simples de cadastro de usuarios com React, Node.js e Prisma.",
		image: projectImage1,
		link: "https://github.com/GabrielDevelop777/cadastro-usuarios",
	},
	{
		title: "Delícias da Dri",
		description: "Freelancer desenvolvido para uma dona de lanchonete.",
		image: projectImage2,
		link: "https://delicias-da-dri.vercel.app/",
	},
	{
		title: "Devburguer",
		description: "Hamburgueria completa com pagamento com cartão.",
		image: projectImage3,
		link: "https://github.com/GabrielDevelop777/devburger-interface",
	},
	{
		title: "Oziel Manutenção",
		description: "Freelancer desenvolvido para um Tecnico de manutenções.",
		image: projectImage4,
		link: "https://github.com/GabrielDevelop777/freelancer-oziel",
	},
	{
		title: "Pedidos via WhatsApp",
		description:
			"Cardapio digital com horario dinamica de abertura e fechamento.",
		image: projectImage5,
		link: "https://pedido-via-wpp.vercel.app/",
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
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

const Projects = () => {
	const controls = useAnimation();
	const [ref, isOnScreen] = useOnScreen({ threshold: 0.2 });

	useEffect(() => {
		if (isOnScreen) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isOnScreen, controls]);

	return (
		<ProjectsContainer id="projetos" ref={ref}>
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
				<SectionTitle variants={itemVariants}>Meus Projetos</SectionTitle>

				<SwiperContainer variants={itemVariants}>
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={"auto"}
						loop={true}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={{ clickable: true }}
						navigation={true}
						modules={[EffectCoverflow, Pagination, Navigation]}
						className="mySwiper"
					>
						{projectsData.map((project, index) => (
							<SwiperSlide
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								style={{ width: "60%", maxWidth: "600px" }}
							>
								<ProjectSlide>
									<ProjectImage src={project.image} alt={project.title} />
									<ProjectInfoOverlay>
										<ProjectTitle>{project.title}</ProjectTitle>
										<ProjectDescription>
											{project.description}
										</ProjectDescription>
										<ProjectLink
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Ver mais &rarr;
										</ProjectLink>
									</ProjectInfoOverlay>
								</ProjectSlide>
							</SwiperSlide>
						))}
					</Swiper>
				</SwiperContainer>
			</motion.div>
		</ProjectsContainer>
	);
};

export default Projects;
