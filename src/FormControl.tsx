import { FormController } from './FormControlCCP';
import { FormControlComponent } from './types';
import React from 'react';
function FormControl<T extends object>(props: FormControlComponent<T>) {
  return (
    <FormController className="mb-2" {...props}>
      <FormController.label className="text-xs text-white uppercase" />
      <FormController.control
        className="w-full rounded-md py-1 px-2"
        customError="border-2 border-red-600"
      />
      <FormController.error className="text-xs mt-2 text-red-600" />
    </FormController>
  );
}

export default FormControl;
