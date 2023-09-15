const handleKeyDown = <T extends string | number>(
  event: React.KeyboardEvent<HTMLDivElement>,
  saveFunction: (value: T) => void,
) => {
  if (event.key === 'Enter') {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.type === 'number' ? parseFloat(inputElement.value) : inputElement.value;
    saveFunction(value as T);
  }
};

export { handleKeyDown };
