// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TASKS_API } from '../../constatnts/constants';
// // import { useLocation } from "react-router-dom";

// import useValidation from '../../hooks/useValidation.js';
// import { searchFunctionType } from '../../constatnts/prop-types.js';

// export default function SearchForm({ onSearchTask }) {
//   const { values, isValid } =
//     useValidation();
//   let { name } = values;

//   // const [searchQuery, setSearchQuery] = useState("");
//   const [searchErrorMessage, setSearchErrorMessage] = useState(null);
//   const searchError = 'Введите название таска';
//   // const location = useLocation();

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     if (isValid && name !== '') {
//       onSearchTask({
//         taskName: name,
//       });

//       setSearchErrorMessage(null);
//     } else {
//       setSearchErrorMessage(searchError);
//     }
//   }

//   // useEffect(() => {
//   //   if (
//   //     location.pathname === "/projects" &&
//   //     localStorage.getItem("moviesSearchQuery")
//   //   ) {
//   //     const savedSearchQuery = localStorage.getItem("moviesSearchQuery");
//   //     setSearchQuery(savedSearchQuery);
//   //   } else if (
//   //     location.pathname === "/tasks" &&
//   //     localStorage.getItem("savedTasksSearchQuery")
//   //   ) {
//   //     const savedSearchQuery = localStorage.getItem("savedTasksSearchQuery");
//   //     setSearchQuery(savedSearchQuery);
//   //   }
//   // }, [location.pathname]);

//   // useEffect(() => {
//   //   setSearchErrorMessage("");
//   // }, [searchQuery]);

//   const [search, setSearch] = useState("");
//   const getSearch = () => {
//     axios.get(TASKS_API)
//           .then((res) => {
//             setSearch(res.data);
//           })
//   }

//   useEffect(() => {
//     getSearch();
//   }, []);

//   const [value, setValue] = useState("");
//   const filterTasks = SearchForm.filter(search => {
//     return search.name.toLowerCase().includes(value.toLowerCase())
//   })


//   return (
//     <section className='search-form'>
//       <form
//         id='form'
//         className='search-form__form'
//         onSubmit={handleSubmit}
//         name='search-form'
//       >
//         <div className='search-form__container'>
//           <div className='search-form__icon' />
//           <input
//             className='search-form__input'
//             value={name || ''}
//             onChange={(evt) => setValue(evt.target.value)}
//             type='text'
//             placeholder='Поиск'
//             name='name'
//             minLength='1'
//             maxLength='30'
//           />
//           <div className='search-form__icon search-form__icon_activate' />
//           <span className='search-form__search-error'>
//             {searchErrorMessage ? `${searchErrorMessage}` : ''}
//           </span>
//         </div>
//       </form>
//     </section>
//   );
// }

// SearchForm.propTypes = {
//   onSearchTask: searchFunctionType,
// };

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
          <input
            className='search-form__input'
            value={name || ''}
            onChange={handleChange}
            type='text'
            placeholder='Поиск'
            name='name'
            minLength='1'
            maxLength='30'
          />
          <div className='search-form__icon' />
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
