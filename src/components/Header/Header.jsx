import { Route } from "react-router-dom";
import defaultIcon from "../../images/icon.svg";
import options from "../../images/options.svg";
import { activeFunctionType } from '../../constatnts/prop-types';

export default function Header({active, setActive}) {

	const toggleClass = () => {
		setActive(!active);
	  };

	return (
		<Route path={["/organization", "/project", "/"]}>
			<header className="header">
				<div className="header__container">
					<h2 className="header__title">Такса</h2>
				</div>
				<div className="header__link-container">
					<div className="header__options">
						<img src={options} alt="options" className="header__options-icon" />
					</div>
					<div className="header__avatar-profile">
						<img
							src={defaultIcon}
							alt="avatar"
							className="header__avatar-icon"
							onClick={toggleClass}
						/>
					</div>
				</div>
			</header>
		</Route>
	);
}

Header.propTypes = {
	active: activeFunctionType,
	setActive: activeFunctionType
  }
