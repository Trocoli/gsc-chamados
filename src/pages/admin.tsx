import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Chamado from "@/core/Chamado";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import { useEffect, useState } from "react";

const Admin = () => {

  const [chamados, setChamados] = useState<Chamado[]>([])
  
  const repo: ChamadoCollection = new ChamadoCollection()

  useEffect(()=> {
    getAll()
  },[])

  const getAll = () => {
    repo.getAll().then(chamados => {
      setChamados(chamados)
    })
  }

  const chamadoSelecionado = (chamado: Chamado) => {
    console.log(chamado.nome);
  };
  const chamadoExcluido = async (chamado: Chamado) => {
    await repo.delete(chamado)
    getAll()
  };

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
              chamados={chamados}
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
