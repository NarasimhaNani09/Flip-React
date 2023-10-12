import React, { useState } from 'react'
import axios from 'axios'
export const Add = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUserData = {
            roll:id,
            name:name
        };
        axios.post('http://localhost:3003/products', newUserData)
        .then((res)=>{
            alert('Success');
            setName('');
            setId("");
        })
    }
  return (
    <>
    <form class="row g-3 justify-content-center" method='post' onSubmit={handleSubmit}>
        <div className='col-md-6 bg-info'>
            <h3 className='text-center'>Add</h3>
            <div className='mb-3'>
                <label>Roll Number</label>
                <input type="text" value={id} placeholder='Enter Value' onChange={(e)=>setId(e.target.value)} className='form-control' required/>
            </div>

            <div className='mb-3'>
                <label>Name</label>
                <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='form-control' required/>
            </div>
            <button className='btn btn-danger float-end' >Submit</button>
        </div>
    </form>
    </>
  )
}
