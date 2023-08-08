import React,{useState} from 'react';

export default function Textform() {
    const[text,setText]=useState("");
    const clk=()=>{
      console.log("ok")
      let ntext=text.toUpperCase()
      console.log(ntext)
        setText(ntext)
    }
 
    // setText={"thanks"}
    let chng=(event)=>{
       setText(event.target.value)
      // console.log("hi")
    
    }
    const low=()=>{
      let ntext=text.toLowerCase()
      setText(ntext)
      console.log(ntext)
    }
    function textToSpeech(){
      const Speech= new SpeechSynthesisUtterance();
      const message= document.getElementById("txt").value;
      Speech.lang='eng';
      Speech.text= message;
      window.speechSynthesis.speak(Speech);
}
   let clr=()=>{
    let ntext=""
    setText(ntext)
   }
  
   let find=()=>{
    let f=prompt("what do you want to find?")
    f=f.toLowerCase()
    let j=0
    let tx=text.toLowerCase()
  let arr=Array.from(tx.split(" "))
  // console.log(arr)
  for (let i of arr) {
    if(i===f){
      j++
    }}
    document.getElementById('find').innerHTML=`No. of ${f} are: ${j}`
  }
  let rmSpace=()=>{
      let ntext=text.replace(/\s+/g,' ')
      setText(ntext)
    }
  return (
    <div className='container'>
      <textarea name="" className='form-control' value={text} onChange={chng} id="txt" cols="30" rows="10"></textarea>
      <button onClick={clk} className='btn-primary btn mx-2'>Write</button>
      <button onClick={low} className='btn-primary btn mx-2'>Lower case</button>
      <button onClick={clr} className='btn-primary btn mx-2'>Clear</button>
      <button onClick={textToSpeech} className='btn-primary btn mx-2'>Read</button>
      <button onClick={find} className='btn-primary btn mx-2'>Find any word in the text</button>
      <button onClick={rmSpace} className='btn-primary btn mx-2'>Remove extra spaces</button>
      <div id="lt">No. of characters: {text.length}</div> 
      <div id="lt">Limit: 100 characters</div>
      <div id="lt">Left: {100-(text.length)} characters</div>
      <div id="lt">Words: {text.split(" ").length}</div>
      <div id="lt">Sentences: {text.split(".").length}</div>
      <div id="find"></div>
      
    </div>
  )
  }
