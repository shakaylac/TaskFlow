import './CSS/Container.css';
import Header from './Header';
import Navigation from './Navigation';

function Container() {
    return(
        <>
        <Header />
        <Navigation />

        <div className="teapot"></div>
        <div className="oval"></div>
        <div className="rec-1"></div>
        <div className="rec-2"></div>
        <div className="rec-3"></div>
        <div className="container"></div>
        </>
    );
};

export default Container;