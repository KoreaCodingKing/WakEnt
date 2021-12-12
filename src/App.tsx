import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Loading from "./components/loading/loading";
import Home from "./components/main/Home";

const App = () => {
    const [contents, setContents] = useState(<div>defualt</div>);
    const [showHomePage, setShowHomePage] = useState(false);
    
    setTimeout(() => {
        setShowHomePage(true);
    }, 3800)

    useEffect(() => {
        if (!showHomePage) {
            setContents(<Loading/>);
        } else {
            setContents(
                <div className="app_contents">
                    <header id="app-header">
                        <Header />
                    </header>
                    <div className="contents">
                        <BrowserRouter>
                            <Route exact path="/" component={Home} />
                        </BrowserRouter>
                    </div>
                    <footer id="app-footer">
                        <Footer />
                    </footer>
                </div>
            );
        }

    }, [showHomePage])

    return (
        <div id="App">
            {contents}
        </div>
    );
}

export default App;
