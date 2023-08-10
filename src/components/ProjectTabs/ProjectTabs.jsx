import '../../scss/components/projectTabs.scss';
import iconTabs from '../../images/icon-tabs.svg';

export default function ProjectTabs() {
    return (
        <nav className="project-tabs">
            <ul className="project-tabs__list">
                <li className="project-tabs__list-item">
                    <img className='project-tabs__img' src={iconTabs}></img>
                </li>
                <li className="project-tabs__list-item">Все проекты</li>
                <li className="project-tabs__list-item">Мои</li>
                <li className="project-tabs__list-item project-tabs__list-item_active">Продажники</li>
                <li className="project-tabs__list-item">Мерчендайзеры</li>
                <li className="project-tabs__list-item">Тендеры</li>
            </ul>
        </nav>
    )
}

