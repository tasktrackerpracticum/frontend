import { useState } from 'react';
import { objectType } from '../../constatnts/prop-types';

const Scroll = ({ cardsRef }) => {
  // const [scrollLeft, setScrollLeft] = useState(false);
  // const [isScrolledRight, setIsScrollRight] = useState(false);

  // const checkScroll = () => {
  //   const { current } = cardsRef;

  //   if (current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = current;
  //     // setScrollLeft(scrollLeft > 0);
  //     setIsScrollRight(scrollLeft !== scrollWidth - clientWidth);
  //   }
  // };

  // useEffect(() => {
  //   toggleScroll();
  // }, []);

  //very raw version, because variant with eventListener didn't work for yet unknown reasons... to be solved later

  const [leftBtnDisabled, setLeftBtnDisabled] = useState(true);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(false);

  const toggleScroll = (number) => {

    cardsRef.current?.scrollBy({
      left: number,
      behaviour: 'smooth',
    });
    if (leftBtnDisabled) {
      setRightBtnDisabled(true);
      setLeftBtnDisabled(false);
    } else {
      setRightBtnDisabled(false);
      setLeftBtnDisabled(true);
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => toggleScroll(-400)}
        className='main__container-button main__container-button_type_left'
        disabled={leftBtnDisabled}
      />
      <button
        type='button'
        onClick={() => toggleScroll(400)}
        className='main__container-button main__container-button_type_right'
        disabled={rightBtnDisabled}
      />
    </>
  );
};
export default Scroll;

Scroll.propTypes = {
  cardsRef: objectType,
};
