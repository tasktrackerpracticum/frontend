import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListProject from '../ListProject/ListProject';

export default function Main() {
  return (
    <main className='main'>
       <ListProject />
      <div className='main__container'>
        <ProjectHeader />
        <ProjectContainer />
      
      </div>
    </main>
  );
}
