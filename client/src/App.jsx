import { Container } from "react-bootstrap";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Container>
        <Header />
        <TaskContainer />
      </Container>
    </>
  );
}
export default App;
