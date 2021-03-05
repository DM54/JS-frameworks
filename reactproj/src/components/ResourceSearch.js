import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const ResourceSearch = ({onSearch}) => {

  return (
    <form className="card p-2">
      <div className="input-group">
        {/*debouncetimeout will wait unitl stop typing it will execute the search */}
        <DebounceInput  onChange={(e) => onSearch(e.target.value)} debounceTimeout={2000} className="form-control" placeholder="Some title" />

      </div>
    </form>

  )
}

export default ResourceSearch;
