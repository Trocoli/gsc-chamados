import Chamado from "@/core/Chamado";
import { TrashIcon, Cancelar  } from "./Icons/index";

interface TableProps {
  chamados: Chamado[];
  chamadoSelecionado?: (chamado: Chamado) => void;
  chamadoExcluido?: (chamado: Chamado) => void;
  children?: any;
}

const ConcluidosTable = (props: TableProps) => {
  const renderData = () => {
    return props.chamados?.map((chamado, i) => {

            return (
                <tr
                  key={chamado.id}
                  className={`${i % 2 === 0 ? "bg-gray-400" : "bg-gray-300"}`}
                >
                  <td className="text-left p-4">{chamado.nome}</td>
                  <td className="text-left p-4">{chamado.setor}</td>
                  <td className="text-left p-4">{chamado.descricao}</td>
                  <td className="text-left p-4">{`${chamado.timestamp.getHours()}:${+chamado.timestamp.getMinutes()<10 ? '0' : ''}${chamado.timestamp.getMinutes()}`}</td>
                  {renderActions(chamado)}
                </tr>
              );
        
    });
  };

  const renderActions = (chamado: Chamado) => {
    return (
      <td className="flex items-center justify-center">
        <button
          className={`flex justify-center item-center text-red-800 rounded-full hover:bg-red-50 p-2 m-1`}
          title='Chamado não resolvido ainda'
          onClick={() => props.chamadoSelecionado?.(chamado)}

        >
          {Cancelar}
        </button>
        <button
        onClick={() => props.chamadoExcluido?.(chamado)}
          className={`flex justify-center item-center text-gray-600 rounded-full hover:bg-red-50 p-2 m-1`}>
          {TrashIcon}
        </button>
      </td>
    );
  };

//   const renderHead = () => {
//     return (
//       <tr>
//         <th className="text-left p-4">Nome</th>
//         <th className="text-left p-4">Setor</th>
//         <th className="text-left p-4">Descrição</th>
//         <th className="text-left p-4">Completado</th>
//         <th className="p-4">Ações</th>
//       </tr>
//     );
//   };

  return (
    <div className="w-full mx-5 max-h-[600px] overflow-y-scroll rounded-xl">
      <table className="w-full rounded-xl  overflow-scroll">
        {/* <thead className="text-gray-100 bg-gradient-to-r from from-gray-700 to-gray-600 ">
          {renderHead()}
        </thead> */}
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
};

export default ConcluidosTable;
