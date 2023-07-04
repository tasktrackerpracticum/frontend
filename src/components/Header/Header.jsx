import React from "react";
import "../../scss/header.scss";
import {Route, Link } from "react-router-dom";
import options from "../../images/options.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Header() {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<Route path={['/profile', '/organization', '/project']}>

		<header className="header">
			<div className="header__container">
				<Link to='/'>
				<h2 className="header__title">Такса</h2>
				</Link>
			</div>

			<div className="header__link-container">
				<Link className="header__options" to="/profile">
					<img src={options} alt="options" className="header__options-icon" />
				</Link>
				<Link className="header__avatar-profile" to="/profile">
					<img
						src={currentUser.avatar}
						alt="avatar"
						className="header__avatar-icon"
					/>
				</Link>
			</div>
		</header>
		</Route>
	);
}
