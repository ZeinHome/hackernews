import { useState } from 'react';
import Button from '../Button';

export default function Search({
  onSubmit,
  needsToSearchTopStories,
  result,
  setNotFetch,
  children,
}) {
  const [value, setValue] = useState('');

  const onSearchChange = (e) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    if (result && result[value]) {
      setValue('');
      return needsToSearchTopStories(value);
    }

    onSubmit(value);
    setValue('');
    setNotFetch(false);
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        onChange={onSearchChange}
        value={value}
        placeholder="Wait..."
      />
      <Button
        type="submit"
        styled={{
          width: '120px',
          height: '100%',
          color: '#fff',
          backgroundColor: '#666666c3',
          borderRadius: '0',
        }}
      >
        {children}
      </Button>
    </form>
  );
}
