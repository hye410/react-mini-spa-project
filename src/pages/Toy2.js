import { useCallback, useEffect, useState } from "react";

function Toy2(){

  const[number,setNumber] = useState(0);
  const[toggle,setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log('someFunc number : ',number);
    return;
  },[number]);

  useEffect(()=>{
    console.log('썸펑션이 변경되었습니다.')
  },[someFunction])
  // state가 변경될 때 마다 함수형 컴포넌트가 새로 랜더링되니까 저 sumfunction의 메모리 주소값이 바뀌어서 useEffect가 계속 바뀜..

   return(
    <div>
      <input
      type="number"
      value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <br />
      <button onClick={() => someFunction()}>Call someFunc</button>
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  )
}

export default Toy2;