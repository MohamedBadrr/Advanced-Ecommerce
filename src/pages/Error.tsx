import Container from "@/components/common/Container";
import LootieHandler from "@/components/feedback/LootieHandler";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <div className="text-center pt-[50px]">
        <div className="flex items-center justify-center">
          <LootieHandler type="notFound" message="" />
        </div>
        <Link replace={true} className="text-blue-600 underline" to={"/"}>
          Looks like you have reached to non-existent page,
          <br />
          How about going back to safety
        </Link>
      </div>
    </Container>
  );
};

export default Error;
