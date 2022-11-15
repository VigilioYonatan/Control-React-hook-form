import * as React from 'react';
import { FormControlComponent, FormController } from '../../dist';

const FormControlBasic = <T extends object>(props: FormControlComponent<T>) => {
  return (
    <FormController {...props} className="">
      {/* You can add icons ,etc */}
      <FormController.label className="" />
      <FormController.control className="" customError="error-class" />
      <FormController.error className="" />
    </FormController>
  );
};

export default FormControlBasic;
