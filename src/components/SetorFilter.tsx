interface SetorFilterProps {
  placeholder?: string;
  onChange: (value: any) => void;
}

const SetorFilter = (props: SetorFilterProps) => {
  return (
    <div>
      <select
        className="bg-gray-300 text-black text-center rounded-md"
        name="setor"
        id="setor"
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value="">Setor</option>
        <option value="ARQ">ARQ</option>
        <option value="ASP">ASP</option>
        <option value="CPA">CPA</option>
        <option value="CPL">CPL</option>
        <option value="CON">CON</option>
        <option value="DEP">DEP</option>
        <option value="DCC">DCC</option>
        <option value="DT">DT</option>
        <option value="DOH">DOH</option>
        <option value="DRF">DRF</option>
        <option value="DA">DA</option>
        <option value="DRA">DRA</option>
        <option value="DRH">DRH</option>
        <option value="GSC">GSC</option>
        <option value="MAT">MAT</option>
        <option value="PAT">PAT</option>
        <option value="PJU">PJU</option>
        <option value="SUP">SUP</option>
      </select>
    </div>
  );
};

export default SetorFilter;
