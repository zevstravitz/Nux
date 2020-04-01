import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Select from 'react-select';
import { ITerm } from '../../../types/api'

type SearchProps = {
  type: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const [results, setResults] = useState('')
  const [term, setTerm] = useState('')
  const [subject, setSubject] = useState('')
  const [endpoint, setEndpoint] = useState('')

  const [showTermSelect, setShowTermSelect] = useState(false)
  const [showSubjectSelect, setShowSubjectSelect] = useState(false)
  const [showSchoolSelect, setShowSchoolSelect] = useState(false)

  let terms, schools, subjects, classes, instructors;

  const base = 'https://localhost:5000/'

  useEffect(() => {
    async function fetchTerms() {
      try {
        const termsArray = await axios.get(base + 'api/search/terms')
        terms = termsArray.data.map((t: ITerm) => t.acadyear)
      } catch (e) {
        throw e
      }
    } 
    fetchTerms();
  })

  useEffect(() => {
    if (props.type === 'classes') {
      
    } else if (props.type === 'instructors') {
      
    } 
  }, [props.type])

  const getResults = async () => {
    try {
      const searchResults  = await axios.get(endpoint);
      setResults(searchResults.data);
    } catch {
      console.log('failed fetch of data...')
    }
  }

  const handleTermSelection = (selection: any) => {
      setTerm(selection.value)
  }
 
  return (
    <div> 
      <Select
        options={terms}
        onChange={selection => handleTermSelection(selection)}
      />
      <div>{props.type}</div>
      <div>{results}</div>
    </div>
  )

}

export default Search;