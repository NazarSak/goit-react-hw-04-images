import { useState } from 'react';
import { InputValue, FormValue, ButtonValue } from './searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ handleSearch }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    reset();
  };

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  const reset = () => {
    setValue('');
  };

  return (
    <header>
      <FormValue onSubmit={handleSubmit}>
        <ButtonValue type="submit">
          <span>Search</span>
        </ButtonValue>

        <InputValue
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </FormValue>
    </header>
  );
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
