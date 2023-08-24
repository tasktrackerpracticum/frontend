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
  isMinLength,
  register,
  value,
  errors,
  patternType,
}) {
  const [valueInput, setValueInput] = useState(value);

  function handlerChange(evt) {
    setValueInput(evt.target.value);
  }

  return (
    <section className='inputProject'>
      <div className='inputProject__title'>{title}:</div>
      <div className='inputProject__content'>
        <div className='inputProject__form'>
        <div
            className={
              dataType == 'description'
                ? 'inputProject__container inputProject__container_description'
                : ' inputProject__container'
            }
          >
            {dataType == 'description' ? (
              <textarea
                className={
                  dataType == 'description'
                    ? 'inputProject__input-text inputProject__input-text_description'
                    : ' inputProject__input-text'
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
                className='inputProject__input-text'
                value={valueInput}
                {...register(dataType, {
                  required: false,
                  maxLength: {
                    value: isMaxLength,
                    message: `Должно быть не больше ${isMaxLength} символов`,
                  },
                  minLength: {
                    value: isMinLength,
                    message: `Должно быть не меньше ${isMinLength} символов`,
                  },
                  pattern: {
                    value: patternType,
                    message: 'Введите правильную почту',
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
                  ? 'inputProject__close'
                  : ' inputProject__close inputProject__close_errors'
              }
              onClick={isOpen}
            />
          </div>
          <div className='inputProject__error'>{errors[dataType]?.message}</div>

          <div className='inputProject__buttons'>
            <button
              type='button'
              className='inputProject__btn-cancel'
              onClick={isOpen}
            >
              Отмена
            </button>
            <button type='submit' className='inputProject__btn-submit'>
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
  isMinLength: numberType,
  register: functionType,
  errors: objectType,
  patternType: stringType,
};
