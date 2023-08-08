import React,{useState} from 'react';
import Textform from './State&Event';

export default function DarkMode() {
    const [myStyle, setmyStyle] = useState({
        backgroundColor: 'white',
        color: 'black',
        border:'2px solid blue'
    }) 

   const [btxt, setBtxt] = useState("Enable dark mode")

let chgStyle=()=>{
    if(myStyle.color==="black"){
    setmyStyle({
        backgroundColor: 'black',
        color: 'white'
    })
    setBtxt("Disable dark mode")
}
    else {
        setmyStyle({
            backgroundColor: 'white',
            color: 'black',
            border:'2px solid blue'

        })
        setBtxt("Enable dark mode")
    }
}
  return ( <>
  <Textform />
    <div style={myStyle}>
    </div>
      <button id='dark' onClick={chgStyle}>{btxt}</button>
      </>
  )
}
