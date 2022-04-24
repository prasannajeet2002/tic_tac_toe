import React from 'react'
import Square  from './Square'

const styles  = {
    margin :'0 auto',
    display : 'grid',
    gridTemplate : 'repeat(3 , 1fr)/repeat(3 , 1fr)',
    height : '300px',
    width : '300px',
    border : '3px solid darkblue',
    borderRadius : '10px'
}

function Board({squares ,onClick}) {
  return (
    <>
    <div style={styles}>
      {squares.map((square , i) => (
        
          
      <Square key={i} value = {square} onClick={()=>onClick(i)} />
        
      ))}
    </div>
    </>
  )
}

export default Board