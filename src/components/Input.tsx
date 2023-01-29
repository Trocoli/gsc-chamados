interface InputProps {
  text: string;
  type?: string;
  placeholder?: string;
  onChange: (value: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 mt-4 font-bold">{props.text}</label>
      <input
        className="border border-red-500 rounded-lg focus:outline-none focus:bg-red-100 px-4 py-2 mb-3"
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
