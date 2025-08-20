export interface FormData {
    nombre: string;
    edad: number;
    sexo: "N" | "H" | "M" | "?";
    sintomaPrincipal: string;
    infoAdicional: string;
    nivelDolor: number;
    otroSintoma: string;
    sintomasSecundarios: string[];
    peso: number;
    estatura: number;
    correo: string;
}
