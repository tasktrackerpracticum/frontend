import React from "react";
import "../../scss/header.scss";
import { Link } from "react-router-dom";
import notice from "../../images/notice.svg";
import options from "../../images/options.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Header() {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<header className="header">
			<div className="header__container">
				<h2 className="header__title">Такса</h2>
			</div>

			<div className="header__link-container">
				<Link className="header__notice" to="/notice">
					<img src={notice} alt="notice" className="header__notice-icon" />
				</Link>
				<Link className="header__options" to="/options">
					<img src={options} alt="options" className="header__options-icon" />
				</Link>
				<Link className="header__avatar-profile" to="/profile">
					<img src={currentUser.avatar} alt="avatar" className="header__avatar-icon" />
				</Link>
			</div>
		</header>
	);
}
