import React from 'react';
import { FormControlComponent } from '../../dist/types/index';
import { FormController } from '../../dist/FormControlCCP';
const FormControl = <T extends object>(props: FormControlComponent<T>) => {
  return (
    <FormController className="form__group" {...props}>
      <FormController.label className="form__label" />
      <FormController.control
        className="form__control"
        customError="form__control__error"
      />
      <FormController.error className="form__error" />
    </FormController>
  );
};

export default FormControl;
