import ConcluidosTable from "@/components/ConcluidosTable";
import ForceAuth from "@/components/ForceAuth";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Chamado from "@/core/Chamado";
import useChamado from "@/hooks/useChamados";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useChamadoRC from "@/hooks/useChamadosRC";

const Admin = () => {
  const [errorMessage, setErrorMessage] = useState<any>();

  const {
    // chamadosAbertos,
    chamadosConcluidos,
    getChamadosConcluidos,
    getChamadosAbertos,
    chamadoResolvido,
    chamadoNaoResolvido,
    chamadoExcluido,
    chamadoList,
    chamadosAbertos,
  } = useChamado();

  // const { isLoading, data, isError, error }  = useChamadoRC()

  const { isLoading, data, isError, error } = useQuery(
    "chamados-tables",
    getChamadosAbertos
    //  {refetchInterval: 2000}
  );

  if (error) {
    console.log(error);
  }

  const chamadosConcluidosHoje = chamadosConcluidos.filter((chamado) => {
    return chamado.completed_at?.getDate() === new Date().getDate();
  });

  if (isError) {
    setErrorMessage(error);
  }

  useEffect(() => {
    getChamadosConcluidos();
  }, [chamadoList]);

  useEffect(() => {
    getChamadosAbertos();
    console.log("lop");
  }, [chamadoList]);

  return (
    <>
      <div className=" flex  h-screen w-screen  bg-[#19212c]">
        <ForceAuth>
          <Sidebar />
          <div className="flex flex-col items-center pt-5 h-screen w-full ">
            <h1 className={`mb-5 text-4xl font-bold text-white `}>
              Chamados Em Aberto
            </h1>
            <div className="flex flex-col w-full items-center  px-5 ">
              {isError && <h1>{errorMessage}</h1>}
              {isLoading && !isError && <h1>Loading data...</h1>}
              {/* {!isLoading &&
              data &&
              data.map((chamado) => (
                <>
                  <h1>{chamado.nome}</h1>
                  <h2>{chamado.setor}</h2>
                  <p>{chamado.descricao}</p>
                </>
              ))} */}
              <>
                {chamadosAbertos.length === 0 && (
                  <h3 className="text-gray-300 font-light bg-gray-500 p-3 rounded-lg ">
                    Sem chamados abertos no momento
                  </h3>
                )}
                {chamadosAbertos.length > 0 && (
                  <Table
                    chamados={chamadosAbertos}
                    chamadoSelecionado={chamadoResolvido}
                    chamadoExcluido={chamadoExcluido}
                  ></Table>
                )}
              </>

              <h1 className="text-gray-400 pt-3 font-bold text-2xl">
                Concluídos Hoje
              </h1>
              <>
                {chamadosConcluidos.length === 0 && (
                  <h3 className="text-gray-300 font-light bg-gray-500 p-3 rounded-lg ">
                    Nenhum chamado concluído hoje
                  </h3>
                )}
                {chamadosConcluidos.length > 0 && (
                  <ConcluidosTable
                    chamados={chamadosConcluidosHoje}
                    isReport={false}
                    chamadoSelecionado={chamadoNaoResolvido}
                    chamadoExcluido={chamadoExcluido}
                  ></ConcluidosTable>
                )}
              </>
            </div>
          </div>
        </ForceAuth>
      </div>
    </>
  );
};

export default Admin;
