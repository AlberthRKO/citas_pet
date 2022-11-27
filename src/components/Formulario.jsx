// import React from "react";
import React, { useState, useEffect } from "react";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // Hook para leer los inputs
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // comprobamos si un objeto tiene  algo
    // console.log(Object.keys(paciente).length > 0);
    if (Object.keys(paciente).length > 0) {
      const { pet, owner, email, date, symptom } = paciente;
      setPet(pet);
      setOwner(owner);
      setEmail(email);
      setDate(date);
      setSymptom(symptom);
    }
  }, [paciente]);

  // funcion para generar un id
  const generarId = () => {
    const numero = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    // console.log(numero + fecha);
    return numero + fecha;
  };

  const handleSubmit = (e) => {
    // funcion para que no se mande el form y se realicen las validaciones
    e.preventDefault();

    if ([pet, owner, email, date, symptom].includes("")) {
      setMsg("Hay Campos que no estan llenos");
      setError(true);
      return;
    }
    setError(false);
    // llenamos los pacientes sacando una copia para hacer el arreglo

    const objectPacientes = {
      pet,
      owner,
      email,
      date,
      symptom,
    };
    // console.log(objectPacientes);

    // hacemos condicion para ver si el registro es edit o new
    if (paciente.id) {
      // console.log("Editando");
      // console.log(objectPacientes);
      objectPacientes.id = paciente.id;
      const pacientesUpdate = pacientes.map((pacienteState) =>
        // itera todo el objeto hasta que pilla el de igual id y poen el nuestro no del iterado
        pacienteState.id === paciente.id ? objectPacientes : pacienteState
      );

      // console.log(pacientesUpdate);
      setPacientes(pacientesUpdate);

      // limpiamos el state de paciente
      setPaciente({});
    } else {
      // generamos id para el nuevo registroo
      // console.log("Nuevo");
      objectPacientes.id = generarId();
      setPacientes([...pacientes, objectPacientes]);
    }

    // vaciando el form
    setPet("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptom("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 px-3">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-2">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md py-8 px-5 rounded-md mt-10"
      >
        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-800 font-bold mb-1">
            Nombre Mascota
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-white focus:border-indigo-600 placeholder-gray-400 border outline-none"
            id="pet"
            value={pet}
            placeholder="Nombre de la mascota"
            // funcion de js para ver los cambios con el E
            onChange={(e) => setPet(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-800 font-bold mb-1">
            Nombre del Propietario
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-white focus:border-indigo-600 placeholder-gray-400 border outline-none"
            id="owner"
            placeholder="Nombre del propietario"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-800 font-bold mb-1">
            Email
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-white focus:border-indigo-600 placeholder-gray-400 border outline-none autofill:bg-red-700 fill"
            id="email"
            placeholder="Email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-800 font-bold mb-1">
            Fecha de Alta
          </label>
          <input
            type="date"
            className="w-full p-2 rounded-md border bg-white focus:border-indigo-600 outline-none"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="symptom"
            className="block text-gray-800 font-bold mb-1"
          >
            Sintomas
          </label>
          <textarea
            type="text"
            className="w-full p-2 rounded-md bg-white focus:border-indigo-600 placeholder-gray-400 border outline-none"
            id="symptom"
            placeholder="Sintomas"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>
        {error && (
          <div className="bg-red-400 rounded-md p-2 mt-5 text-red-50 text-center font-bold uppercase">
            <p>{msg}</p>
          </div>
        )}
        <input
          type="submit"
          className="w-full lg:w-3/5 xl:w-2/5 block mx-auto text-center mt-5 bg-indigo-600 rounded-md p-2 text-white font-bold hover:bg-indigo-700 transition"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
