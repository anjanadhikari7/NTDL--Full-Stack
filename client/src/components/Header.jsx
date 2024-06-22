import { Alert } from "react-bootstrap";

const Header = () => {
  return (
    <Alert variant="success">
      <h1 className="text-center fw-bold">NOT TO DO LIST</h1>
      <p className="text-end fst-italic">
        "Being Busy isn't an excuse, it's about managing time"
      </p>
    </Alert>
  );
};

export default Header;
