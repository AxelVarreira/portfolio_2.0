import "./App.css";
import ContentComponent from "./components/content/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import SectionComponent from "./components/section/SectionComponent";

function App() {
  return (
    <div className="font-blex h-dvh">
      <HeaderComponent />
      <ContentComponent color="bg-white">
        <SectionComponent />
      </ContentComponent>
      <FooterComponent />
    </div>
  );
}

export default App;
