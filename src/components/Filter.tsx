interface FilterProps {
  selected: string
  onChangeFilter: (e: any) => void
}


const Filter = (props: FilterProps) => {

  const dropdownChangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value);
  }; 

  return (
    <div>
      <select
        name="meses"
        id="meses"
        value={props.selected}
        className="bg-gray-300 text-black text-center rounded-md"
        onChange={dropdownChangeHandler}
      >
        <option value="janeiro">Janeiro</option>
        <option value="fevereiro">Fevereiro</option>
        <option value="março">Março</option>
        <option value="abril">Abril</option>
        <option value="maio">Maio</option>
        <option value="junho">Junho</option>
        <option value="julho">Julho</option>
        <option value="agosto">Agosto</option>
        <option value="setembro">Setembro</option>
        <option value="outubro">Outubro</option>
        <option value="novembro">Novembro</option>
        <option value="dezembro">Dezembro</option>
      </select>
    </div>
  );
};

export default Filter;


