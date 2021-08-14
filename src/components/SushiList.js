import React from 'react'
import sushi from '../data/sushi.json'
import SushiItem from './SushiItem'

function SushiList(props) {
  const { filter } = props
  
  const sushiList = [];
  sushi.forEach(s => {
    const attributeSet = new Set(s.attributes)
    let valid = true;
    if (filter){
      Object.keys(filter).forEach(a => {
        if (!attributeSet.has(a)) valid = false;
      })
    }
    if (valid) sushiList.push(s);
  });

  return (
    <div>{sushiList.map(s => <SushiItem sushi={s}/> )}</div>
  )
}

export default SushiList
