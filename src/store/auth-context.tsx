import User from "@/model/User";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import firebase from "../firebase/config";

interface AuthContextProps {
  user?: User;
  showError?: string;
  login?: (email: string, password: string) => Promise<void>;
  isLoading?: boolean;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const route = useRouter();

  const normalizedUser = async (firebaseUser: firebase.User): Promise<User> => {
    const token = await firebaseUser.getIdToken();
    return {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName!,
      email: firebaseUser.email!,
      token,
      provider: firebaseUser.providerData[0]?.providerId!,
      imgUrl: firebaseUser.photoURL!,
    };
  };

  const sessionConfig = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const userLogged = await normalizedUser(firebaseUser);
      setUser(userLogged);
      manageCookie(true);
      setIsLoading(false);
      return user?.email;
    } else {
      manageCookie(false);
      setUser(undefined);
      setIsLoading(false);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await sessionConfig(res.user);
      route.push("/admin");
    } finally {
      setIsLoading(false);
      console.log("user logged in");
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      await sessionConfig(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const manageCookie = (isLogged: boolean) => {
    if (isLogged) {
      Cookies.set("admin-auth-gsc", isLogged.toString(), {
        expires: 7,
      });
    } else {
      Cookies.remove("admin-auth-gsc");
    }
  };

  useEffect(() => {
    if (Cookies.get("admin-auth-gsc")) {
      const cancelar = firebase.auth().onIdTokenChanged(sessionConfig);
      return () => cancelar();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
