import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // state para obtener los datos desde formulario mandandolo
  const [pacientes, setPacientes] = useState([]);
  // console.log(pacientes);
  // agregamos paciente para llenarlo desde el componente
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
      console.log(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  // funcion para eliminar
  const deletePaciente = (id) => {
    const pacientesUpdate = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesUpdate);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="md:flex py-10">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  );
}

export default App;
