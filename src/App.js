import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Stories from "./routes/Stories/Stories";
import Features from "./routes/Features/Features";
import Pricing from "./routes/Pricing/Pricing";


function App() {

  return (
    <div className="App">
        <Router hashType='hashbang'>
          <Header />
          <Routes>
            <Route path='/' exact element={ <Home /> }/>
            <Route path='/stories' element={ <Stories /> }/>
            <Route path='/features' element={ <Features /> }/>
            <Route path='/pricing' element={ <Pricing /> }/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
