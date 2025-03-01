import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.searchForm}>
      <label className={s.searchLabel}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => {dispatch(changeFilter(e.target.value))}}
        className={s.inputLabel}
      />
    </div>
  );
};

export default SearchBox;


