import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import firebase from "@/firebase/config";

export default class ChamadoCollection implements ChamadoRepo {
  #conversor = {
    toFirestore(chamado: Chamado) {
      return {
        nome: chamado.nome,
        setor: chamado.setor,
        descricao: chamado.descricao,
        timestamp: chamado.timestamp,
        completed_at: null,
        isFinished: false 
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Chamado {
      const data = snapshot?.data(options);
      return new Chamado(data.nome, data.setor, data.descricao, snapshot.id,  data.timestamp.toDate() , null, false);
    },
  };

  async save(chamado: Chamado): Promise<Chamado> {
    const docRef = await this.collection().add(chamado)
    const doc = await docRef.get()
    console.log(doc.data)
    return doc.data()!;
  }
  async delete(chamado: Chamado): Promise<void> {
    return this.collection().doc(chamado.id).delete();
  }
  async getAll(): Promise<Chamado[]> {
    const query = await this.collection().get()
    return query.docs.map((doc: { data: () => any; })=> doc.data()) ?? []
  }
  

  private collection() {
    return firebase
      .firestore()
      .collection("chamados")
      .withConverter(this.#conversor);
  }
}
