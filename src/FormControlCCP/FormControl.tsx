import { Controller, Path, PathValue, FieldError } from 'react-hook-form';

import React, { createContext } from 'react';
import { FormControlComponent, FormControlPropsTotal } from '../types';
type FormControlContextProps<T extends object> = {
  properties: FormControlPropsTotal<T>['props'];
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
    rules,
    className,
    custom = false,
    children,
    title,
    ...rest
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ fieldState, field, formState }) => {
        const id = title.split(' ').join('');
        const properties: FormControlPropsTotal<T> = {
          props: {
            ...field,
            ...rest,
            name: props.name,
            value: field.value || ('' as PathValue<T, Path<T>>),
            id,
          },
          renderMethods: {
            ...fieldState,
            ...formState,
          },
        };

        return (
          <FormControlContext.Provider
            value={{
              properties: properties.props as any,
              error: fieldState.error,
              title,
            }}
          >
            <div className={className}>
              {custom
                ? children(properties as FormControlPropsTotal<T>)
                : children}
            </div>
          </FormControlContext.Provider>
        );
      }}
    />
  );
};

export default FormControl;
