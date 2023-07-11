import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import "../../scss/app.scss";
import Profile from "../Profile/Profile.jsx"

function App() {
  const [profileActive, setProfileActive] = useState(false);

	return (
		<>
			<div className="page">
				<div className="page__container">
					<Header active={profileActive} setActive={setProfileActive}/>
					<Profile active={profileActive} setActive={setProfileActive} />
				</div>
			</div>
		</>
	);
}

export default App;
