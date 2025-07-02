import './CSS/Header.css';

function Header() {
    return(
        <>
        <header className="header">
            <h2 className="logo">TaskFlow</h2>
            <p id="greeting"></p>
            <p id="user-name"></p>

            <div className="container-btns">
                <button className="settings" id="settings"></button>
                <button className="inbox" id="inbox"></button>

                <button className="new-project" id="new_project">+ New Project</button>
            </div>

        </header>
        </>
    );
};

export default Header;

