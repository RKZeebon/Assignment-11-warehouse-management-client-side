import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[850px] w-5/6 lg:w-1/2 mx-auto my-12'>
            <div className='mb-8 p-5 shadow-2xl shadow-blue-400 border-2 border-blue-800 rounded-2xl'>
                <h1 className='text-2xl mb-2'>Q-1. Difference between `javascript` and `nodejs` </h1>
                <p className='text-lg'><span className='font-bold'>Ans:</span> JavaScript is a programming language, but  nodeJS is a javascript runtime environment. JavaScript used for client side, but NodeJS used for backend or server side. Javascript can run in any browser engine as like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome), but V8 is the Javascript engine inside of node.js that parses and runs Javascript.</p>
            </div>

            <div className='mb-8 p-5 shadow-2xl shadow-blue-400 border-2 border-blue-800 rounded-2xl'>
                <h1 className='text-2xl mb-2'>Q-2. Differences between `sql` and `nosql` databases.</h1>
                <p className='text-lg'><span className='font-bold'>Ans:</span> SQL is a relational database system, but NoSQL is a non-relational database system. SQL databases have fixed schema, but NoSQL databases have dynamic schema. SQL databases are vertically scalable, but No-SQL databases are horizontally scalable.</p>
            </div>

            <div className='mb-8 p-5 shadow-2xl shadow-blue-400 border-2 border-blue-800 rounded-2xl'>
                <h1 className='text-2xl mb-2'>Q-3. What is the purpose of `jwt` and how does it work?</h1>
                <p className='text-lg'><span className='font-bold'>Ans:</span> Jwt stands for Json Web Token. It is being used to verify the users to give access for specific resources. It share information between client side and server side. Jwt encrypt the user data in a cryptographic algorithm in three parts Header, Payload and Signature. Header contains the type of token, Payload contains the claim, and the Signature ensure that the token has not been changed.</p>
            </div>
        </div>
    );
};

export default Blogs;