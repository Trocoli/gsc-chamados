import Form from "@/components/Form";
import { CheckIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import useChamado from "@/hooks/useChamados";
import { useEffect, useState } from "react";

export default function Home() {
  const { salvarChamado, chamado, chamadoList, hasChamado, setHasChamado } =
    useChamado();

  useEffect(() => {
    const expired = localStorage.getItem("expires");
    if (expired) {
      if (+expired > new Date().getTime()) {
        setHasChamado(true);
      } else {
        localStorage.removeItem("expires");
        setHasChamado(false);
      }
    }
  }, [hasChamado, setHasChamado]);

  const resolvido = () => {
    localStorage.removeItem("expires");
    setHasChamado(false);
    location.reload();
  };

  // exibir detalhase do chamado e salvar informações no local storage
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Layout title="Chamados GSC">
        {hasChamado && (
          <div>
            <h1 className="font-bold flex items-center justify-center">
              Chamado realizado com sucesso por favor aguarde.
            </h1>
            {/* <ul className="flex items-center justify-center">
              <li className="px-5 font-semibold">{chamado.id}</li>
              <li className="px-5 font-semibold">{chamado.nome}</li>
              <li className="px-5">{chamado.setor}</li>
              <li className="px-5">{chamado.descricao}</li>
            </ul> */}
            <div className="flex justify-end">
              <button
                onClick={resolvido}
                className="flex items-center p-2 justify-center text-green-700 bg-green-300 rounded-md hover:cursor-pointer font-bold"
              >
                Resolvido{CheckIcon}
              </button>
            </div>
          </div>
        )}
        {!chamado && !hasChamado && (
          <Form chamado={chamadoList[0]} onSubmit={salvarChamado} />
        )}
        {/* <Table
          chamados={chamados}
          chamadoSelecionado={chamadoSelecionado}
          chamadoExcluido={chamadoExcluido}
        ></Table> */}
      </Layout>
    </div>
  );
}
