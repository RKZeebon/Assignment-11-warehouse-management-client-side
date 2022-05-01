import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import noImg from '../../Assets/noimage-found.png'

const Details = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { name, img, description, price, quantity, supplier, _id } = product;
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://guarded-gorge-33419.herokuapp.com/product/${id}`
            const response = await fetch(url);
            const Data = await response.json();
            setProduct(Data)
        };

        fetchData();
    });


    const HandleDelivered = () => {
        setIsUpdate(!isUpdate)
        if (parseInt(quantity) > 0) {
            setNewQuantity(parseInt(quantity) - 1)
            toast('You delevered one item.')
        }

    }
    const handleRestock = event => {
        event.preventDefault()
        const reStockQuantity = event.target.restock.value;

        if (parseInt(reStockQuantity) > 0) {
            setNewQuantity(parseInt(quantity) + parseInt(reStockQuantity))
            event.target.reset();
            toast('Restock sucessfull!')
        }
        setIsUpdate(!isUpdate)

    }
    useEffect(() => {

        const url = `https://guarded-gorge-33419.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                quantity: newQuantity,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => json);

    }, [isUpdate])

    if (product.length <= 0) {
        return <p className='text-2xl text-center font-Roboto font-semibold min-h-[750px]'>Please Wait...</p>
    }

    return (
        <div className='w-5/6 mx-auto mb-12 min-h-[850px]'>
            <div className='lg:w-4/6 lg:mx-auto my-12 border-2 border-black rounded-lg p-5'>
                <img className='mb-5' src={img || noImg} alt='' />
                <h1 className='text-3xl font-semibold font-Roboto mb-1'>Item: {name}</h1>
                <p className='text-lg mb-1 font-semibold'>ID: {_id}</p>
                <h3 className='text-xl font-semibold mb-1'>Price: ${price}</h3>
                <h4 className='flex text-lg font-semibold mb-1'>Quantity: {newQuantity || quantity} {quantity > 0 ? <p className='ml-2 bg-green-100 rounded px-2 text-green-600'> In Stock</p> : <p className='ml-2 bg-red-100 rounded px-2 text-red-600'>Out of Stock</p>} </h4>
                <p className='text-md mb-1'><span className='font-semibold'>Supplier:</span> {supplier}</p>
                <p className='text-md mb-1'><span className='font-semibold'>Description:</span> {description}</p>
                <div className='text-2xl text-right mt-8'><button onClick={HandleDelivered} className='font-semibold bg-blue-400 hover:bg-[royalblue] px-5 py-2 rounded-lg hover:text-white shadow-lg shadow-black'>Delivered</button></div>
            </div>
            <form onSubmit={handleRestock} className='text-center bg-blue-400 p-5 lg:w-4/6 lg:mx-auto rounded-lg '>
                <h1 className='mb-5 text-2xl font-poppins font-medium'>Restock this item</h1>
                <input title='Please enter a positive value' className='text-xl p-2 mr-5 border-2 border-black rounded-lg' type="number" name="restock" id="" placeholder='Quantity' />
                <input className='text-xl text-white bg-[royalblue] hover:bg-white hover:text-black py-2 px-4 rounded-lg font-medium font-poppins cursor-pointer' type="submit" value="Restock" />
            </form>
            <div className='mt-16 text-center text-3xl'>
                <Link to='/manage-inventory' className='font-bold font-poppins text-[royalblue] hover:underline'>Manage Inventory ⪼</Link>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Details;
