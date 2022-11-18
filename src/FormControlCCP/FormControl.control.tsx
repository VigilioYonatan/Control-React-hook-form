import React, { useContext } from 'react';
import { FormControlContext } from './FormControl';

type FormControlControlProps = {
  className: string;
  customError?: string;
};

const FormControlControl = ({
  className,
  customError,
}: FormControlControlProps) => {
  const { properties, error } = useContext(FormControlContext);
  return (
    <input
      {...properties}
      className={
        customError && error ? `${className} ${customError}` : className
      }
    />
  );
};

export default FormControlControl;
