import "./App.css";

import Profile from "./components/Profile";
import TwitterLink from "./components/TwitterLink";
import ZuriTeam from "./components/ZuriTeam";
import ZuriBooks from "./components/ZuriBooks";
import PythonBooks from "./components/PythonBooks";
import BackgroundCheck from "./components/BackgroundCheck";
import DesignBooks from "./components/DesignBooks";
import Contact from "./components/ContactMe";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Profile />
        <div className="Links">
          <TwitterLink />
          <ZuriTeam />
          <ZuriBooks />
          <PythonBooks />
          <BackgroundCheck />
          <DesignBooks />
          <Contact />
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}

export default App;
