import "./App.css";
import Header from "./Components/Header";
import Links from "./Components/Links";
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
