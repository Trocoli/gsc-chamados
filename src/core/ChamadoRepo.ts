import Chamado from "./Chamado";

export default interface ChamadoRepo {
    save(chamado: Chamado): Promise<Chamado>
    update(chamado: Chamado): Promise<Chamado>
    delete(chamado: Chamado): Promise<void>
    getAll(): Promise<Chamado[]>
    getChamadosAbertos(): Promise<Chamado[]>
    getChamadosConcluidos(): Promise<Chamado[]>

}