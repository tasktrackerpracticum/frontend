import React, { useState } from "react";
import "./Menu.scss";
import plus from "../../images/icon-create-project.svg";
import folder from "../../images/icon-folder-project.svg";
import task from "../../images/icon-task.svg";
import reports from "../../images/icon-reports.svg";

export default function Menu({ menuActive, setMenuActive }) {
	return (
		<section className="menu">
			<div className="menu__container">
				<img
					src={plus}
					alt="Создать проект"
					className="menu__icon-btn"
					onClick={() => setMenuActive(!menuActive)}
				></img>
				<img
					src={folder}
					className="menu__icon-btn"
					alt="мои проекты"
					onClick={() => setMenuActive(!menuActive)}
				></img>
				<img
					src={task}
					className="menu__icon-btn"
					alt="мои задачи"
					onClick={() => setMenuActive(!menuActive)}
				></img>
				<img
					src={reports}
					className="menu__icon-btn"
					alt="мои отчеты"
					onClick={() => setMenuActive(!menuActive)}
				></img>
			</div>
		</section>
	);
}
