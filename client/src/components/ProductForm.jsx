import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductForm = (props) => {
    const {inputs, errors, handleChange, handleSubmit, submitValue} = props
    return (
        <div className='col-4 mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} id="title" className="form-control" value={inputs.title} type="text" name="title" />
                    <span className='text-danger text-sm'>{errors.title.message ? errors.title.message : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={handleChange}  id="price" className="form-control" value={inputs.price} type="number" name="price"/>
                    <span className='text-danger text-sm'>{errors.price.message ? errors.price.message : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input onChange={handleChange}  id="desc" className="form-control" value={inputs.desc} type="text" name="desc"/>
                    <span className='text-danger text-sm'>{errors.desc.message ? errors.desc.message : ""}</span>
                </div>
                <input type="submit" value={submitValue} className='btn btn-outline-dark'/>
            </form>
        </div>
    )
}

export default ProductForm
