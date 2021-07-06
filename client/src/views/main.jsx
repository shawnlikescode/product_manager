import React, { useState} from 'react'
import Axios from 'axios'
import ProductForm from '../components/ProductForm'
import Show from '../components/DisplayAll'
import { navigate } from '@reach/router'

const Main = (props) => {
    const initialProduct = {
        title: "",
        price: "",
        desc:""
    }
    const initialErrors = {
        title: "",
        price: "",
        desc:""
    }
    const [product, setProducts] = useState(initialProduct)

    const [errors, setErrors] = useState(initialErrors)

    const handleChange = (e) => {
        setProducts({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors)
        e.preventDefault()
        Axios.post('http://localhost:8000/api/product/create', product)
            .then(res => {
                if (res.data.result) {
                    navigate('/')
                } else {
                    setErrors(res.data)
                }
            })
            .then(res => setProducts(initialProduct))
            .catch(err => console.log(err))
    }
    

    return (
        <div>
            <h1 className='text-center'>ADD A PRODUCT</h1>
            <ProductForm
                inputs={product}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue = "Create"
            />
            <hr />
            <Show product={product}/>
        </div>
    )
}

export default Main