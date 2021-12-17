import Carousel from "./components/Carousel";
import Header from "./UI/Header";
import "./styles/main.scss";
import ProductProfile from "./components/ProductProfile";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Carousel />
        <ProductProfile />
      </main>
    </div>
  );
}

export default App;
