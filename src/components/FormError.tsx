import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type FormErrorProps = {
  message: string | undefined;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="pd-3 flex items-center gap-x-2 rounded-md bg-destructive/15 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
