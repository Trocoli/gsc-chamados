interface AuthInputProps {
    label: string;
    value: any;
    required?: boolean;
    type?: "text" | "email" | "password";
    onValueChange: (newValue: any) => void;
  }
  
  const AuthInput = (props: AuthInputProps) => {
    return (
      <div className="flex flex-col mt-4 ">
        <label className="text-white text-3xl font-semibold">{props.label}</label>
        <input
          className="border-solid-1 bg-gray-200 px-4 py-3 rounded-xl mt-2 border focus:border-blue-500  focus:bg-red-300 focus:outline-none "
          type={props.type}
          value={props.value}
          required={props.required}
          onChange={(e) => props.onValueChange?.(e.target.value)}
        />
      </div>
    );
  };
  
  export default AuthInput;
  