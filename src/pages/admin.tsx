import ConcluidosTable from "@/components/ConcluidosTable";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import useChamado from "@/hooks/useChamados";
import { useContext, useEffect, useRef, useState } from "react";

const Admin = () => {
  const {
    // chamadosAbertos,
    chamadosConcluidos,
    getChamadosConcluidos,
    getChamadosAbertos,
    chamadoSelecionado,
    chamadoExcluido,
    chamadoList,
    chamadosAbertos
  } = useChamado();


  useEffect(() => {
    getChamadosConcluidos();
    console.log("111");
  }, [chamadoList]);



  useEffect(() => {
    console.log('loop')
  }, [chamadosAbertos])

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
              chamados={chamadosAbertos}
              chamadoSelecionado={chamadoSelecionado}
              chamadoExcluido={chamadoExcluido}
            ></Table>
            <h1 className="text-gray-400 pt-3 font-bold text-2xl">
              Concluídos Hoje
            </h1>
            {/* table de encerrados */}
            <ConcluidosTable
              chamados={chamadosConcluidos}
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
