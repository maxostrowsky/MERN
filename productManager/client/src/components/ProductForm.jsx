import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update title, price and description
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Product Manager</h1>
            <form onSubmit={onSubmitHandler} className='form-horizontal'>
                <div className="form-group">
                    <label className="control-label col-sm-2">Title</label><br />
                    <div className="col-sm-10">
                        <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Price</label><br />
                    <div className="col-sm-10">
                        <input className="form-control" type="int" onChange={(e) => setPrice(e.target.value)} value={price} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Description</label><br />
                    <div className="col-sm-10">
                        <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
