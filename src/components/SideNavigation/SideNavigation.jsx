import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.scss";
import {items} from "../../constatnts/constants"

export default function SideNavigation({ active, setActive }) {
	return (
		<section className={active ? "side-navigation__active" : "side-navigation"} onClick={() => setActive(false)}>
			<div className="side-navigation__menu">
			
				<ul className="side-navigation__menu-content" onClick={(e) => e.isPropagationStopped}>
					{items.map((item) => (
						<li key={item.toSting()} className="side-navigation__link-container">
							<Link to={item.href} className="side-navigation__link">
								{item.value}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
		
	);
}
