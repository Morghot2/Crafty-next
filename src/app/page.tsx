import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

const MainPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-mainDark">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          Join
        </h1>
        <p>asdasdasdas</p>
        <div>
          <LoginButton>
            <Button>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
