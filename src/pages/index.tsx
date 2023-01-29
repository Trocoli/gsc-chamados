import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { useState } from "react";
import Chamado from "../core/Chamado";

export default function Home() {
  const chamados = [
    new Chamado("ray", "dcc", "problema na impressora,", "1"),
    new Chamado("joao", "dep", "problema no monitor,", "2"),
    new Chamado("m,arcos", "sup", "problema na internet", "3"),
    new Chamado("silv", "dcc", "problema na impressora,", "4"),
  ];

  const [chamado, setChamado] = useState<Chamado>();// use effect to get chamado from db, salvar id do chamado no local storage, remover se chamado tiver sido concluido 

  const salvarChamado = (chamado: Chamado) => {
    console.log(chamado); // send to firebase 
    setChamado(chamado);
  };

  const chamadoSelecionado = (chamado: Chamado) => {
    console.log(chamado.nome);
  };
  const chamadoExcluido = (chamado: Chamado) => {
    console.log("chamado exlcuido");
  };
 // exibir detalhase do chamado e salvar informações no local storage
 return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Layout title="Chamados GSC"> 
        {chamado && <h1>chamado</h1>}
        {!chamado && <Form chamado={chamados[0]} onSubmit={salvarChamado} />}
        {/* <Table
          chamados={chamados}
          chamadoSelecionado={chamadoSelecionado}
          chamadoExcluido={chamadoExcluido}
        ></Table> */}
      </Layout>
    </div>
  );
}
