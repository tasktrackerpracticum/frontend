import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

export default function Main() {
  return (
    <main className='main'>
      <div className='main__container'>
        <ProjectHeader />
       <ProjectContainer />
      </div>
    </main>
  );
}
