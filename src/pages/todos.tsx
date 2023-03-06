import ConcluidosTable from "@/components/ConcluidosTable";
import ForceAuth from "@/components/ForceAuth";
import Sidebar from "@/components/Sidebar";
import useChamado from "@/hooks/useChamados";
import React, { useEffect } from "react";
import {  useQuery } from "react-query";

const Todos = () => {
  const { getAll, chamadoList, chamadoExcluido } =
    useChamado();

  const { isLoading, data, isError, error } = useQuery(
    "chamados-tables",
    getAll
    //  {refetchInterval: 2000}
  );

  const chamadosEncerrados = chamadoList.filter((chamado) => {
    return chamado.isFinished;
  });

  return (
    <>
      <div className=" flex  h-screen w-screen  bg-[#19212c]">
        <ForceAuth>
        <div className="h-screen flex">
        <Sidebar />
        </div>
          <div className="flex flex-col px-5 items-center pt-5 h-screen w-full ">
            <h1 className={`mb-5 text-4xl font-bold text-white `}>Relatório</h1>
            <ConcluidosTable
              isReport={true}
              chamados={chamadosEncerrados}
              chamadoExcluido={chamadoExcluido}
            />
          </div>
        </ForceAuth>
      </div>
    </>
  );
};

export default Todos;
