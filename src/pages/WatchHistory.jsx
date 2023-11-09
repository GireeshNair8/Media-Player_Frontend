import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistory, getAllHistory } from '../services/allAPI'
function WatchHistory() {
  const[history, setHistory]= useState([])
  const allHistory=async()=>{
    const {data}= await getAllHistory()
    /*console.log(data);*/
    setHistory(data)
  }
  console.log(history);
  //function to remove history
  const removeHistory=async(id)=>{
    await deleteVideoHistory(id)
    //to get remaining history
    allHistory()
  }
  useEffect(()=>{
    allHistory()
  },[])
  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' 
        style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}> <i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back To Home</Link>
       </div >
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th className='d-flex justify-content-center'>Remove History</th>
          </tr>
        </thead>
        <tbody>
         {history?.length>0? 
         history?.map((item, index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={`${item.embedLink}?autoplay=1`} target='blank'>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>
          <td className='d-flex justify-content-center'><button className=' btn btn-danger' onClick={()=>removeHistory(item?.id)}> <i class="fa-solid fa-trash-can"></i></button>
</td>
        </tr>))
         
        :
        <p className='mt-5 fw-bolder fs-4 text-danger'>No watch History</p>  
        }
        </tbody>
      </table>
    
    </>
  )
}

export default WatchHistory