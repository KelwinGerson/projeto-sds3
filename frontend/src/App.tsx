import NavBar from "components/NavBar";
import DataTable from "components/NavBar/DataTable";
import Footer from "components/NavBar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </> /* fragment */
  );
}

export default App;
