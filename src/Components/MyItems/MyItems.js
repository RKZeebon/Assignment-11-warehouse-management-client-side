import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const url = `https://guarded-gorge-33419.herokuapp.com/userProducts?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))

    }, [user])

    console.log(myItems);
    return (
        <div className='min-h-[850px] w-5/6 mx-auto my-12'>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    myItems.map(p => <MyItem
                        key={p._id}
                        product={p}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;