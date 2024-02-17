import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome!"
      backButtonLabel="No account yet?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};
