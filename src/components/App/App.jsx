import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import "../../scss/components/app.scss";
import SideNavigation from "../SideNavigation/SideNavigation.jsx";
import Menu from "../Menu/Menu.jsx";

function App() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<>
			<div className="page">
				<div className="page__container">
					<Header />
					<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
					<SideNavigation active={menuActive} setActive={setMenuActive} />
				</div>
			</div>
		</>
	);
}

export default App;
