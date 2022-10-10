import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UploadProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleUpload = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        console.log(name, price);

        const url = 'http://localhost:5000/uploadPd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, price
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset();
            });
    }
    return (
        <div className='container'>
            <h2 className=' text-primary  text-center'>Upload Product</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleUpload}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input type="text" className="form-control" name='price' id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadProduct;