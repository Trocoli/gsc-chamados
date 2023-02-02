import Chamado from "@/core/Chamado";
import useChamado from "@/hooks/useChamados";
import { createContext, useEffect, useState } from "react";

interface ContextProps {
  chamadoList: Chamado[];
  chamadosAbertos: Chamado[];
  chamadosConcluidos: Chamado[];
}

const ChamadoCtx = createContext<ContextProps>({
  chamadoList: [],
  chamadosAbertos: [],
  chamadosConcluidos: [],
});

export const AppProvider = (props: any) => {
  const {
    chamadosAbertos,
    chamadoList,
    chamadosConcluidos,
    getAll,
    getChamadosAbertos,
    getChamadosConcluidos,
  } = useChamado();

  useEffect(() => {
    getAll();
    getChamadosAbertos();
    getChamadosConcluidos();
  }, [chamadosAbertos]);

  return (
    <ChamadoCtx.Provider
      value={{ chamadosAbertos, chamadoList, chamadosConcluidos }}
    >
      {props.children}
    </ChamadoCtx.Provider>
  );
};

export default ChamadoCtx
