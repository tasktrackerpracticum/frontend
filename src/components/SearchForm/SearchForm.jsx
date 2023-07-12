import React from 'react';
import '../../scss/searchForm.scss';
import { useValidation } from '../../hooks/useValidation';

export default function SearchForm({ onSearchTask }) {
  const { values, setValues, handleChange, isValid, resetForm, setIsValid } =
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

  React.useEffect(() => {
    if (localStorage.getItem('query')) {
      resetForm();
      const inputSearch = localStorage.getItem('query');
      setValues({ ...values, name: inputSearch });
      setIsValid(true);
      handleSubmit();
      onSearchTask({
        taskName: inputSearch,
      });
      setSearchErrorMessage(null);
    }
  }, []);

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
        </div>
      </form>
    </section>
  );
}
