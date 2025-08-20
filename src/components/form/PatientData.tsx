import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormData } from "../../interface";
import { ErrorMessage } from "../errors/ErrorMessage";
import { LabelForm } from "./LabelForm";

interface PatientDataProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

export const PatientData = ({ register, errors }: PatientDataProps) => {
    return (
        <>
            <legend className="font-bold text-2xl">Datos del Paciente</legend>
            <div className="flex flex-col gap-3">
                <LabelForm html="nombre" title="Nombre" required />

                <input
                    {...register("nombre", { required: true })}
                    type="text"
                    id="nombre"
                    placeholder="Ej. Alejandro Estrada Ponce"
                    className="input-base"
                />
                {errors.nombre && (
                    <ErrorMessage message="Este campo es obligatorio" />
                )}
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-5">
                <div className="w-full md:w-1/4">
                    <LabelForm html="edad" title="Edad" required />
                    <input
                        {...register("edad", {
                            required: true,
                            min: 1,
                            max: 100,
                        })}
                        type="number"
                        id="edad"
                        placeholder="Ej. 18"
                        className="input-base"
                    />
                    {errors.edad && (
                        <ErrorMessage message="Edad fuera de rango" />
                    )}
                </div>
                <div className="w-full md:w-3/4">
                    <LabelForm html="sexo" title="Sexo" />

                    <select
                        {...register("sexo", {
                            validate: (val) =>
                                val === "H" ||
                                val === "M" ||
                                val === "N" ||
                                "Opción no válida",
                        })}
                        name="sexo"
                        id="sexo"
                        className="input-base"
                    >
                        <option value="H">Hombre</option>
                        <option value="M">Mujer</option>
                        <option value="N">No especificar</option>
                    </select>
                    {errors.sexo && <ErrorMessage message="Opción no valida" />}
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-5">
                <div className="w-full md:w-1/2">
                    <LabelForm html="peso" title="Peso (kg)" required />
                    <input
                        type="number"
                        step="1"
                        {...register("peso", {
                            required: true,
                            min: 1,
                            max: 300,
                        })}
                        min={0}
                        max={300}
                        name="peso"
                        id="peso"
                        placeholder="Ej: 1"
                        className="input-base"
                    />
                    {errors.peso && (
                        <ErrorMessage message="Peso fuera de rango" />
                    )}
                </div>
                <div className="w-full md:w-1/2">
                    <LabelForm
                        html="estatura"
                        title="Estatura (mts)"
                        required
                    />

                    <input
                        type="number"
                        step="0.01"
                        {...register("estatura", {
                            required: true,
                            min: 0.5,
                            max: 3,
                        })}
                        min={0.5}
                        max={3}
                        name="estatura"
                        id="estatura"
                        placeholder="Ej: 1.75"
                        className="input-base"
                    />
                    {errors.estatura && (
                        <ErrorMessage message="Estatura fuera de rango" />
                    )}
                </div>
            </div>
            <div className="w-full">
                <LabelForm html="correo" title="Correo Electronico" required />
                <input
                    type="email"
                    {...register("correo", {
                        required: true,
                    })}
                    name="correo"
                    id="correo"
                    placeholder="Ej: correo@ejemplo.com"
                    className="input-base"
                />
                {errors.correo && (
                    <ErrorMessage message="El correo es obligatorio" />
                )}
            </div>
        </>
    );
};
