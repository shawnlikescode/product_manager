import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import ProductForm from '../components/ProductForm'
import { navigate } from '@reach/router'

const Update = (props) => {

    const initialErrors = {
        title: "",
        price: "",
        desc:""
    }
    const [edit, setEdit] = useState({
        title: "",
        price: 0,
        desc: ""
    })

    const [errors, setErrors] = useState(initialErrors)

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors)
        e.preventDefault()
        Axios.put(`http://localhost:8000/api/product/update/${edit._id}`, edit)
            .then(res => {
                if (res.data.result) {
                    navigate('/')
                }
                else {
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setEdit(res.data.results))
        .catch(err => setEdit(err));        
    }, [props])

    return (
        <div>
            <h1 className='text-center'>Edit Product</h1>
            <ProductForm
                inputs={edit}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue = "EDIT"
            />
        </div>
    )
}

export default Update