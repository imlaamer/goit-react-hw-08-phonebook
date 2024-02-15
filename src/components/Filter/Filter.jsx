import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const value = event.currentTarget.value;
    dispatch(filterContacts(value));
  };

  const { filterBox, filterText, filterInput } = css;

  return (
    <div className={filterBox}>
      <p className={filterText}>{'Find contacts by name 🔎'}</p>
      <input
        type="text"
        name="filter"
        placeholder="Name..."
        className={filterInput}
        onChange={handleFilterChange}
      />
    </div>
  );
}
