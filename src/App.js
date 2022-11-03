import "./App.css";

import BackgroundCheck from "./BackgroundCheck";
import DesignBooks from "./DesignBooks";
import Footer from "./Footer";
import Profile from "./Profile";
import PythonBooks from "./PythonBooks";
import Socials from "./Socials";
import TwitterLink from "./TwitterLink";
import ZuriBooks from "./ZuriBooks";
import ZuriTeam from "./ZuriTeam";

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
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}

export default App;
