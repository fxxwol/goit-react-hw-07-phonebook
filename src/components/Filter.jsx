import { Input, InputLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = e => {
    dispatch(change({ filterValue: e.target.value }));
  };

  return (
    <>
      <InputLabel htmlFor="filter">Find contacts by name</InputLabel>
      <Input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
