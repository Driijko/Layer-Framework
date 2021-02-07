//IMPORTS //////////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Universal Styles ------------------------------------------
import "./App.css";

// Import context / providers ----------------------------------------
import {SiteForegroundContextProvider} from "./Content/0 Site/SiteForeground";

// Import Site Components ---------------------------------------------
import SiteBackground from "./Content/0 Site/SiteBackground";
import {SiteForeground} from "./Content/0 Site/SiteForeground";

// Import Pages ---------------------------------------------------------
import SplashIntroPage from "./Content/1 Sections/Demo/SplashIntro/SplashIntroPage";
import HomePage from "./Content/1 Sections/Demo/1 Home Page/HomePage";

// Import custom hooks ---------------------------------------------
import WindowResize from "./Tools/hooks/WindowResize";

// Import Music ---------------------------------------------- 
// import Audio from "./Tools/Audio";
// import music from "./Content/2 Assets/audio/music/music.mp3";

function App() {

  WindowResize();

  return (
    <div>
      <SiteBackground />
      {/* <Audio audio={[music]} playAudio={0} loop /> */}
      <SiteForegroundContextProvider>
        <Router>
          <Switch>
            <Route exact path="/demo" component={SplashIntroPage}/>
            <Route path="/demo/home" component={HomePage} />
          </Switch>
        </Router>
        <SiteForeground />
      </SiteForegroundContextProvider>
    </div>
  );
};

export default App;