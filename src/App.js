import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Cntact";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </main>
      <Footer />
    </>
  );
}
export default App;
