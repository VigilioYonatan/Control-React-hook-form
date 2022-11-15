import { FormControlsCustom } from '../../.';
import { AddUser } from './productoType';

export const addProductoForm: FormControlsCustom<AddUser> = {
  name: {
    title: 'Name Usuario',
    // type:"text" //default text,
    name: 'name',
    placeholder: 'Name Usuario',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  email: {
    name: 'email',
    title: 'email',
    placeholder: 'email',
    rules: {
      required: true,
    },
  },
  password: {
    name: 'password',
    title: 'password',
    placeholder: 'user password',
    rules: {
      required: true,
    },
  },
  image: {
    name: 'image',
    title: 'Image Product',
    type: 'file',
    rules: {
      required: true,
      validate: (file: File) => {
        if (
          !['image/jpeg', 'image/png', 'image/webp', 'image/jpeg'].includes(
            file.type
          )
        ) {
          return 'Formato no válido';
        }
      },
    },
  },
};
