import React from 'react'

export default function Slice(props) {
    const {foto, nombre} = props

  return (
    <div className='mySlides fade'>
        <div className='numbertext'>
        <img src={foto} style={{width: '100%'}} />
        <div className='text'>{nombre}</div>
        </div>
    </div>
  )
}
