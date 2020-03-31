import React, { useState } from 'react';
import Select from 'react-select';
import Search from '../Search/index';

const SelectSearch = () => {
  const [searchType, setSearchType] = useState('')

  const options = [
    { value: 'classes', label: '✏️ Classes' },
    { value: 'instructors', label: '👩‍🏫 Instructors' },
    { value: 'buildings', label: '🏫 Buildings' }
  ]

  const handleSearchType = (type: any) => {
    setSearchType(type.value)


  }

  return (
    <div>
      <Select
        options={options}
        onChange={selection => handleSearchType(selection)}
      />

      <Search
        type={searchType}>

      </Search>
    </div>
  )
}

export default SelectSearch;