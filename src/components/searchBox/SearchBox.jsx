import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchForm}>
      <label htmlFor="search" className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={s.inputLabel}
      />
    </div>
  );
};

export default SearchBox;


