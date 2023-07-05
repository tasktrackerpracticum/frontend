import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import "../../scss/app.scss";
import SideNavigation from "../SideNavigation/SideNavigation.jsx";
import Menu from "../Menu/Menu.jsx";
import Profile from "../Profile/Profile.jsx"

function App() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<>
			<div className="page">
				<div className="page__container">
					<Header />
					<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
					<SideNavigation active={menuActive} setActive={setMenuActive} />
					<Profile />
				</div>
			</div>
		</>
	);
}

export default App;
