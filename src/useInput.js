import { useCallback, useState } from 'react';

export function useInput(
  initialValue = {
    title: '',
    amount: 0,
    category: 'meal',
  }
) {
  const [form, setForm] = useState({
    title: initialValue.title,
    amount: initialValue.amount,
    category: initialValue.category,
  });

  const handleChangeField = useCallback(e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialValue);
  }, [initialValue]);

  return {
    form,
    onChangeField: handleChangeField,
    reset: handleReset,
  };
}
