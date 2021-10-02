import './App.css';
import {BrowserRouter , Route , Switch} from "react-router-dom";
import Routes from "./components/Routes/Routes";

// Import components
import Navigation from "./components/Navigation/Navigation";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation/>
            <main className="main-content">
                <TopNavigation/>
                <Routes/>
            </main>
            <br clear="all"/>
        </BrowserRouter>
    </div>
  );
}

export default App;
