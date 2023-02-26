interface SetorInputProps {
  placeholder?: string;
  onChange: (value: any) => void;
}

const SetorInput = (props: SetorInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 mt-4 font-bold">Setor</label>

      <select
        className="border border-red-500 rounded-lg font-semibold focus:outline-none focus:bg-red-100 px-4 py-2 mb-3"
        name="setor"
        id="setor"
        onChange={e => props.onChange(e.target.value)}
      >
        <option value="">Selecione o setor</option>
        <option value="GSC">GSC</option>
        <option value="DEP" >DEP</option>
        <option value="DCC" >DCC</option>
        <option value="SUP" >SUP</option>
      </select>
    </div>
  );
};

export default SetorInput;
