import { Controller, Path, PathValue, FieldError } from 'react-hook-form';

import React, { createContext } from 'react';
import { FormControlComponent, FormControlPropsTotal } from '../types';
type FormControlContextProps<T extends object> = {
  properties: FormControlPropsTotal<T>;
  error: FieldError | undefined;
  title: string;
};

const createGenericContext = <T extends object>() => {
  return createContext<FormControlContextProps<T>>(
    {} as FormControlContextProps<T>
  );
};
export const FormControlContext = createGenericContext();

const FormControl = <T extends object>(
  props: FormControlComponent<T> & {
    className: string;
    custom?: true;
    children: any;
  }
) => {
  const {
    control,
    name,
    type = 'text',
    title,
    placeholder,
    rules,
    className,
    custom = false,
    children,
  } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ fieldState, field, formState }) => {
        const id = title.split(' ').join('');
        const properties: FormControlPropsTotal<T> = {
          ...field,
          ...fieldState,
          ...formState,
          value: field.value || ('' as PathValue<T, Path<T>>),
          type,
          placeholder,
          id,
        };

        return (
          <FormControlContext.Provider
            value={{
              properties: properties as any,
              error: fieldState.error,
              title,
            }}
          >
            <div className={className}>
              {custom ? children(properties) : children}
            </div>
          </FormControlContext.Provider>
        );
      }}
    />
  );
};

export default FormControl;
