import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormData } from "../../interface";
import { ErrorMessage } from "../errors/ErrorMessage";
import { useState } from "react";

interface SymptomDataProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

export const SymptomData = ({ register, errors }: SymptomDataProps) => {
    const [pain, setPain] = useState<number>(5);
    const [symptom, setSymptom] = useState<string>("");

    return (
        <>
            <legend className="font-bold text-2xl">Sintomas</legend>
            <div className="flex flex-col gap-3">
                <label
                    htmlFor="sintomaPrincipal"
                    className="text-neutral-700 font-medium"
                >
                    Sintoma Principal:{" "}
                    <span className="font-bold text-axolotl">*</span>
                </label>

                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-5"
                    role="radiogroup"
                >
                    {[
                        "Fiebre",
                        "Tos",
                        "Dolor de cabeza",
                        "Dolor de garganta",
                        "Fatiga",
                        "Diarrea",
                        "Otro...",
                    ].map((sintoma) => (
                        <div
                            key={sintoma}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="radio"
                                {...register("sintomaPrincipal", {
                                    required: true,
                                })}
                                value={sintoma}
                                onChange={(e) => setSymptom(e.target.value)}
                                id={sintoma}
                            />
                            <label htmlFor={sintoma}>{sintoma}</label>
                        </div>
                    ))}
                </div>

                {symptom === "Otro..." && (
                    <input
                        {...register("otroSintoma", {
                            required: "Por favor, escribe tu sintoma",
                        })}
                        type="text"
                        placeholder="Escribe tu síntoma aquí..."
                        className="w-full mt-3 border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                        focus:outline-none focus:ring-1 focus:ring-romi focus:border-romi transition-all duration-200 ease-in-out"
                    />
                )}

                {(errors.sintomaPrincipal || errors.otroSintoma) && (
                    <ErrorMessage
                        message={
                            errors.otroSintoma?.message ||
                            "Este campo es obligatorio"
                        }
                    />
                )}
            </div>

            <div className="flex flex-col gap-3">
                <label
                    htmlFor="sintomasSecundarios"
                    className="text-neutral-700 font-medium"
                >
                    Sintomas Secundarios:
                </label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                        "Congestión nasal",
                        "Estornudos",
                        "Escalofríos",
                        "Náuseas",
                        "Vómitos",
                        "Dolor muscular",
                        "Pérdida de olfato",
                        "Pérdida de gusto",
                    ].map((sintoma) => (
                        <div
                            key={sintoma}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="checkbox"
                                {...register("sintomasSecundarios")}
                                value={sintoma}
                                id={`sec-${sintoma}`}
                            />
                            <label htmlFor={`sec-${sintoma}`}>{sintoma}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <label
                    htmlFor="infoAdicional"
                    className="text-neutral-700 font-medium hover:cursor-pointer"
                >
                    Descripci&oacute;n adicional:{" "}
                    <span className="font-bold text-axolotl">*</span>
                </label>
                <textarea
                    {...register("infoAdicional", { required: true })}
                    rows={5}
                    id="infoAdicional"
                    placeholder="Ej. Dolor leve de garganta desde ayer, algo de fatiga y malestar general"
                    className="w-full mt-3 border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                            focus:outline-none focus:ring-1 focus:ring-romi focus:border-romi transition-all duration-200 ease-in-out resize-none"
                />
                {errors.infoAdicional && (
                    <ErrorMessage message="Este campo es obligatorio" />
                )}
            </div>

            <div className="flex flex-col gap-3">
                <label
                    htmlFor="nivelDolor"
                    className="text-neutral-700 font-medium hover:cursor-pointer"
                >
                    Nivel de dolor:{" "}
                    <span className="font-bold text-axolotl">*</span>
                </label>
                <div className="flex gap-5 items-center">
                    <p>Nivel: {pain}</p>
                    <img
                        src={
                            pain <= 10 && pain >= 7
                                ? "/svgs/pain.svg"
                                : pain < 7 && pain >= 5
                                ? "/svgs/sad.svg"
                                : "/svgs/smile.svg"
                        }
                        alt="Emotions"
                    />
                </div>
                <input
                    {...register("nivelDolor", {
                        required: true,
                        min: 1,
                        max: 10,
                    })}
                    onChange={(e) => setPain(Number(e.target.value))}
                    type="range"
                    step={1}
                    max={10}
                    min={1}
                    id="nivelDolor"
                    className="w-full border border-gray-200 rounded-md p-3 text-neutral-700 text-base
                        transition-all duration-200 ease-in-out"
                />
                {errors.nivelDolor && (
                    <ErrorMessage message="Rango no valido" />
                )}
            </div>
        </>
    );
};
