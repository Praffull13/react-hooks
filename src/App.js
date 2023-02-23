// import React, {useEffect, useRef, useState} from "react";
import MainComponent from "./MainComponent";
import LoginContextProvider from './context/LoginContextProvider';
// import React, {useLayoutEffect, useReducer} from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";
import React,{useEffect, useState, useLayoutEffect, useRef} from "react";






// -----------------------------------
// 6)useLayoutEffect
const App=()=>{
  const[toggle,setToggle]=useState(false);
  const textRef =useRef()

 
  
  useLayoutEffect(()=>{
    if(textRef.current !=null){
    const dimension = textRef.current.getBoundingClientRect();
    console.log(dimension);
    textRef.current.style.paddingTop=`&{dimension.height}px`;
    }
  },[toggle]);

  // useLayoutEffect(()=>{
  //   console.log("useLayoutEffect");
  // },[toggle]);

  return(
    <>
    <button onClick={()=> setToggle(!toggle)}>toggle</button>
    {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    
    </>
  )
}

// ---------------------------------------------------------------
// 5)useReducer
// const initialState = {count:0}

// const reducer =(state, action)=>{
// switch(action.type){
//   case "increase":
//     return{count : state.count+1};

//     case "decrease":
//       return{count : state.count-1};
//   default:
//     return state;
// }
// };

// const App=()=>{
//   const [state, dispatch]=useReducer(reducer,initialState)

//   const increaseCount=()=>{
//     dispatch({type: "increase"});
//   };

//   const decreaseCount=()=>{
//     dispatch({type: "decrease"});

//   };


// return(
//   <div>
//     <h2>Count:{state.count}</h2>
//     <button onClick={increaseCount}>Increase</button>
//     <button onClick={decreaseCount}>Decrease</button>
//   </div>
// )

// };


// ------------------------
// 4)useRef Hook
// const App = () => {
//   const [name, setName] =useState("");
//   const count = useRef(0);

//  useEffect(()=>{
//   count.current = count.current +1;
//  })
  
// return(
//   <div>
//     <input type='text' onChange={(e)=>setName(e.target.value)}/>
//     <h2>Name: {name}</h2>
//     <h2>Renders :{count.current}</h2>
//   </div>
// )
// };
// ----------------------------------
// useEffect
// 1)useEffect without dependency
 
// const App=()=>{
//   const [count, setCount]=useState(0);
//   const [otherCount , setOtherCount]=useState(5);
//   console.log(setOtherCount);
//   useEffect(()=>{
//     document.title=`${otherCount} new messages!`;

//   },[otherCount]);
//   return(
//     <div>
//       <h3>{count} new Messages!</h3>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//       <h3>Other Count:{otherCount}</h3>
//       <button onClick={() => setOtherCount(otherCount+5)}>Increase by 5</button>
    
//     </div>
//   )
// }

// 2)clean-up function in useEffect
// const App=()=>{
//   const [count,setCount]=useState(0);

//   useEffect(()=>{
//     console.log('Run effect',count);

//     return () => {
//       console.log("clean up", count);
//   };

//   },[count]);

//   return(
//     <>
//     <h3>Count :{count}</h3>
//     <button onClick={()=> setCount(count+1)}>Increase</button></>
//   )

// }



//  useState with Object as variable
// const App = () => {
  
//     const [details, setDetails]=useState({counter:0,name:""})  
  
//     function increaseCounter (){
//      setDetails((prev) => ({
//       ...prev,
//       counter:prev.counter+1,

//      }));
     
//     }
//     console.log(details);
//     return (
//       <div>
//         <input type="text" onChange={e => setDetails(e.target.value)}/>
//         <h1>{details.name} has clicked {details.counter} times!!</h1>
  
//         <button onClick={increaseCounter}>Increase</button>
//       </div>
    
//     );
//  };
  




//  useState Hook with input text
// const App = () => {
  
//   const [counter,setCounter] = useState(0);
//   const [name, setName]=useState ("")


//   function IncreaseCounter (){
//     setCounter(counter+1);
//   }
//   return (
//     <div>
//       <input type="text" onChange={e => setName(e.target.value)}/>
//       <h1>{name} has clicked {counter} times!!</h1>

//       <button onClick={IncreaseCounter}>Increase</button>
//     </div>
  
//   );
//   };




// useState hook
// const App = () => {
  
//   const [counter,setCounter] = useState(0);
//   function IncreaseCounter (){
//     setCounter(counter+1);
//   }
//   // console.log(counter);
//   return (
//     <div>
//       <
//       <h1>Counter:{counter}</h1>
//       <button onClick={IncreaseCounter}>Increase</button>
//     </div>
  
//   );
//   };

export default App;
