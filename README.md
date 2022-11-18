# control-react-hook-form

Simple package to optimize code using react hook form when you use Controller

## basic Example

```tsx
// components/FormControl.jsx
import { FormController } from 'control-react-hook-form';

const FormControl = props => {
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
```

- You can add this file in another folder

```ts
// utils/forms/userForm.ts
export const formAddUsuario = {
  name: {
    title: 'name',
    name: 'name',
    placeholder: 'username',
    rules: { required: { message: 'This field is required', value: true } }, //
    // id for default is the title
  },
  password: {
    title: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'user password',
    rules: { required: { message: 'This field is required', value: true } },
  },
  // ... more
};
```

```tsx
// form
const App = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data); //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControlBasic control={control} {...addProductoForm.name} />
      <FormControlBasic control={control} {...addProductoForm.password} />
      <button type="submit">Sign up</button>
    </form>
  );
};
```

## Custom

if you want to customize you form control

```tsx
// file control example
import {
  FormController,
  FormControlComponent,
  FormControlPropsTotal,
} from 'control-react-hook-form';

const FormControlImage = props => {
  return (
    <FormController className="form__group" custom {...props}>
      {properties => {
        const { placeholder, onChange, value, ...rest } = properties; // properties react hook form controller like error , placeholder,value,onChange,... etc
        return (
          <>
            <FormController.label className="form__label" />
            <input {...rest} onChange={e => onChange(e.target.files)} />
            <FormController.error className="form__error" />
          </>
        );
      }}
    </FormController>
  );
};

export default FormControlImage;

// <FormControlImage control={control} {...addProductoForm.image} />
const formImage = {
  image: {
    name: 'image',
    type: 'file',
    title: 'image',
    rules: {
      validate: (files: File[]) => {
        if (!files) {
          return 'This field is required';
        }
        for (const file of files) {
          if (
            !['image/jpeg', 'image/png', 'image/webp', 'image/jpeg'].includes(
              file.type
            )
          ) {
            return 'Formato no valid';
          }
        }
      },
    },
  },
};
```

## Using Typescript

```tsx
import { FormController, FormControlComponent } from 'control-react-hook-form';

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
```

```ts
interface Usuario {
  id: string;
  name: string;
  password: string;
}

export type AddUsuario = Omit<Usuario, 'id'>;

export const formAddUsuario: FormControlsCustom<AddUsuario> = {
  name: {
    title: 'name',
    name: 'name',
    placeholder: 'user name',
    rules: { required: { message: 'This field is required', value: true } },
  },
  password: {
    title: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'user password ',
    rules: { required: { message: 'This field is required', value: true } },
  },
};

const App = () => {
  const { control, handleSubmit } = useForm<AddUser>();

  const onSubmit = (data: AddUser) => {
    console.log(data); //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControlBasic control={control} {...addProductoForm.name} />
      <FormControlBasic control={control} {...addProductoForm.password} />
      <button type="submit">Sign up</button>
    </form>
  );
};
```

More examples in github repository
