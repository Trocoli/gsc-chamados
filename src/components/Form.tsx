import Chamado from "@/core/Chamado";
import useChamado from "@/hooks/useChamados";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  chamado: Chamado;
  onSubmit?: (chamado: Chamado) => void;
  onClickCapture?: () => void
}

const Form = (props: FormProps) => {
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tempId, setTempId] = useState(
    Math.floor(Math.random() * 100).toString()
  );


  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(true);
  };

  const onHideForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        {!showForm && (
          <button
            className="bg-red-600 h-10 w-40 rounded-lg text-white hover:bg-red-500 hover:font-bold hover:scale-110 ease-in-out duration-200"
            onClick={onShowForm}
          >
            Novo chamado
          </button>
        )}
      </div>
      {showForm && (
        <div>
          <div>
            <Input
              text="Nome"
              placeholder="Insira seu nome"
              onChange={setNome}
            />
            <Input
              text="Setor"
              placeholder="Insira o Setor"
              onChange={setSetor}
            />
            <Input
              text="Descrição"
              placeholder="Descreva o problema em poucas palavras"
              onChange={setDescricao}
            />
          </div>
          <div className=" flex justify-center pt-2 m-2 ">
            <Button
              className={`bg-red-500 mt-5 w-full mr-3  hover:bg-red-400 hover:font-bold  ease-in-out duration-200`}
              onClick={() =>
                props.onSubmit?.(
                  new Chamado(
                    nome,
                    setor,
                    descricao,
                    tempId,
                    new Date(),
                    null,
                    false
                  )
                )
              }
              onClickCapture={props.onClickCapture}
            >
              Confirmar
            </Button>
            <Button
              onClick={onHideForm}
              className={`bg-gray-500 mt-5 hover:bg-gray-400 hover:font-bold `}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
