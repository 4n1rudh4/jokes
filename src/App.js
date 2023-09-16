import React,{ useEffect, useState} from 'react';

function App(){
    const [backendData,setBackendData]= useState({});
    const [isCheck,setIsCheck]=useState(true);
    useEffect(()=>{
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data[0]);
            }
        )
    },[])

    function handlechange(e){
        if (isCheck===true){
            fetch(`/api/login?userId=${e}`).then(
                response => response.json()
            ).then(
                data => {
                    setBackendData(data[0]);
                }
            )
        } 
        }
    

   const setup = backendData.setup;
   const reply= backendData.delivery;
    return <div className='h-screen bg-black flex align-middle justify-center'>
    <div  className=" bg-purple-600 p-10 h-auto w-120 rounded-lg text-white font-bold text-3xl">
    <div className='block'>Catergories</div>
    <div className='flex flexwrap'>
    <input type="checkbox"  onClick={()=>{
        setIsCheck(!isCheck);
        handlechange("Pun")
    }} className=' p-2 m-2 h-4 w-4'></input>
    <div>Pun</div>

    <input type="checkbox"  onClick={()=>{
        setIsCheck(!isCheck);
        handlechange("Christmas")
    }} className=' p-2 m-2 h-4 w-4'></input>
    <div>Christmas</div>
    
    <input type="checkbox"  onClick={()=>{
        setIsCheck(!isCheck);
        handlechange("Dark")
    }} className=' p-2 m-2 h-4 w-4'></input>
    <div>Dark</div>
    
    <input type="checkbox"  onClick={()=>{
        setIsCheck(!isCheck);
        handlechange("Programming")
    }} className=' p-2 m-2 h-4 w-4'></input>
    <div>Programming</div>
    </div>
    
    <hr/>
        <div className='block '><p>{setup}</p>
        <p>{reply}</p>
        </div>
        </div>
    </div> 
}

export default App;

