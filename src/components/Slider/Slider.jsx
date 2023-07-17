import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide1 from '../../images/slider/slide1.png';
import slide2 from '../../images/slider/slide2.png';
import slide3 from '../../images/slider/slide3.png';

function Slider() {
    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
      };

    return (
    <Carousel containerClass={'slider'} responsive={responsive} showDots={true} arrows={false}>
            <div className='slider__slide'>
                <img src={slide1} />
                <div className='slider__text'>
                    <h2 className='slider__title'>Добро пожаловать!</h2>
                    <span className='slider__subtitle'>Мы рады приветствовать вас и готовы помочь в достижении целей и задач!</span>
                </div>
            </div>
            <div className='slider__slide'>
                <img src={slide2} />
                <div className='slider__text'>
                    <h2 className='slider__title'>С нами удобно!</h2>
                    <span className='slider__subtitle'>Вы можете легко создавать задачи, распределять их между членами команды, устанавливать сроки выполнения.</span>
                </div>
            </div>
            <div className='slider__slide'>
                <img src={slide3} />
                <div className='slider__text'>
                    <h2 className='slider__title'>Мы всегда готовы помочь!</h2>
                    <span className='slider__subtitle'>Наша команда всегда готова помочь вам с любыми вопросами и проблемами, связанными с использованием таск-трекера.</span>
                </div>
            </div>
      </Carousel>
  );
}

export default Slider;
