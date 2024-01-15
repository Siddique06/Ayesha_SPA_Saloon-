
'use client'
import React, { useEffect, useState } from 'react';

async function getData() {
    try {
        let data = await fetch('http://localhost:3000/api/project');
        data = await data.json();
        return data;
    } catch (error) {
        console.error("An error occurred", error);
        throw error; // Rethrow the error so it can be caught by the calling function
    }
}

function MyComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setComments(data.result); // Assuming result is an array
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(typeof comments)

    return (
        <div>
            <h1 className='font-body font-medium text-[#931796D4] text-center uppercase text-6xl mt-10b cm:text-3xl cm:font-black'>REVIEWS</h1>




            
                {/* Display your data here */}


                <div className='flex justify-between mt-10 lg:flex-col  cm:ml-0 md:ml-[100px] lg:ml-[300px]  '>
                    {comments.map((item) => (
                        <div key={item.id} className='w-[425px] h-[437px] rounded-[32px] border-[#931796D4] border-[5px] ml-5 cm:w-screen cm:ml-0 md:mt-3  '>
                            <h2 className='font-body text-[32px] font-medium uppercase text-center mt-8 cm:text-3xl cm:font-black'>{item.name}</h2>
                            <p className='capitalize font-Navbody text-[17px] w-[400px] mt-4 ml-4 cm:w-[90%] cm:ml-[2px] cm:text-lg'>
                                {item.feedback}
                            </p>

                        </div>
                    ))}
                </div>



            

        </div>
    );
}

export default MyComments;

