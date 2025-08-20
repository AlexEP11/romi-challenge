import { motion } from "framer-motion";
import { Form, Header } from "@/components";

export default function App() {
    return (
        <main className="bg-gradient-to-t lg:bg-gradient-to-tl from-axolotl/10 via-romi/10 to-neutral-50 min-h-screen">
            <Header />
            <motion.h1
                initial={{ x: -500 }}
                animate={{ x: 0, transition: { duration: 0.6 } }}
                className="mt-10 font-bold text-3xl md:text-4xl lg:text-5xl text-center text-axolotl"
            >
                Formulario M&eacute;dico
            </motion.h1>
            <div className="flex items-center justify-center mt-20 px-5">
                <aside className="flex flex-col lg:flex-row  items-center gap-10 justify-between max-w-[1440px] w-full">
                    <Form />
                    <motion.img
                        initial={{ x: 1800 }}
                        animate={{ x: 0, transition: { duration: 0.6 } }}
                        src="/imgs/model.png"
                        alt="Ajolote Modelo 3D"
                        className="max-w-sm"
                    />
                </aside>
            </div>
        </main>
    );
}
