import ConcluidosTable from "@/components/ConcluidosTable";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Chamado from "@/core/Chamado";
import useChamado from "@/hooks/useChamados";
import { useStore } from "@/hooks/useStore";
import { useEffect, useState } from "react";

const Admin = () => {
  const { chamado, chamadoSelecionado, chamadoExcluido, chamadoList } =
    useChamado();

    const ctx = useStore()

  return (
    <>
      <div className=" flex h-screen w-screen">
        <Sidebar />
        <div className="flex flex-col items-center pt-5 h-screen w-full bg-gray-800">
          <h1 className={`mb-5 text-4xl font-bold text-white `}>
            Chamados Em Aberto
          </h1>
          <div className="flex flex-col w-full items-center  px-5 ">
            {" "}
            <Table
              chamados={ctx.chamadosAbertos}
              chamadoSelecionado={chamadoSelecionado}
              chamadoExcluido={chamadoExcluido}
            ></Table>
            <h1 className="text-gray-400 pt-3 font-bold text-2xl">
              Concluídos Hoje
            </h1>
            {/* table de encerrados */}
            <ConcluidosTable
              chamados={ctx.chamadosConcluidos}
              chamadoSelecionado={chamadoSelecionado}
              chamadoExcluido={chamadoExcluido}
            ></ConcluidosTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
