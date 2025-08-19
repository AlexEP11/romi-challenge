import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormData } from "../../interface";
import { ErrorMessage } from "../errors/ErrorMessage";

interface PatientDataProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

export const PatientData = ({ register, errors }: PatientDataProps) => {
    return (
        <>
            <legend className="font-bold text-2xl">Datos del Paciente</legend>
            <div className="flex flex-col gap-3">
                <label
                    htmlFor="nombre"
                    className="text-neutral-700 font-medium hover:cursor-pointer"
                >
                    Nombre Completo:{" "}
                    <span className="font-bold text-axolotl">*</span>
                </label>
                <input
                    {...register("nombre", { required: true })}
                    type="text"
                    id="nombre"
                    placeholder="Ej. Alejandro Estrada Ponce"
                    className="w-full border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                        focus:outline-none focus:ring-1 focus:ring-romi focus:border-romi transition-all duration-200 ease-in-out"
                />
                {errors.nombre && (
                    <ErrorMessage message="Este campo es obligatorio" />
                )}
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-5">
                <div className="w-full md:w-1/4">
                    <label
                        htmlFor="edad"
                        className="text-neutral-700 font-medium hover:cursor-pointer"
                    >
                        Edad: <span className="font-bold text-axolotl">*</span>
                    </label>
                    <input
                        {...register("edad", {
                            required: true,
                            min: 1,
                            max: 100,
                        })}
                        type="number"
                        id="edad"
                        placeholder="Ej. 18"
                        className="w-full mt-3 border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                        focus:outline-none focus:ring-1 focus:ring-romi focus:border-romi transition-all duration-200 ease-in-out"
                    />
                    {errors.edad && (
                        <ErrorMessage message="Edad fuera de rango" />
                    )}
                </div>
                <div className="w-full md:w-3/4">
                    <label
                        htmlFor="sexo"
                        className="text-neutral-700 font-medium hover:cursor-pointer"
                    >
                        Sexo:
                    </label>
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
                        className="w-full mt-3 border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                        focus:outline-none focus:ring-1 focus:ring-romi focus:border-romi transition-all duration-200 ease-in-out"
                    >
                        <option value="H">Hombre</option>
                        <option value="M">Mujer</option>
                        <option value="N">No especificar</option>
                    </select>
                    {errors.sexo && <ErrorMessage message="Opción no valida" />}
                </div>
            </div>
        </>
    );
};
