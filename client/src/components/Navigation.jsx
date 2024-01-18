import {React,useState} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';


export const Navigation = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav);
    }


  return (
    <section className=' border-b-2 border-slate-100 flex mt-0 h-20 bg-white w-screen justify-between items-center  py-4 px-6  mx-auto z-40'>
      <p className='font-urbanist text-2xl sm:text-3xl cursor-pointer z-40'><button></button><Link to={"/"}>FDA Designs</Link></p>

      <div className='font-comforta text-mostlyblack hidden lg:block'>
        <Link className='mr-10 pb-2 border-b-2 border-white hover:border-black transition-all duration-300' to={"/"}>Home</Link>
        <Link className='mr-10 pb-2 border-b-2 border-white hover:border-black transition-all duration-300'  to={"/about"}>About Us</Link>
        <Link className='mr-10 pb-2 border-b-2 border-white hover:border-black transition-all duration-300'  to={"/developments"}>Developments</Link>
        <Link className='mr-10 pb-2 border-b-2 border-white hover:border-black transition-all duration-300'  to={"/categories"}>Categories</Link>
      </div>

      <div className='h-12 w-12 rounded-full cursor-pointer bg-gold hidden lg:flex items-center justify-center active:scale-105 duration-300'>
        <Link to={"/contact"}><AiOutlineMail size={25} color={'white'}/></Link>
      </div>

      <div onClick={handleNav} className='block lg:hidden transition duration-500'>
            {!nav ? <AiOutlineMenu size={30}/> : <HiOutlineXMark size={30}/>}
      </div >

      <div className={nav ? 'fixed left-0 top-16 w-full h-full bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-16 h-full w-full bg-white z-40'}>
        <div className='grid mx-6 mt-32 font-regular font-comforta text-3xl'>
          <Link className='mr-10 pb-5' onClick={handleNav} to={"/"}>Home</Link>
          <Link className='mr-10 pb-5' onClick={handleNav} to={"/about"}>About Us</Link>
          <Link className='mr-10 pb-5' onClick={handleNav}  to={"/developments"}>Developments</Link>
          <Link className='mr-10 pb-5 ' onClick={handleNav} to={"/categories"}>Categories</Link>
          <Link className='mr-10 pb-5 ' onClick={handleNav} to={"/contact"}>Contact</Link>
        </div>
  </div>

</section>
      )
}
