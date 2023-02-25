import Chamado from "@/core/Chamado";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { TrashIcon, Cancelar } from "./Icons/index";

interface TableProps {
  chamados: Chamado[];
  chamadoSelecionado?: (chamado: Chamado) => void;
  chamadoExcluido?: (chamado: Chamado) => void;
  isReport?: boolean;
  children?: any;
}

const ConcluidosTable = (props: TableProps) => {
  const [filteredMonth, setFilteredMonth] = useState(""); // get current month

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    setFilteredMonth(month);
  }, []);

  const onChangeFilter = (selectedMonth: string) => {
    console.log(selectedMonth);
    setFilteredMonth(selectedMonth);
  };

  const chamadosFilteredByMonth = props.chamados.filter((chamado) => {
    return (
      chamado.completed_at
        ?.toLocaleString("pt-BR", { month: "long" })
        .toString() === filteredMonth
    );
  });

  const renderData = () => {
    if (!props.isReport) {
      // home admin page chamados de hoje
      return props.chamados?.map((chamado, i) => {
        return (
          <tr
            key={chamado.id}
            className={`${i % 2 === 0 ? "bg-gray-400" : "bg-gray-300"}`}
          >
            <td className="text-left p-4">{chamado.nome}</td>
            <td className="text-left p-4 font-bold">{chamado.setor}</td>
            <td className="text-left p-4">{chamado.descricao}</td>
            <td className="text-left p-4 font-light">{`
            ${chamado.completed_at!.getHours()}:${
              +chamado.completed_at!.getMinutes() < 10 ? "0" : ""
            }${chamado.completed_at!.getMinutes()}`}</td>
            {renderActions(chamado)}
          </tr>
        );
      });
    } else {
      return chamadosFilteredByMonth?.map((chamado, i) => {
        return (
          <tr
            key={chamado.id}
            className={`${i % 2 === 0 ? "bg-gray-400" : "bg-gray-300"}`}
          >
            <td className="text-left p-4">{chamado.nome}</td>
            <td className="text-left p-4 font-bold">{chamado.setor}</td>
            <td className="text-left p-4">{chamado.descricao}</td>
            <td className="text-left p-4 font-light">{`${chamado.completed_at!.getDate()} de ${filteredMonth} às ${chamado.completed_at!.getHours()}:${
              +chamado.completed_at!.getMinutes() < 10 ? "0" : ""
            }${chamado.completed_at!.getMinutes()}`}</td>
            {renderActions(chamado)}
          </tr>
        );
      });
    }
  };

  const renderHead = () => {
    return (
      <tr className="bg-gray-800 text-white">
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Setor</th>
        <th className="text-left p-4">Descrição</th>
        <th className="text-left p-4">Resolvido em</th>
        <th className="p-4">
          <Filter selected={filteredMonth} onChangeFilter={onChangeFilter} />
        </th>
      </tr>
    );
  };

  const renderActions = (chamado: Chamado) => {
    return (
      <td className="flex items-center justify-center">
        {!props.isReport && (
          <button
            className={`flex justify-center item-center text-red-800 rounded-full hover:bg-red-50 p-2 m-1`}
            title="Chamado não resolvido ainda"
            onClick={() => props.chamadoSelecionado?.(chamado)}
          >
            {Cancelar}
          </button>
        )}
        <button
          onClick={() => props.chamadoExcluido?.(chamado)}
          className={`flex justify-center item-center text-gray-600 rounded-full hover:bg-red-50 p-2 m-1`}
        >
          {TrashIcon}
        </button>
      </td>
    );
  };

  /* 
    Retorna. se for a tabela dos dias de hoje na pagina de chamados abertos retorna sem o Table head. 
  */

  return (
    <div className="w-full mx-5 max-h-[600px] overflow-y-scroll rounded-xl">
      <table className="w-full rounded-xl  overflow-scroll">
        {/* <thead className="text-gray-100 bg-gradient-to-r from from-gray-700 to-gray-600 ">
          {renderHead()}
        </thead> */}
        {props.isReport && renderHead()}
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
};

export default ConcluidosTable;
