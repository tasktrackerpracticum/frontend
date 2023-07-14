import React from 'react';
import useValidation from '../../hooks/useValidation.js';
import { searchFunctionType } from '../../constatnts/prop-types.js';

export default function SearchForm({ onSearchTask }) {
  const { values, handleChange, isValid } =
    useValidation();
  let { name } = values;
  const [searchErrorMessage, setSearchErrorMessage] = React.useState(null);
  const searchError = 'Введите название таска';

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid && name !== '') {
      onSearchTask({
        taskName: name,
      });

      setSearchErrorMessage(null);
    } else {
      setSearchErrorMessage(searchError);
    }
  }

  return (
    <section className='search-form'>
      <form
        id='form'
        className='search-form__form'
        onSubmit={handleSubmit}
        name='search-form'
      >
        <div className='search-form__container'>
          <div className='search-form__icon' />
          <div className='search-form__title'> Поиск</div>
          <input
            className='search-form__input'
            value={name || ''}
            onChange={handleChange}
            type='text'
            placeholder='Поиск задач...'
            name='name'
            minLength='1'
            maxLength='30'
          />
          <span className='search-form__search-error'>
            {searchErrorMessage ? `${searchErrorMessage}` : ''}
          </span>
        </div>
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  onSearchTask: searchFunctionType,
};
