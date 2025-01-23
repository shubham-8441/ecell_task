import React from 'react'

export const Home = () => {


let bodystyle = {
    
      background: "url('https://media-hosting.imagekit.io//0ad087dbb14b4676/Squid%20Game.png?Expires=1832215403&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fzmhmadXs1hn0ja3RG9JbiEX59yYa4elvy7N2dcBF7f16WYdeP4qPCnWXD8prkKInSz4dyTdO~be33al04thmmFgnHXrM7210ei1xP1L3ZisnGRSRBG60u0V9rJMp70~mZNI0j1I4beRg-~lLEUEzexOto9nZNf4rMJt2qy7IS7oOzWIzma~4cvkjR43TrSuDwwIpEhk8ZAR8ddieHCmidGfWC2ThLDUVu6eJl61mZA66ygK9puF4iH885yecsRUbk6vYyIkEeHzGhlcBYOg95cXpbiZjPhSXJtoh49LShTBRfBQN5Nb7827tF9rluA5FQszRKVZ3i68SGW9zzcazg__') no-repeat center center/cover",
      height: "100vh"
    
}

let divstyle = {
    background: "rgba(0, 0, 0, 0.7)", /* Semi-transparent black box */
      padding: "20px 30px",
        width: "90%",
      "box-shadow": "0 4px 15px rgba(0, 0, 0, 0.5)"
}

let picstyle = {
    
      "border-radius": "60%",
      border: "3px solid #ff4655" ,/* Vibrant Squid Game red */
      "margin-bottom": "10px"

}
let btnstyle ={
    
      
      "background-color": "#ff4655", /* Squid Game red */
      border: "2px solid #ff4655",
      transition: "0.3s",
      "box-shadow": "0 3px 10px rgba(255, 70, 85, 0.5)",
}



  return (
    <div className="text-white flex justify-center items-center text-center font-sans" style={bodystyle}>
        <div className="rounded-2xl max-w-96 " >
    
    <img src="https://media-hosting.imagekit.io//0dc39d7d43a347af/User%20Photo.jpg?Expires=1832215774&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ImsFrQP6baxOwWcAW7Jgc1OLnh7GRXhsM7gNxcE4EX~jTf8eqqTMkl9anl~JYgs7iPF3b2IQT5ucrQT1NRMBxUd5OBk7cbzc-cqtNcr6hD4tCor4Th8oarXKxCybHod71~0HYW0VMznnYRe45BuOQ~pD06C7TRVNJ0xxmnaw5bMOuESmR5ZClH9LNrlZ0Jq1LLnzCGXWjpEaq9le19X5Sk4JPwfzCLoUJBrgFRDXFA06r7ZYSe6be88xzzzdX~fBWoxwPFIQSOovzBP5EUvk5cxdtf5BzIvgH8m6KCREAwnHTcMESJy2ab6-3xwnMtlPdxyZTitCKgfFUJrYRRcd2g__ "  style={picstyle} alt="" className='h-36 w-32'/>
    
    
    <h1  className='font-extrabold my-3'>Shubham Saini</h1>
    <p className='font-bold my-2'>Registration Number: 20236213</p>
    
    
    <a  href="https://www.instagram.com/_shubham_8441?igsh=MXgwMzI5OTVrY3ZkNw==" target="_blank" className="inline-block font-extrabold py-3 px-6 text-white rounded-3xl font-bold hover:bg-transparent " style={btnstyle}>View My IG Profile </a>
  </div>
    </div>
  )
}
