import ChamadoRepo from "@/core/ChamadoRepo";
import ChamadoCollection from "@/firebase/db/ChamadoCollection";
import { useQuery } from "react-query";
import firebase from "@/firebase/config";
import "firebase/firestore";
import { useEffect } from "react";

const db = firebase.firestore();

export default function useChamadosRC(collectionPath = "chamados") {
  const { isLoading, data, refetch, isError, error } = useQuery(
    collectionPath,
    async () => {
      const collectionRef = db.collection(collectionPath);

      collectionRef.onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        refetch;
      });

      const initialData = await collectionRef.get();
      return initialData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
  );

  useEffect(() => {
    return () => {
      const collectionRef = db.collection(collectionPath);
      collectionRef.onSnapshot(() => {}); // unsubscribe to the onSnapshot listener
    };
  }, [collectionPath]);

  return { isLoading, error, data, isError };
}
