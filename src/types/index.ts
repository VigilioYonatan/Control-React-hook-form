import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import {
  Control,
  ControllerFieldState,
  Path,
  RegisterOptions,
  UseFormStateReturn,
  ControllerRenderProps,
} from 'react-hook-form';

export type FormControlsProps<T extends object> = {
  name: Path<T>;
  title: string;
  rules?: RegisterOptions;
  // type: InputHTMLAttributes<HTMLInputElement>['type'];
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

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
  props: Omit<FormControlsProps<T>, 'rules' | 'title'> & {
    id: string;
  } & ControllerRenderProps<T, Path<T>>;
};

export type FormControlComponent<T extends object> = FormControlProps<T> &
  FormControlsProps<T>;
