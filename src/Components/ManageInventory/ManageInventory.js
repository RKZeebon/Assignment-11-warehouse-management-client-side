import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';
import Allproducts from './AllProducts/Allproducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts()

    return (
        <div className='w-5/6 mx-auto min-h-[850px]'>
            <div className='mt-8 text-center text-3xl'>
                <Link to='/add-item' className='font-bold font-poppins bg-blue-400 py-2 px-5 rounded-lg hover:bg-[royalblue] hover:text-white'>+ Add New Item</Link>
            </div>
            <div className='md:grid md:grid-cols-2 gap-5 my-8'>
                {
                    products.map(p => <Allproducts
                        key={p._id}
                        product={p}
                    ></Allproducts>)
                }
            </div>
            <div className='my-12 text-center text-3xl'>
                <Link to='/add-item' className='font-bold font-poppins bg-blue-400 py-2 px-5 rounded-lg hover:bg-[royalblue] hover:text-white'>+ Add New Item</Link>
            </div>
        </div>
    );
};



export default ManageInventory;