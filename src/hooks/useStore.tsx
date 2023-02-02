import { useContext } from "react";
import ChamadoCtx from '../store/chamados-context'

export const useStore = () => useContext(ChamadoCtx)