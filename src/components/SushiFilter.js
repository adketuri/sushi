import React, { useState } from 'react'
import { Button, Drawer } from 'rsuite';
import SushiList from "./SushiList"
import AttributeSelector from "./AttributeSelector"
// import CartModal from "./CartModal"

function SushiFilter() {
  const [filter, setFilter] = useState({});
  const [open, setOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <>
        <Button onClick={()=> setOpen(true)}>Open</Button>
        <Button onClick={()=> setCartVisible(true)}>Cart</Button>

        {/* <CartModal cartVisible setCartVisible={setCartVisible}/> */}

        <Drawer
          size="xs"
          show={open}
          onHide={()=> setOpen(false)}
          style={{width: 250}}
        >
          <Drawer.Header>
            <Drawer.Title>Options</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <AttributeSelector onChange={(v, checked)=> {
              if (checked){
                setFilter({...filter, [v]: true})
              } else {
                const { [v]: value, ...rest } = filter
                setFilter(rest)
              }
            }} initialFilter={filter}/>
          </Drawer.Body>
          <Drawer.Footer/>
        </Drawer>


      <SushiList filter={filter}/>
    </>
  )
}

export default SushiFilter
