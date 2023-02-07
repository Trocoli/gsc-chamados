import Chamado from "./Chamado";

export default interface ChamadoRepo {
    save(chamado: Chamado): Promise<Chamado>
    chamadoResolvido(chamado: Chamado): Promise<Chamado>
    chamadoNaoResolvido(chamado: Chamado): Promise<Chamado>
    delete(chamado: Chamado): Promise<void>
    getAll(): Promise<Chamado[]>
    getChamadosAbertos(): Promise<Chamado[]>
    getChamadosConcluidos(): Promise<Chamado[]>

}