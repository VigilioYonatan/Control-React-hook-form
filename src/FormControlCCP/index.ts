import FormControl from "./FormControl";
import FormControlLabel from "./FormControl.label";
import FormControlError from "./FormControl.error";
import FormControlControl from "./FormControl.control";

export const FormController = Object.assign(FormControl, {
    control: FormControlControl,
    label: FormControlLabel,
    error: FormControlError,
});
