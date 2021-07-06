import React, { useState, useEffect } from 'react'
import {Link} from '@reach/router'
import Axios from 'axios'

const Show = (props) => {
    const [product, setProducts] = useState([])


    useEffect(() => {
            Axios.get('http://localhost:8000/api/product')
                .then(res => setProducts(res.data.results))
                .catch(err => setProducts(err));
    }, [])
    
    return (
        <div>
            
            <table className="table table-dark col-sm-4 mx-auto text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((p, i) => {
                        return <tr key={i}>
                                    <td><Link to={`/product/${p._id}`}>{p.title}</Link></td>
                                    <td>{p.price}</td>
                                    <td>{p.desc}</td>

                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Show
