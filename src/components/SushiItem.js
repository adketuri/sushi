import React from 'react'

function SushiItem(props) {
  const {sushi} = props
  return (
    <div>
      <div>
        <strong>{sushi.name}</strong> {sushi.price}
        <br/>
        {sushi.attributes.map(a => a + ", ")}
        <br/><br/>
      </div>
    </div>
  )
}

export default SushiItem
