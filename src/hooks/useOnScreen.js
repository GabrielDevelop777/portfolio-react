import { useEffect, useRef, useState } from "react";

/**
 * Hook customizado que detecta se um elemento está visível na tela.
 * @param {object} options - Opções para o IntersectionObserver (rootMargin, threshold).
 * @returns {[React.RefObject, boolean]} - Retorna uma referência para ser anexada ao elemento e um booleano indicando se está visível.
 */
const useOnScreen = (options = { threshold: 0.1, rootMargin: "0px" }) => {
	// Ref para o elemento que queremos observar.
	const ref = useRef(null);
	// Estado para guardar se o elemento está visível.
	const [isOnScreen, setIsOnScreen] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// O elemento DOM real.
		const element = ref.current;
		if (!element) return;

		// Cria um observador de interseção.
		// Ele executa um callback quando o elemento entra ou sai da tela.
		const observer = new IntersectionObserver(([entry]) => {
			// Atualiza o estado com base na propriedade isIntersecting.
			setIsOnScreen(entry.isIntersecting);
		}, options);

		// Começa a observar o elemento.
		observer.observe(element);

		// Função de limpeza: para de observar o elemento quando o componente é desmontado.
		return () => {
			observer.unobserve(element);
		};
	}, [ref, options]); // O efeito depende da ref e das opções.

	return [ref, isOnScreen];
};

export default useOnScreen;
