import "./styles/App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Content from "./components/Content";
import Feedback from "./components/Feedback";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <>
      <main className="container">
        <Topbar />
        <Header />
        <Features />
        <Content />
        <Feedback />
        <Cta />
        <Footer />
      </main>
      <Footer2 />
    </>
  );
}

export default App;
