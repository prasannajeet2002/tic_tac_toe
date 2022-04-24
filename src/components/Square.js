import React from 'react'

const styles = {
    background : 'lightblue',
    height : '100px', 
    width : '100px',
    border : '1px solid darkblue',
    borderRadius : '3px',
    cursor : 'pointer',
   outline : 'none',
   fontSize : '2rem'
}

function Square({value , onClick}) {
  return (
    <>
     <div>
       <button style={styles} onClick={onClick}>
           {value}
       </button>
     </div>
    </>
  )
}

export default Square