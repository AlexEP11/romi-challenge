import { motion } from "framer-motion";

export const Header = () => {
    return (
        <header className="sticky top-0 flex justify-between p-2.5 items-center w-full bg-neutral-50 shadow-sm">
            <motion.img
                initial={{ x: -150 }}
                animate={{
                    x: 0,
                    transition: { duration: 0.5 },
                }}
                src="/imgs/romi.png"
                alt="Romi Logo"
                width={100}
                height={100}
                className="md:w-52"
            />
        </header>
    );
};
