import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewProducts() {
   const [products,setProducts] =useState([]);
    const getData= ()=>{
        axios.get('http://localhost:5000/products')
             .then((res)=>setProducts(res.data))
    }
    useEffect(getData,[])

    function deleteProduct(id)
    {
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(res=>{
            if(res.status===200)
            {
                alert("Product details removed..!")
                window.location.reload();
            }
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>

        <table className='table tabel-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Specification</th>
                    <th>Manufacture</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=><tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.specification}</td>
                        <td>{product.manufacture}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td><input type='checkbox' checked={product.inStock}></input></td>
                        <td>
                            <button className='btn btn-outline-danger me-4' onClick={()=>deleteProduct(product.id)}>
                                <i class="bi bi-trash3-fill"></i>
                            </button>

                            <Link className='btn btn-outline-primary' to={`/edit/${product.id}`}>
                                <i class="bi bi-pencil-square"></i>
                            </Link>
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
     
    </div>

  )
}

export default ViewProducts