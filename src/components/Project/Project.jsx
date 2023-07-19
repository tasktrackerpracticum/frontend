import { stringType } from '../../constatnts/prop-types';


export default function Project({ title }) {
  return (
    <form className='project'>
      <div className='project__list-name'>{title}</div>
      <div className='project__list-name'>16.06.2023 - 16.06.2023</div>
      <div className='project__list-name'>
        <div className='project__list-member'></div>
      </div>
      <div className='project__list-name'>
        <div className='project__list-status'>Активен</div>
      </div>
    </form>
  );
}

Project.propTypes = {
  title: stringType,
};
