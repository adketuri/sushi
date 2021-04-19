import React from 'react'
import sushi from '../data/sushi.json'
import SushiItem from './SushiItem'

function SushiList(props) {
  const {} = props

  return (
    <div>{sushi.map(s => <SushiItem sushi={s}/> )}</div>
  )
}

export default SushiList
