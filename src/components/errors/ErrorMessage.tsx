interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <span className="text-axolotl italic text-sm font-semibold">
            {message}
        </span>
    );
};
