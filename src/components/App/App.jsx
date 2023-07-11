import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import "../../scss/app.scss";
import SideNavigation from "../SideNavigation/SideNavigation.jsx";
import Menu from "../Menu/Menu.jsx";
import Profile from "../Profile/Profile.jsx"

function App() {
	const [menuActive, setMenuActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

	return (
		<>
			<div className="page">
				<div className="page__container">
					<Header active={profileActive} setActive={setProfileActive}/>
					<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
					<SideNavigation active={menuActive} setActive={setMenuActive} />
					<Profile active={profileActive} setActive={setProfileActive} />
				</div>
			</div>
		</>
	);
}

export default App;
