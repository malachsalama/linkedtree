import "./App.css";

import Profile from "./Profile";
import TwitterLink from "./TwitterLink";
import ZuriTeam from "./ZuriTeam";
import ZuriBooks from "./ZuriBooks";
import PythonBooks from "./PythonBooks";
import BackgroundCheck from "./BackgroundCheck";
import DesignBooks from "./DesignBooks";
import Contact from "./ContactMe";
import Socials from "./Socials";
import Footer from "./Footer";

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
