import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home";

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
			<ScrollToTopButton />
		</>
	);
}

export default App;
