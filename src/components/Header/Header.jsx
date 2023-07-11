import React from "react";
import "../../scss/header.scss";
import { Route, Link } from "react-router-dom";
import defaultIcon from "../../images/icon.svg";
import options from "../../images/options.svg";

export default function Header({ active, setActive }) {
	return (
		<Route path={["/profile", "/organization", "/project", "/"]}>
			<header className="header">
				<div className="header__container">
					<h2 className="header__title">Такса</h2>
				</div>

				<div className="header__link-container">
					<Link className="header__options" to="/profile">
						<img src={options} alt="options" className="header__options-icon" />
					</Link>
					<Link className="header__avatar-profile" to="/profile">
						<img
							src={defaultIcon}
							alt="avatar"
							className="header__avatar-icon"
							onClick={() => setActive(!active)}
						/>
					</Link>
				</div>
			</header>
		</Route>
	);
}
