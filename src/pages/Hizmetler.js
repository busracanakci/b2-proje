import React from 'react'
import {MenuList} from '../helper/MenuList'

function Hizmetler() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Hizmetlerimiz</h1>
      <div className='menuList'>
        {MenuList.map((menuItem,key)=>{
return <div className='menuItem'>
    <div>
        <img src={menuItem.image}/>
    </div>
    <h3>{menuItem.name}</h3>
    <p>{menuItem.price}</p>
</div>
})}
      </div>
    </div>
  )
}

export default Hizmetler
