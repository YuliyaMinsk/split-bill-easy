const roundUp = (value: number, precision = 0): string => {
  const factor = Math.pow(10, precision);
  const roundedValue = Math.ceil(value * factor) / factor;

  if (Math.floor(roundedValue) === roundedValue) {
    return roundedValue.toString();
  } else {
    return roundedValue.toFixed(precision);
  }
};

export { roundUp };
