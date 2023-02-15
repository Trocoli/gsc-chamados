import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";

export default function useChamado() {
  const repo: ChamadoRepo = new ChamadoCollection();

  const [chamado, setChamado] = useState<Chamado>();
  const [chamadoList, setChamadoList] = useState<Chamado[]>([]);
  const [chamadosAbertos, setChamadosAbertos] = useState<Chamado[]>([]);
  const [chamadosConcluidos, setChamadosConcluidos] = useState<Chamado[]>([]);
  const [hasChamado, setHasChamado] = useState(false);
  const [anos, setAnos] = useState([])

  useEffect(() => {
    getAll();
    getChamadosConcluidos();
    getChamadosAbertos();
  }, []);

  const getAll = () => {
    repo.getAll().then((chamados) => {
      setChamadoList(chamados);
    });
    // getChamadosAbertos()
  };

  // react query bramch

  const getChamadosAbertos = () => {
    repo.getChamadosAbertos().then((chamados) => {
      setChamadosAbertos((chamadosAbertos) => chamados);
    });
  };

  const getChamadosConcluidos = () => {
    repo.getChamadosConcluidos().then((chamados) => {
      setChamadosConcluidos(chamados);
    });
  };


  const salvarChamado = async (chamado: Chamado) => {
    setChamado(chamado);
    const expires = new Date().getTime() + 10000; // change time for longer period maybe 10 min
    localStorage.setItem("expires", expires.toString());
    setHasChamado(true);
    await repo.save(chamado);
    getAll();
    getChamadosAbertos();
  };


  const chamadoResolvido = async (chamado: Chamado) => {
    await repo.chamadoResolvido(chamado);
    // getChamadosAbertos();
    getAll();
  };

  const chamadoNaoResolvido = async (chamado: Chamado) => {
    await repo.chamadoNaoResolvido(chamado);
    getAll();
  }

  const chamadoExcluido = async (chamado: Chamado) => {
    await repo.delete(chamado);
    // getChamadosAbertos();
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
    chamadoResolvido,
    chamadoNaoResolvido
  };
}

