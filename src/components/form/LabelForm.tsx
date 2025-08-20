interface LabelFormProps {
    html: string;
    title: string;
    required?: boolean;
}

export const LabelForm = ({
    html,
    title,
    required = false,
}: LabelFormProps) => {
    return (
        <label
            htmlFor={html}
            className="text-neutral-700 font-medium hover:cursor-pointer"
        >
            {title}:{" "}
            {required && <span className="font-bold text-axolotl">*</span>}
        </label>
    );
};
