import { Header } from "./Header";
import { BackButton } from "./BackButton";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md ">
      <CardHeader>
        <Header label="Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
