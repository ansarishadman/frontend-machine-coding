import React, { useState, useEffect } from 'react';

const useDebounce = <T,>(value: T, delay = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedValue = useDebounce(searchTerm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Entered Seach Value: {debouncedValue}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default App