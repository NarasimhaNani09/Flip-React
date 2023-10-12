import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const User = () => {
    const [userData, setUserData] = useState([{}])
    useEffect(()=>{
        axios.get('http://localhost:3003/products')
        .then((res)=>setUserData(res.data))
    },[])

    const hangleEdit = (e)=>{
        console.log(e.target.value)
    }

    console.log(userData)
    return(
        <>
        {
            userData.map((e,i)=>{
                return(
                    <>
                    <h1>{e.roll} -- {e.name}</h1>
                    </>
                )
            })
        }
        </>
    )
}
