import Chamado from "@/core/Chamado";
import ChamadoRepo from "@/core/ChamadoRepo";
import firebase from "@/firebase/config";
import { orderBy, OrderByDirection } from "firebase/firestore";

export default class ChamadoCollection implements ChamadoRepo {
  #conversor = {
    toFirestore(chamado: Chamado) {
      return {
        nome: chamado.nome,
        setor: chamado.setor,
        descricao: chamado.descricao,
        timestamp: chamado.timestamp,
        completed_at: chamado.completed_at,
        isFinished: chamado.isFinished,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Chamado {
      const data = snapshot?.data(options);
      return new Chamado(
        data.nome,
        data.setor,
        data.descricao,
        snapshot.id,
        data.timestamp.toDate(),
        data.completed_at?.toDate(),
        data.isFinished
      );
    },
  };

  async save(chamado: Chamado): Promise<Chamado> {
    const docRef = await this.collection().add(chamado);
    const doc = await docRef.get();
    console.log(doc.data);
    return doc.data()!;
  }
  async delete(chamado: Chamado): Promise<void> {
    return this.collection().doc(chamado.id).delete();
  }
  async getAll(): Promise<Chamado[]> {
    const query = await this.collection().get();
    return (
      query.docs.map(
        (doc: { data: () => any }) => doc.data(),
        orderBy("timestmap", "desc")
      ) ?? []
    );
  }

  async getChamadosAbertos(): Promise<Chamado[]> {
    const query = await this.collection()
      .orderBy("__name__", 'asc')
      .where("isFinished", "==", false)
      .get();
    return query.docs.map((doc: { data: () => any }) => doc.data()) ?? [];
  }

  async getChamadosConcluidos(): Promise<Chamado[]> {
    const query = await this.collection().where("isFinished", "==", true).get();
    return query.docs.map((doc: { data: () => any }) => doc.data()) ?? [];
  }

  async chamadoResolvido(chamado: Chamado): Promise<Chamado> {
    // const novoChamado = new Chamado(chamado.nome, chamado.setor, chamado.descricao, chamado.id, chamado.timestamp, new Date(), true)
    if (chamado?.id) {
      await this.collection()
        .doc(chamado.id)
        .update({ completed_at: new Date(), isFinished: true });
      // console.log(novoChamado)
      return chamado;
    }
    return chamado;
  }

  async chamadoNaoResolvido(chamado: Chamado): Promise<Chamado> {
    // const novoChamado = new Chamado(chamado.nome, chamado.setor, chamado.descricao, chamado.id, chamado.timestamp, new Date(), true)
    if (chamado?.id) {
      await this.collection()
        .doc(chamado.id)
        .update({ completed_at: new Date(), isFinished: false });
      // console.log(novoChamado)
      return chamado;
    }
    return chamado;
  }

  private collection() {
    return firebase
      .firestore()
      .collection("chamados")
      .withConverter(this.#conversor);
  }
}
