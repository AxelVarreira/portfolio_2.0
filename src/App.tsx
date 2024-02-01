import "./App.css";
import ContentComponent from "./components/content/ContentComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import SectionComponent from "./components/section/SectionComponent";

function App() {
  return (
    <div className="font-blex">
      <HeaderComponent />
      <ContentComponent color="bg-white">
        <SectionComponent />
      </ContentComponent>
    </div>
  );
}

export default App;
