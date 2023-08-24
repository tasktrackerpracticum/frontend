import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { stringType, functionType, boolType } from '../../constatnts/prop-types';
import slide1 from '../../images/slider/slide1.png';
import slide2 from '../../images/slider/slide2.png';
import slide3 from '../../images/slider/slide3.png';

function Slider() {
    const responsive = {
      desktop: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
      },
    };
  
    const slides = [
      {
        image: slide1,
        title: 'Добро пожаловать!',
        subtitle: 'Мы рады приветствовать вас и готовы помочь в достижении целей и задач!',
      },
      {
        image: slide2,
        title: 'С нами удобно!',
        subtitle: 'Вы можете легко создавать задачи, распределять их между членами команды, устанавливать сроки выполнения.',
      },
      {
        image: slide3,
        title: 'Мы всегда готовы помочь!',
        subtitle: 'Наша команда всегда готова помочь вам с любыми вопросами и проблемами, связанными с использованием таск-трекера.',
      },
    ];
  
    const CarouselItem = ({ image, title, subtitle}) => {
        return (
            <div className='slider__slide'>
                <img src={image} alt={title} />
                <div className='slider__text'>
                    <h2 className='slider__title'>{title}</h2>
                    <span className='slider__subtitle'>{subtitle}</span>
                </div>
            </div>
        )
    };

    const CustomDot = ({ onClick, active }) => {
        return (
            <button className={active ? 'slider__custom-dot_active' : 'slider__custom-dot'} onClick={() => onClick()}></button>
        );
    }
      
    return (
      <Carousel containerClass={'slider'} responsive={responsive} arrows={false} swipeable showDots={true} customDot={<CustomDot />} renderDotsOutside={<CustomDot />}>
        {slides.map((slide, index) => (
          <CarouselItem key={index} {...slide} />
        ))}
      </Carousel>
      
    );
  
  };


export default Slider;

Slider.propTypes = {
    image: stringType.isRequired,
    title: stringType.isRequired,
    subtitle: stringType.isRequired,
    index: stringType.isRequired, 
    onClick: functionType,
    active: boolType,
}
