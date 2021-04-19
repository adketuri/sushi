import React from 'react'
import attributes from '../data/attributes.json'
import { TagPicker } from 'rsuite';
import { compare } from "../util/compare"
import SushiList from "./SushiList"


function SushiFilter() {

  return (
    <>
      <TagPicker data={attributes} 
        groupBy="group"
        sort={isGroup => {
          if (isGroup) {
            return (a, b) => {
              return compare(a.groupTitle, b.groupTitle);
            };
          }
          return (a, b) => {
            return compare(a.value, b.value);
          };}}
          style={{ width: 300 }}  
      />
      <SushiList/>
    </>
  )
}

export default SushiFilter
