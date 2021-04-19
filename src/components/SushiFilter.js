import React, { useState } from 'react'
import attributes from '../data/attributes.json'
import { TagPicker } from 'rsuite';
import { compare } from "../util/compare"
import SushiList from "./SushiList"


function SushiFilter() {
  const [filter, setFilter] = useState([]);
  return (
    <>
      <TagPicker data={attributes} 
        groupBy="group"
        sort={isGroup => {
          if (isGroup) return (a, b) => compare(a.groupTitle, b.groupTitle)
          return (a, b) => compare(a.value, b.value)}}
          onChange={(value) => setFilter(value)}
          style={{ width: 300 }}  
      />
      <SushiList filter={filter}/>
    </>
  )
}

export default SushiFilter
