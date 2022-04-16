import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Stories from "./routes/Stories/Stories";
import Features from "./routes/Features/Features";
import Pricing from "./routes/Pricing/Pricing";
function App() {
  return (
    <div className="App">
      <Header />
        <Pricing />
      <Footer />
    </div>
  );
}

export default App;
