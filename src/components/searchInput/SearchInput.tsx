import { TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import debounce from '@/utils/debounce';

const SearchInput = ({ onChange }: { onChange?: (value: string) => void }) => {
  const [name, setName] = useState('');
  const debouncedOnChange = useCallback(debounce<(name: string) => void>(onChange, 100), [
    onChange,
  ]);
  useEffect(() => {
    debouncedOnChange(name);
  }, [debouncedOnChange, name]);
  return (
    <TextField
      fullWidth
      placeholder="Search user name"
      size="small"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};
export default SearchInput;
