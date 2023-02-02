import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import { useEffect, useState } from "react";

export default function useChamado() {
  const repo: ChamadoRepo = new ChamadoCollection();

  const [chamado, setChamado] = useState<Chamado>();
  const [chamadoList, setChamadoList] = useState<Chamado[]>([]);
  const [chamadosAbertos, setChamadosAbertos]  = useState<Chamado[]>([])
  const [chamadosConcluidos, setChamadosConcluidos]  = useState<Chamado[]>([])
  const [hasChamado, setHasChamado] = useState(false);

  // useEffect(() => {
  //   getAll();
  //   getChamadosAbertos();
  //   getChamadosConcluidos()
  // }, []);


  const getAll = () => {
    repo.getAll().then((chamados) => {
      setChamadoList(chamados);
    });
  };


  const getChamadosAbertos = () => {
    repo.getChamadosAbertos().then((chamados) => {
      setChamadosAbertos(chamados)
    })
  }


  const getChamadosConcluidos= () => {
    repo.getChamadosConcluidos().then((chamados) => {
      setChamadosConcluidos(chamados)
    })
  }

  const salvarChamado = async (chamado: Chamado) => {
    setChamado(chamado);
    const expires = new Date().getTime() + 10000;
    localStorage.setItem("expires", expires.toString());
    setHasChamado(true);
    await repo.save(chamado);
    getChamadosAbertos()

    // implementar o local storage e dar o get
  };

  const chamadoSelecionado = async (chamado: Chamado) => {
    await repo.update(chamado);
    getChamadosAbertos();
    getAll();
  };
  const chamadoExcluido = async (chamado: Chamado) => {
    await repo.delete(chamado);
    getChamadosAbertos()
    getAll();
  };

  return {
    chamado,
    chamadoList,
    chamadosAbertos,
    setChamadosAbertos,
    getChamadosAbertos,
    chamadosConcluidos,
    getChamadosConcluidos,
    hasChamado,
    setHasChamado,
    salvarChamado,
    getAll,
    chamadoExcluido,
    chamadoSelecionado,
  };
}
