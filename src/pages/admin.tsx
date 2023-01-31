import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import useChamado from "@/hooks/useChamados";

const Admin = () => {

  const {chamadoSelecionado, chamadoExcluido, chamadoList} = useChamado()

  return (
    <>
      <div className=" flex h-screen w-screen">
        <Sidebar />
        <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-800">
          <h1
            className={`mb-5 text-4xl font-bold text-white `}
          >
            Chamados Em Aberto
          </h1>
          <div className="flex flex-col w-full items-center px-5">
            {" "}
            <Table
              chamados={chamadoList}
              chamadoSelecionado={chamadoSelecionado}
              chamadoExcluido={chamadoExcluido}
            ></Table>
            {/* table de encerrados */}
            <h1 className="mt-5 text-4xl font-bold text-white">Concluídos Hoje</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
