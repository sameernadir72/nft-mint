import {useState} from "react";
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div class="input-group">
  <div class="input-group-prepend">
    <button  class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button  class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}
export default IncDecCounter;