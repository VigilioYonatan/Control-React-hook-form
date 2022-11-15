import * as React from 'react';
import {
  FormController,
  FormControlComponent,
  FormControlPropsTotal,
} from '../../.';

/* Example FormControl input file */
const FormControlCustom = <T extends object>(
  props: FormControlComponent<T>
) => {
  return (
    <FormController {...props} custom className="">
      {/* // its contain all properties like onchange,id,onBlur,etc. if you want to customize */}
      {(properties: FormControlPropsTotal<T>) => {
        const { onChange, ...rest } = properties;
        return (
          <>
            <FormController.label className="your-custom-class" />

            {/* Insert here components customizable if you want add */}
            <input
              {...rest}
              onChange={e => properties.onChange(e.target.files)}
            />
            <FormController.error className="your-custom-class" />
          </>
        );
      }}
    </FormController>
  );
};

export default FormControlCustom;
