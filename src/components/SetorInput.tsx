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
        <option value="ARQ" >ARQ</option>
        <option value="ASP" >ASP</option>
        <option value="BIM" >BIM</option>
        <option value="CPA">CPA</option>
        <option value="CPL" >CPL</option>
        <option value="CON" >CON</option>
        <option value="DEP" >DEP</option>
        <option value="DCC" >DCC</option>
        <option value="DT" >DT</option>
        <option value="DOH" >DOH</option>
        <option value="DRF" >DRF</option>
        <option value="DA" >DA</option>
        <option value="DRA" >DRA</option>
        <option value="DRH" >DRH</option>
        <option value="GAB" >GAB</option>
        <option value="GSC" >GSC</option>
        <option value="MAT" >MAT</option>
        <option value="PAT" >PAT</option>
        <option value="PJU" >PJU</option>
        <option value="SUP" >SUP</option>
        <option value="SCDO">SCDO</option>
        <option value="TRAN">TRAN</option>
        <option value="TRAN">TRAN</option>
        <option value="GRCG">GRCG</option>
        <option value="GRPT">GRPT</option>
        <option value="GRSZ">GRSZ</option>
        <option value="GRCZ">GRCZ</option>
        <option value="GRIT">GRIT</option>
      </select>
    </div>
  )
};

export default SetorInput;
