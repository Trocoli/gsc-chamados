interface SetorFilterProps {
    placeholder?: string;
    onChange: (value: any) => void;
  }
  
  const SetorFilter = (props: SetorFilterProps) => {
    return (
      <div >  
        <select
          className="bg-gray-300 px-2 text-black text-center rounded-md"
          name="setor"
          id="setor"
          onChange={e => props.onChange(e.target.value)}
        >
          <option value="">Setor</option>
          <option value="GSC">GSC</option>
          <option value="DEP" >DEP</option>
          <option value="DCC" >DCC</option>
          <option value="SUP" >SUP</option>
        </select>
      </div>
    );
  };
  
  export default SetorFilter;
  