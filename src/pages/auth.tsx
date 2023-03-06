import AuthInput from "@/components/AuthInput";
import { ErrorIcon } from "@/components/Icons";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";

const Auth = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("gsc@hotmail.com");
  const [error, setError] = useState<string>()

  
  const { login} = useAuth();

  const showError = (msg: string, timeInSeconds = 4) => {
    setError(msg);
    setTimeout(() => setError(""), timeInSeconds * 1000);
  };

  const handlePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target!.value);
    console.log(e.target.value);
  };

  const submit = async () => {
    try {
      if (login) {
        await login(email, password);
      }
    } catch (err: any) {
      showError('Senha inválida')
    }
  };

  return (
    <div className="flex  items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
      {error && (
          <div
            className={`bg-red-400 text-white flex rounded-lg py-3 px-5 my-2 border border-red-700 `}
          >
            {ErrorIcon()} <span className="ml-3 text-bold">{error}</span>
          </div>
        )}
        <div className="">
          <AuthInput
            type="password"
            label="Entre com a senha de administrador"
            value={password}
            required
            onValueChange={setPassword}
          />
        </div>
        <button
          className="bg-red-600 text-white font-semibold text-md mt-5 h-10 rounded-xl w-2/3 hover:scale-110 ease-in-out duration-200 hover:font-bold hover:bg-red-500"
          onClick={submit}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Auth;
