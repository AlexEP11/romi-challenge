import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { PatientData } from "./PatientData";
import { SymptomData } from "./SymptomData";
import { useState } from "react";
import type { FormData } from "../../interface";

export const Form = () => {
    const [send, setSend] = useState<boolean>(false);

    const initialValues: FormData = {
        nombre: "",
        edad: 0,
        sexo: "N",
        sintomaPrincipal: "",
        infoAdicional: "",
        nivelDolor: 5,
        otroSintoma: "",
        sintomasSecundarios: [],
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialValues });

    const onSumbit = (data: FormData) => {
        console.log(data);
        setSend(true);
        reset();
        setTimeout(() => setSend(false), 3000);
    };

    return (
        <>
            <AnimatePresence>
                {send && (
                    <motion.div
                        initial={{ x: 2000 }}
                        animate={{ x: 0, transition: { duration: 0.6 } }}
                        exit={{ opacity: 0, transition: { duration: 0.6 } }}
                        className="fixed z-50 right-5 bottom-10 gap-5 bg-white rounded-lg p-4 shadow-lg flex items-center"
                    >
                        <img src="/svgs/send.svg" alt="" />
                        <p className="font-semibold">
                            Formulario enviado con exito!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.form
                onSubmit={handleSubmit(onSumbit)}
                className="w-full lg:w-1/2 p-10 rounded-xl mb-20 bg-white shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.6 } }}
            >
                <div className="space-y-5">
                    <PatientData register={register} errors={errors} />
                    <SymptomData register={register} errors={errors} />
                </div>

                <div className="flex items-center justify-end mt-5">
                    <input
                        type="submit"
                        value="Enviar"
                        className="w-full md:w-auto bg-romi p-3 font-bold text-lg rounded-lg hover:cursor-pointer hover:bg-axolotl transition-colors duration-300 ease-in "
                    />
                </div>
            </motion.form>
        </>
    );
};
