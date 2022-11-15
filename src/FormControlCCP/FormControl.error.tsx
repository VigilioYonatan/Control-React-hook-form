import React,{ useContext } from "react";
import { FormControlContext } from "./FormControl";

const FormControlError = ({ className }: { className: string }) => {
    const { error } = useContext(FormControlContext);
    return <> {error && <p className={className}>{error.message}</p>}</>;
};

export default FormControlError;
