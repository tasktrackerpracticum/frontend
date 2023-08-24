import { useState } from 'react';
import {
  functionType,
  numberType,
  objectType,
  stringType,
} from '../../constatnts/prop-types';

function InputForm({
  isOpen,
  title,
  inputType,
  dataType,
  isMaxLength,
  register,
  value,
  errors,
  handleChange,
}) {
  const [valueInput, setValueInput] = useState(value);

  function handlerChange(evt) {
    setValueInput(evt.target.value);
  }

  function closeModal(evt) {
    evt.preventDefault();
    isOpen();
  }

  return (
    <section className='input'>
      <div className='input__title'>{title}:</div>
      <div className='input__content'>
        <div className='input__form'>
          <div
            className={
              dataType == 'description'
                ? 'input__container input__container_description'
                : ' input__container'
            }
          >
            {dataType == 'description' ? (
              <textarea
                className={
                  dataType == 'description'
                    ? 'input__input-text input__input-text_description'
                    : ' input__input-text'
                }
                value={valueInput}
                {...register(dataType, {
                  required: false,
                  maxLength: {
                    value: isMaxLength,
                    message: `Должно быть не больше ${isMaxLength} символов`,
                  },
                })}
                type={inputType}
                maxLength={isMaxLength}
                onChange={handlerChange}
              />
            ) : (
              <input
                className={' input__input-text'}
                value={valueInput}
                {...register(dataType, {
                  required: false,
                  maxLength: {
                    value: isMaxLength,
                    message: `Должно быть не больше ${isMaxLength} символов`,
                  },
                })}
                type={inputType}
                maxLength={isMaxLength}
                onChange={handlerChange}
              />
            )}

            <div
              className={
                !errors[dataType]
                  ? 'input__close'
                  : ' input__close input__close_errors'
              }
              onClick={closeModal}
            />
          </div>
          <div className='input__error'>{errors[dataType]?.message}</div>

          <div className='input__buttons'>
            <button
              type='button'
              className='input__btn-cancel'
              onClick={closeModal}
            >
              Отмена
            </button>
            <button onClick={handleChange} className='input__btn-submit'>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InputForm;

InputForm.propTypes = {
  isOpen: functionType,
  title: stringType,
  value: stringType,
  inputType: stringType,
  isMaxLength: numberType,
  dataType: stringType,
  register: functionType,
  errors: objectType,
  handleChange: functionType,
};
