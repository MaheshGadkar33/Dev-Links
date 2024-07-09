import "./App.css";
import Header from "./Components/Header/Header";
import Links from "./Components/LinksPage/Links";
import ProfileDetailsPage from "./Components/ProfileDetailsPage";

function App() {
  return (
    <>
      <Header />
      {/* {true ? <ProfileDetailsPage /> : <Links />} */}
      <Links />
    </>
  );
}

export default App;
