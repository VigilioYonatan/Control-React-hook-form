import {
    FormController,
    FormControlComponent,
    FormControlPropsTotal,
} from "control-react-hook-form";

const FormControlImage = <T extends object>(props: FormControlComponent<T>) => {
    return (
        <FormController className="form__group" custom {...props}>
            {(properties: FormControlPropsTotal<T>) => {
                const { placeholder, onChange, value, ...rest } = properties;
                return (
                    <>
                        <FormController.label className="form__label" />
                        <input
                            {...rest}
                            onChange={(e) => onChange(e.target.files)}
                        />
                        <FormController.error className="form__error" />
                    </>
                );
            }}
        </FormController>
    );
};

export default FormControlImage;
