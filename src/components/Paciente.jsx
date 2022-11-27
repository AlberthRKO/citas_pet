const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  // aplicamos destructuring
  const { pet, owner, email, date, symptom, id } = paciente;

  const handleDelete = () => {
    const resp = confirm("Deseas eliminar el registro de paciente ?");
    resp && deletePaciente(id);
  };

  return (
    <div className="bg-white shadow-md py-8 px-5 rounded-md mb-5">
      <p className="text-gray-800 font-bold">
        Nombre de la Mascota: <span className=" font-normal">{pet}</span>
      </p>
      <p className="text-gray-800 mt-3 font-bold">
        Nombre del Propietario: <span className=" font-normal">{owner}</span>
      </p>
      <p className="text-gray-800 mt-3 font-bold">
        Email: <span className=" font-normal">{email}</span>
      </p>
      <p className="text-gray-800 mt-3 font-bold">
        Fecha de Alta: <span className=" font-normal">{date}</span>
      </p>
      <p className="text-gray-800 mt-3 font-bold">
        Sintomas: <span className=" font-normal">{symptom}</span>
      </p>
      <div className="flex justify-around">
        <button
          type="button"
          onClick={() => setPaciente(paciente)}
          className="w-full mx-1 md:mx-0 md:w-4/12 xl:w-2/5 text-center mt-5 bg-indigo-600 rounded-md p-2 text-white font-bold hover:bg-indigo-700 transition"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-full mx-1 md:mx-0 md:w-4/12 xl:w-2/5 text-center mt-5 bg-red-600 rounded-md p-2 text-white font-bold hover:bg-red-700 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
