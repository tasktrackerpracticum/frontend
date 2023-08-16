import { useState } from 'react';
import {
  arrayType,
  functionType,
  numberType,
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
})  {

const [valueInput, setValueInput] = useState(value);

function handlerChange(evt) {
  setValueInput(evt.target.value);
}


  return (
    <section className='input'>
      <div className='input__title'>{title}:</div>
      <div className='input__content'>
        <div className='input__form'>
          <div className={!errors[dataType] ?  'input__container' : " input__container input__container_errors"}>
            <input
              className='input__input-text'
              value={valueInput}
              {...register(dataType, {
                required: false,
                maxLength: {
                  value: isMaxLength,
                  message: `Должно быть не больше ${isMaxLength} символов`
              },
              minLength: {
                value: isMinLength, 
                message: `Должно быть не меньше ${isMinLength} символов`
              }
            })}
              type={inputType}
              maxLength={isMaxLength}
              onChange={handlerChange}
            />

            <div className={!errors[dataType] ?  'input__close' : " input__close input__close_errors"} onClick={isOpen} />
          </div>
          <div className='input__error'>{errors[dataType]?.message}</div>

          <div className='input__buttons'>
            <button
              type='button'
              className='input__btn-cancel'
              onClick={isOpen}
            >
              Отмена
            </button>
            <button type='submit' className='input__btn-submit'>
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
  errors: arrayType,
};
