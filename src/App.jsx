import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home";

// Apenas o fragmento é necessário, sem o AppContainer que controlava a rolagem.
function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</>
	);
}

export default App;
