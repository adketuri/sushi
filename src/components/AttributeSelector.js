import React from 'react'
import { Checkbox, CheckboxGroup } from 'rsuite'
import attributes from '../data/attributes.json'

/**
          <TagPicker data={attributes} 
            groupBy="group"
            sort={isGroup => {
              if (isGroup) return (a, b) => compare(a.groupTitle, b.groupTitle)
              return (a, b) => compare(a.value, b.value)}}
              onChange={(value) => setFilter(value)}
              style={{ width: 200 }}  
            />
 */

let lastGroup = undefined;
function AttributeSelector({onChange, initialFilter}) {
  return (
    <>
      {attributes.map(attr => {
        let heading = undefined;
        if (lastGroup !== attr.group) {
          heading = <p><small><strong>{attr.group.toUpperCase()}</strong></small></p>
          lastGroup = attr.group;
        }
        return (
        <>
          {heading}
          <Checkbox key={attr.value} value={attr.value} checked={initialFilter[attr.value]} onChange={onChange}>{attr.label}</Checkbox>
        </>)
      })}
    </>
  )
}

export default AttributeSelector
