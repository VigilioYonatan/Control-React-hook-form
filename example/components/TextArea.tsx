import {
    FormController,
    FormControlPropsTotal,
    FormControlComponent,
} from "control-react-hook-form";

const TextArea = <T extends object>(props: FormControlComponent<T>) => {
    return (
        <FormController className="form__group" custom {...props}>
            {(properties: FormControlPropsTotal<T>) => {
                const { type, ...rest } = properties;
                return (
                    <>
                        <FormController.label className="form__label" />
                        <textarea className="form__control" />
                        <FormController.error className="form__error" />
                    </>
                );
            }}
        </FormController>
    );
};

export default TextArea;
