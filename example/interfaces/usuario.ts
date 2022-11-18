interface Usuario {
    id: string;
    nombre: string;
    password: string;
    image: string;
    description: string;
}

export type AddUsuario = Omit<Usuario, "id">;
