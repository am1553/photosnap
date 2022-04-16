import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Stories from "./routes/Stories/Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
