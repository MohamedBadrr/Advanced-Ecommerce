
import Lottie from "lottie-react";
import NotFoundAnimation from "../../assets/lottieFiles/NotFoundAnimation.json";
import ErrorAnimation from "../../assets/lottieFiles/ErrorAnimation.json";
import EmptyShopping from "../../assets/lottieFiles/EmptyShopping.json";
import LoadingShopping from "../../assets/lottieFiles/LoadingShopping.json";
import Container from "../common/Container";
const lootieFiles = {
  error: ErrorAnimation,
  empty: EmptyShopping,
  loading: LoadingShopping,
  notFound : NotFoundAnimation,
};

type LootieHandlerProps = {
  type: keyof typeof lootieFiles;
  message: string;
};
const LootieHandler = ({ message, type }: LootieHandlerProps) => {
  const typeMap = lootieFiles[type];
  return (
    <Container>
      <div className="text-center pt-[50px]">
        <div className="flex items-center justify-center">
          <Lottie animationData={typeMap} className="w-[420px]" />
        </div>
        <p className="font-bold">
          {message}
        </p>
      </div>
    </Container>
  );
};

export default LootieHandler;
