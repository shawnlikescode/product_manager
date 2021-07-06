import React, { useState, useEffect } from 'react'
import {Link, navigate} from '@reach/router'
import Axios from 'axios'

const ShowOne = (props) => {
    const [product, setProducts] = useState([])
    
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProducts(res.data.results))
        .catch(err => setProducts(err));        
    }, [props])

    const onDelete = () => {
        Axios.delete(`http://localhost:8000/api/product/destory/${props.id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => { console.log(err); }
            );
    }
    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <Link className='btn btn-warning' to={`/update/${product._id}`}>EDIT</Link>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ShowOne
