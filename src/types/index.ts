import { InputHTMLAttributes } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import {
  Control,
  ControllerFieldState,
  Path,
  PathValue,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

export type FormControlsProps<T extends object> = {
  name: Path<T>;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  title: string;
  placeholder?: string;
  rules: RegisterOptions;
  // multiple?: boolean;
  // accept?: Accept | string[]; // acept por react-dropzone
};
export type FormControlsCustom<T extends object> = {
  [a in keyof T]: FormControlsProps<T>;
};

/* Props formControls Component */
type FormControlProps<T extends object> = {
  control: Control<T, any>;
};

type RenderProps<T extends object> = ControllerFieldState &
  UseFormStateReturn<T>;

export type FormControlPropsTotal<T extends object> = {
  renderMethods: RenderProps<T>;
} & {
  props: Pick<FormControlsProps<T>, 'placeholder' | 'type' | 'name'> & {
    id: string;
  } & ControllerRenderProps<T, Path<T>>;
};

export type FormControlComponent<T extends object> = FormControlProps<T> &
  FormControlsProps<T>;
