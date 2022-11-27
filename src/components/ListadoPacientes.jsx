// import React from "react";
import React, { useState, useEffect } from "react";

import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  // Reto
  // useEffect(() => {
  //   if (pacientes.length > 0) console.log("nuevo paciente");
  // }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-2/5 px-3 mx-auto mt-10 md:mt-0">
      {/* preguntamos si hay pacientes */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-lg text-center mt-2">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="h-screen md:overflow-y-scroll mt-10 mx-4">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                deletePaciente={deletePaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-lg text-center mt-2">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              Y aparecerán aqui abajo
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
