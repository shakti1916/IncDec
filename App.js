import React,{useState} from 'react'

const App =()=>{

  const [num,setNum]=useState(0);
   const incNum=()=>{
    
setNum(num+1)

  }
  const decNum = ()=>{
    if(num>0){
      setNum(num-1)
    }else{
      setNum(0)
      alert(" Decrement value cannot go less than zero ")
    }
    
  }

  return (

    <>
<div className='main-div'>

<div className='center-div'>
<h1>{num}</h1>
<div className='btn-div'>
  <button onClick={incNum}>Increment</button>
  <button onClick={decNum} className='b2'>Decrement</button>
</div>


</div>

</div>

    </>
  )
}

export default App
