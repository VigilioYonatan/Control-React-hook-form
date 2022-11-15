import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { AddUser } from './utils/productoType';
import FormControlBasic from './components/FormControlBasic';
import { addProductoForm } from './utils/producto';
import FormControlCustom from './components/FormControlCustom';

const App = () => {
  const { control, handleSubmit } = useForm<AddUser>();

  const onSubmit = (data: AddUser) => {
    console.log(data); //
  };
  
  return (
    /* Bye Controller react hook form */
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControlBasic control={control} {...addProductoForm.name} />
      <FormControlBasic control={control} {...addProductoForm.email} />
      <FormControlBasic control={control} {...addProductoForm.password} />
      <FormControlCustom control={control} {...addProductoForm.image} />
      <button type="submit">Sign up</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
