import { FormControlContext } from "./FormControl";
import React,{ useContext } from "react";

const FormControlLabel = ({ className }: { className: string }) => {
    const { title, properties } = useContext(FormControlContext);

    return (
        <label htmlFor={properties.id} className={className}>
            {title}
        </label>
    );
};

export default FormControlLabel;
