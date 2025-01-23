import React from 'react'

export const Grid = () => {

    let mylogo = "https://media-hosting.imagekit.io//336e74d453a6407e/Ecell_logo.png?Expires=1832183561&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=b0KggvbycBjlxRQtsN-0bcHH-51-i0Teaps9wqLsQK9WO1s6hSIwXsjJlfLKfL4FmOoDYF8x85YHOxtGXkyidWwtsCGb5TiKcSQ-kan~XMaH3GOc6sF74IMnMRGZc1RC-osCcKDlAt8xUxGAGlx5-buRwMAxzMeSKefYa9dvDuoIYz-0vksT-TQaiG48RiiIcXDjSjSWnguHQ-UBZ5j1awTPjf69xJLMl3d-K10XZDt1KYozjwH0QLzN7R8eW14qPhi3CRUzz-mBVL021aL0RmTfcoEqW5i96elYtMTXUSLx6a42TBR0~1oSiXRGoQRLHcMC5fNPl8x~6nKrM30a4Q__"
  return (
    <div >

        <div className='flex justify-center items-center space-x-8 my-8 '>
        <div className='h-72 w-72 bg-black bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl '>

        </div>
        <div className='h-72 w-72 bg-black rounded-xl'>
        <img className='w-full h-full' src={mylogo} alt="img not found" srcset="" />
        </div>
        <div className='h-72 w-72 bg-slate-200 rounded-xl grid grid-cols-3 p-3'>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
                <div className="items rounded-md bg-blue-950 m-1 cursor-pointer hover:bg-red-900"></div>
        </div>
        </div>
           
        </div>
  )
}
