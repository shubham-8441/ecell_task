import React from 'react'

export const Header = () => {
  return (
    <div>
        <div className=" bg-slate-100 w-full h-16">
            <ul className='flex flex-row-reverse py-3 '>
                <li>
                <a className="my-3 mx-9 hover:text-blue-600" href="https://www.linkedin.com/in/shubham-saini-2203472b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a>
                </li>
                <li>
                    <a   className="my-3 mx-6 hover:text-blue-600" href="/grid">Grid</a>
                </li>
                <li>
                    <a  className="my-3 mx-6 hover:text-blue-600" href="/">Home</a>
                </li>
            </ul>
        </div>
        </div>
  )
}
