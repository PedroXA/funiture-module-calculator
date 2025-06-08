import { Dashboard } from "./components/Dashboard/Dashboard";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Form />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
