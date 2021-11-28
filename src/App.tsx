import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Loading from "./components/loading/loading";
import Home from "./components/main/Home";

const App = () => {
    const [content, setContent] = useState(<div>defualt</div>);
    const [showHomePage, setShowHomePage] = useState(false);
    
    const onClickLoadingPage = () => {
        setShowHomePage(true);
    }

    useEffect(() => {
        if (!showHomePage) {
            setContent(<Loading onClick={onClickLoadingPage}/>);
        } else {
            setContent(
                <div className="app_contents">
                    <header id="app-header">
                        <Header />
                    </header>
                        <BrowserRouter>
                            <Route exact path="/" component={Home} />
                        </BrowserRouter>
                    <footer id="app-footer">
                        <Footer />
                    </footer>
                </div>
            );
        }

    }, [showHomePage])

    return (
        <div id="App">
            {content}
        </div>
    );
}

export default App;
