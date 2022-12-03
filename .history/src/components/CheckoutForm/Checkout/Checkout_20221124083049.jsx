import React from 'react'

export const Checkout = () => {
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  w-[500px] h-[200px] shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px]'>Checkout</h1>
                <div className="progress">
                    <div className="shipping"></div>
                </div>
            </div>
        </main>
    )
}
