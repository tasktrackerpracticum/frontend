import avatar from "../../images/user-avatar-profile.png";
import useValidation from "../../hooks/useValidation";
import { activeFunctionType } from '../../constatnts/prop-types';


function Profile({ active, setActive }) {
	const { values, handleChange } = useValidation();

	return (
		<section className={active ? "profile__active" : "profile"}>
			<div className="profile__wrap">
				<h1 className="profile__title">Профиль</h1>
				<h2 className="profile__status">Статус</h2>
			</div>

			<div className="profile__content">
				<div className="profile__avatar-overlay"> </div>
				<img src={avatar} alt="место для аватара" className="profile__avatar" />
				<div className="profile__container-check">
					<input
						type="checkbox"
						id="check-input"
						name="check"
						className="profile__input-check"
					/>
					<label htmlFor="check-input" className="profile__check-email">
						{" "}
						Уведомление на почту
					</label>
				</div>

				<div className="profile__info">
					<div className="profile__container">
						<h2 className="profile__subtitle">Имя</h2>
						<input
							className="profile__input"
							value={values.name}
							onChange={handleChange}
							id="name-input"
							type="text"
							placeholder="Имя"
							name="name"
							minLength="3"
							maxLength="40"
							required
						/>
					</div>
					<div className="profile__container">
						<h2 className="profile__subtitle">Фамилия</h2>
						<input
							className="profile__input"
							value={values.surname}
							onChange={handleChange}
							id="surname-input"
							type="text"
							placeholder="Имя"
							name="surname"
							minLength="5"
							maxLength="40"
							required
						/>
					</div>
					<div className="profile__container">
						<h2 className="profile__subtitle">Дата рождения</h2>
						<input
							className="profile__input"
							value={values.date}
							onChange={handleChange}
							id="date-input"
							type="date"
							placeholder="Дата"
							name="date"
							required
						/>
					</div>
					<div className="profile__container">
						<h2 className="profile__subtitle">Пол</h2>
						<input
							className="profile__input"
							value={values.gender}
							onChange={handleChange}
							id="gender-input"
							type="text"
							placeholder="Укажите пол"
							name="gender"
							minLength="3"
							maxLength="7"
							required
						/>
					</div>
					<div className="profile__container">
						<h2 className="profile__subtitle">Телефон</h2>
						<input
							className="profile__input"
							value={values.phone}
							onChange={handleChange}
							id="phone-input"
							type="number"
							placeholder="+7(__)__-__-__"
							name="phone"
							minLength="9"
							maxLength="11"
							required
						/>
					</div>
					<div className="profile__container">
						<h2 className="profile__subtitle">Электронная почта</h2>
						<input
							className="profile__input"
							value={values.email}
							onChange={handleChange}
							id="email-input"
							type="email"
							placeholder="Укажите почту"
							name="email"
							minLength="7"
							maxLength="20"
							required
						/>
					</div>
				</div>
				<div className="profile__container-work">
					<h2 className="profile__subtitle">Должность</h2>
					<input
						className="profile__input"
						value={values.work}
						onChange={handleChange}
						id="work-input"
						type="text"
						placeholder="Укажите должность"
						name="work"
						minLength="2"
						maxLength="10"
						required
					/>
				</div>
				<div className="profile__container-timezone">
					<h2 className="profile__subtitle">Часовой пояс</h2>
					<input
						className="profile__input"
						value={values.timezone}
						onChange={handleChange}
						id="timezone-input"
						type="datetime-local"
						placeholder="Выберите ваш часовой пояс"
						name="timezone"
						required
					/>
				</div>

				<div className="profile__container-btn">
					<button className="profile__submit-btn" type="submit">
						Сохранить
					</button>
					<button
						className="profile__cancel-btn"
						onClick={() => setActive(!active)}
					>
						Отмена
					</button>
				</div>
			</div>
		</section>
	);
}

export default Profile;

  Profile.propTypes = {
	active: activeFunctionType,
	setActive: activeFunctionType
  }
