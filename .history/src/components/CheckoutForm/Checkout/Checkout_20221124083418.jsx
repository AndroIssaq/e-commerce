import React from 'react'

export const Checkout = () => {
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  w-[500px] h-[200px] shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px]'>Checkout</h1>
                <div className="progress flex items-center justify-center">
                    <div className="shipping flex">
                        <div className='w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center'><p>1</p></div> 
                        <h1>Shipping Address</h1>
                    </div>
                    <div className="line">asdasd</div>
                    <div className="payment">asdsd</div>
                </div>
            </div>
        </main>
    )
}
