import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import IncrementDecrement from "./Components/IncrementDecrement/IncrementDecrement";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar";
import Catalog from "./Components/Catalog/Catalog";

function App() {
  return (
    <div className="font-Rg-Regular">
      <Navbar />
      <HeroSection />
      <MainSection />
      <IncrementDecrement />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
