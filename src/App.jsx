import Carousel from "./components/Carousel";
import Header from "./UI/Header";
import Cart from "./components/Cart";
import "./styles/main.scss";
import ProductProfile from "./components/ProductProfile";
import ToggleContextProvider from "./contexts/toggle-context";
import SideNav from "./UI/SideNav";

function App() {
  return (
    <ToggleContextProvider>
      <div className="app-container" id="app">
        <Header />
        <SideNav id="sideNav" />
        <Cart />
        <main id="main">
          <Carousel />
          <ProductProfile />
        </main>
      </div>
    </ToggleContextProvider>
  );
}

export default App;
