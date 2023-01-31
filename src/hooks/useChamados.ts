import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import { useEffect, useState } from "react";

export default function useChamado() {
  const repo: ChamadoRepo = new ChamadoCollection();

  const [chamado, setChamado] = useState<Chamado>();
  const [chamadoList, setChamadoList] = useState<Chamado[]>([]);
  const [hasChamado, setHasChamado] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    repo.getAll().then((chamados) => {
      setChamadoList(chamados);
    });
  };

  const salvarChamado = async (chamado: Chamado) => {
    setChamado(chamado);
    const expires = new Date().getTime() + 10000;
    localStorage.setItem('expires', expires.toString())
    setHasChamado(true)
    await repo.save(chamado);

    // implementar o local storage e dar o get
  };

  const chamadoSelecionado = (chamado: Chamado) => {
    console.log(chamado.nome);
  };
  const chamadoExcluido = async (chamado: Chamado) => {
    await repo.delete(chamado);
    getAll();
  };

  return {
    chamado,
    chamadoList,
    hasChamado,
    setHasChamado,
    salvarChamado,
    getAll,
    chamadoExcluido,
    chamadoSelecionado,
  };
}
