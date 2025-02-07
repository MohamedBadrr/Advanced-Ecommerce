import Container from "@/components/common/Container";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 400;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container>
      <div className="text-center pt-[50px]">
        <h1 className="text-[100px] ">{errorStatus}</h1>
        <p className="text-[50px] mb-[20px]">{errorStatusText}</p>
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
