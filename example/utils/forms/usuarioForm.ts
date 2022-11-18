import { FormControlsCustom } from "control-react-hook-form";
import { AddUsuario } from "../../interfaces/usuario";
export const formAddUsuario: FormControlsCustom<AddUsuario> = {
    nombre: {
        title: "Nombre",
        name: "nombre",
        placeholder: "Nombre de usuario",
        rules: { required: { message: "This field is required", value: true } },
    },
    password: {
        title: "password",
        type: "password",
        name: "password",
        placeholder: "contraseña",
        rules: { required: { message: "This field is required", value: true } },
    },
    description: {
        name: "description",
        title: "Description",
        rules: { required: { message: "This field is required", value: true } },
        placeholder: "descripcion",
    },
    image: {
        name: "image",
        type: "file",
        title: "image",
        rules: {
            validate: (files: File[]) => {
                if (!files) {
                    return "This field is required";
                }
                for (const file of files) {
                    if (
                        ![
                            "image/jpeg",
                            "image/png",
                            "image/webp",
                            "image/jpeg",
                        ].includes(file.type)
                    ) {
                        return "Formato no valid";
                    }
                }
            },
        },
    },
};
