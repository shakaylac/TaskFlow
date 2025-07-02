import './CSS/Header.css';

function Header() {
    /* Code javascript here */
        let greeting = document.getElementById('greeting');
        let userName = document.getElementById('user-name');

        const date = new Date();
        let currentHour = date.getHours();

         

        if (currentHour >= 5 && currentHour < 12) {
            greeting.innerHTML = "Good Morning";

        } else if (currentHour >= 12 && currentHour < 18) {
            greeting.innerHTML = "Good Afternoon";

        } else if (currentHour >= 18 || currentHour < 5) {
            greeting.innerHTML = "Good Evening";
        
        };

            greeting.style.fontFamily = 'Inter';
            greeting.style.color = '#686666';
            greeting.style.fontSize = '20px';





    return(
        <>
        <header className="header">
            <h2 className="logo">TaskFlow</h2>
            <p id="greeting"></p>
            <p id="user-name"></p>

            <div className="container-btns">
                <img className='settings-icon' src='logo.svg'></img>
                <button className="settings" id="settings" />
                <button className="inbox" id="inbox" />

                <button className="new-project" id="new_project">+ New Project</button>
            </div>

        </header>
        </>
    );
};

export default Header;

