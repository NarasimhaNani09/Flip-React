import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Form() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [des, setDes] = useState('')
    const [img, setImg] = useState('')
    const [pid, setPid] = useState('')
    
    const [productsList, setProductsList] = useState([{}])
    
    const fetchData = ()=>{
            axios.get('http://localhost:3002/products')
            .then((res)=>setProductsList(res.data))
    }

    // fetchData();

    console.log(productsList)
    
    const productData = {
        productId:id,
        title:title,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(pid==""){
            axios.post('http://localhost:3002/products', productData)
            .then((res)=>{
                alert("Success")
                fetchData();
                setId('')
                setTitle('')
                setBrand('')
                setPrice('')
                setDes('')
                setImg('')
            })
        }else{
            axios.put(`http://localhost:3002/products/${pid}`, productData)
            .then((res)=>{
                alert("Success")
                fetchData();
                setId('')
                setTitle('')
                setBrand('')
                setPrice('')
                setDes('')
                setImg('')
            })
        }
        
    }
    
    const handleEdit = (editData)=>{
        setId(editData.productId)
        setTitle(editData.title)
        setBrand(editData.brand)
        setPrice(editData.price)
        setDes(editData.description)
        setImg(editData.thumbnail)

        setPid(editData.id)
    }
    
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res)=>{
            alert('Product Deleted')
            fetchData()
        })
    }
    let sno=1
    useEffect(()=>{
        fetchData()
    },0)
  return (
    <>
    <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Id</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Thumbnail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsList.map((e,i)=>{
                            return(
                                <>
                                <tr>
                                    <td>{ sno++ }</td>
                                    <td>{ e.productId }</td>
                                    <td>{ e.title }</td>
                                    <td>{ e.brand }</td>
                                    <td>{ e.price }</td>
                                    <td>{ e.description }</td>
                                    <td><img src={e.thumbnail} height="100"/></td>
                                    <td>
                                    <button className='btn btn-primary'  onClick={()=>handleEdit(e)}><i className='fa fa-edit'></i></button>
                                    &nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>handleDelete(e.id)}><i className='fa fa-trash'></i></button>
                                        
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
            </tbody>
        </table>
        <div className='row justify-content-center'>
            <div className='col-md-6 img-thumbnail'>
                <h3 className='text-center text-primary'>Add Product</h3>
                <hr/>
                <form method='post' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Product Id</label>
                        <input type='text' className='form-control' placeholder='Enter Product Id' value={id}
                         onChange={
                            (e)=>{
                                setId(e.target.value)
                            }
                            } />
                    </div>

                    <div className='mb-3'>
                        <label>Product Title</label>
                        <input type='text' className='form-control' placeholder='Enter Product Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>

                    <div className='mb-3'>
                        <label>Brand</label>
                        <input type='text' className='form-control' placeholder='Enter Brand'  value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>

                    <div className='mb-3'>
                        <label>Price</label>
                        <input type='text' className='form-control' placeholder='Enter Price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>

                    <div className='mb-3'>
                        <label>Description</label>
                        <textarea className='form-control' rows={3}  value={des} onChange={(e)=>{setDes(e.target.value)}}></textarea>
                    </div>

                    <div className='mb-3'>
                        <label>Image</label>
                        <input type='url' className='form-control' placeholder='Enter Product URL' value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                    </div>
                    <button className='btn btn-danger float-end'>Submit</button>
                </form>
            </div>
        </div>
        
    </>
  )
}
