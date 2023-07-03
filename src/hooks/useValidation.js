import { useState, useCallback } from 'react';

function useValidation() {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
  });
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
    setIsValid({...isValid, [name]: target.validity.valid});
    setIsValidForm(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {},
      newIsValid = {
        name: true,
        email: true,
        password: true,
      },
      newIsValidForm = false
    ) => {
      setValues(newValues);
      setIsValid(newIsValid);
      setIsValidForm(newIsValidForm);
    },
    [setValues, setIsValid, setIsValidForm]
  );

  return {
    values,
    setValues,
    isValid,
    setIsValid,
    isValidForm,
    handleChange,
    resetForm,
  };
}

export default useValidation;