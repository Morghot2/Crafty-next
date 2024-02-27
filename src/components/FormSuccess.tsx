import { CheckCircledIcon } from "@radix-ui/react-icons";

type FormSuccessProps = {
  message: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="pd-3 flex items-center gap-x-2 rounded-md bg-emerald-500/15 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
