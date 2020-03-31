import React, { useState, useEffect } from 'react';
import axios from 'axios';

type SearchProps = {
  type: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const [results, setResults] = useState('')
  const [endpoint, setEndpoint] = useState('')


  const getResults = async () => {
    try {
      const instructors  = await axios.get(endpoint);
      setResults(instructors.data);
    } catch {
      console.log('failed fetch of data...')
    }
  }

  useEffect(() => {
    if (props.type === 'instructors') {
      getResults()
    }
  }, [props.type])

  return (
    <div> 
      <div>{props.type}</div>
      <div>{results}</div>
    </div>
  )

}

export default Search;