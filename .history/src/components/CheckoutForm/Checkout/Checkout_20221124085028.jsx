import React from 'react'

export const Checkout = () => {
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  sm:w-[600px] md:w-[600px] w-[] h-[200px] shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px] mt-[30px]'>Checkout</h1>
                <div className="progress flex items-center justify-center gap-[10px]">
                    <div className="shipping flex items-center gap-[10px]">
                        <div className='w-[25px] h-[25px] rounded-full bg-cyan-500 flex items-center justify-center'><p>1</p></div> 
                        <h1>Shipping Address</h1>
                    </div>
                    <div className="line w-[150px] h-[1px] bg-slate-500"></div>
                    <div className="payment flex items-center gap-[10px]">
                        <div className='w-[25px] h-[25px] rounded-full shadow-md flex items-center justify-center'><p>2</p></div> 
                            <h1>Payment Details</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
