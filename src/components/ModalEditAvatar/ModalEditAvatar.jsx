import { useState } from 'react';
import close from '../../images/close.svg';
import { activeType, boolType } from '../../constatnts/prop-types';
import { useDispatch } from 'react-redux';
import { reducerUpdatePhoto, updatePhoto, reducerDeletePhoto } from '../../services/userSlice';

function ModalEditAvatar({ activeModal, active }) {
  const dispatch = useDispatch();

  const [photoConvertBase64, setPhotoConvertBase64] = useState('');

  function handlePhoto(evt) {
    evt.preventDefault();
    const image = evt.target.files[0];
   var reader = new FileReader();
  reader.onloadend = function() {
    setPhotoConvertBase64(reader.result);
  }
  reader.readAsDataURL(image);
  }


  function updateAvatar(evt) {
    evt.preventDefault();
    dispatch(reducerUpdatePhoto({ photoConvertBase64 }));
      dispatch(updatePhoto());
      closeModal();
  }

  function deleteAvatar(evt) {
    evt.preventDefault();
    setPhotoConvertBase64('')
    dispatch(reducerDeletePhoto());
    dispatch(updatePhoto());
    activeModal();
  }

  function closeModal() {
    activeModal();
    setPhotoConvertBase64('')
  }

  return (
    <section className={!active ? 'modal' : 'modal__active'} onClick={closeModal}>
      <form className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='modal__wrap'>
          <div className='modal__title'>Изменить аватар?</div>

          <img src={close} className='modal__close' onClick={closeModal} />
        </div>
        <div className='modal__input'>
         
          <input
            className='modal__avatar-input'
            onChange={handlePhoto}
            id='avatar-input'
            type='file'
            name='file'
            accept="image/png, image/gif, image/jpeg"
            multiple
            
          />
        </div>
        <div className='modal__button'>
          {!photoConvertBase64 ? (
            <label htmlFor="avatar-input" className="modal__load-photo">Загрузить фаил</label>
          ) : (
            <button
            className='modal__btn-submit'
            type='submit'
            onClick={updateAvatar}
          >
            Изменить
          </button>
          )}
          <button
            className='modal__btn-cancel'
            type='button'
            onClick={deleteAvatar}
          >
            Удалить
          </button>
        </div>
      </form>
    </section>
  );
}

export default ModalEditAvatar;

ModalEditAvatar.propTypes = {
  activeModal: activeType,
  active: boolType,
};
