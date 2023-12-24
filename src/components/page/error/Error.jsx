import { Link, useRouteError } from "react-router-dom";
import { Button, Container, IconText, Image, Text } from "./Error.style";

const Error = () => {
    const error = useRouteError();
  
    return (
      <Container>
        <Image src={img} alt="" />
        <div className="text-center">
          <Text>
            Sorry, an unexpected error has occurred.
          </Text>
          <p>
            <IconText>{error.statusText || error.message}</IconText>
          </p>
          <div className="mt-5 flex justify-center">
            <Link to="/">
              <Button>
                {/* <FaArrowLeft className="mr-2 h-6 w-6 font-bold" /> */}
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    );
  };
  
  export default Error;