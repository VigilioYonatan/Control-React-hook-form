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
  const { onChange, ...rest } = properties;
  return (
    <input
      {...rest}
      onChange={e =>
        onChange(
          (properties.type = 'number'
            ? (Number(e.target.value) as any)
            : e.target.value)
        )
      }
      className={
        customError && error ? `${className} ${customError}` : className
      }
    />
  );
};

export default FormControlControl;
