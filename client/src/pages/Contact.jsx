import React, {useState,useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Navigation } from '../components/Navigation';
import { PrimaryCTA } from '../components/PrimaryCTA';
import { Footer } from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import Popup from '../components/Popup';



export const Contact = () => {

  const [sent, setSent] = useState();
  const [popup, setPopup] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vuoaaas', 'template_r6wo4lq', form.current, 'NfFkDjIbyImfdKlMX')
      .then((result) => {
          console.log(result.text);
          setSent(true);
          setPopup(true);
          setTimeout(() => {
            setPopup(false);
          }, 3000);
          e.target.reset();
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <AnimatedPage>
    <div className="bg-light h-[100%] w-full border-light border">
      <div className="fixed z-40 top-0"><Navigation/></div>



      <section className='mt-40 grid grid-cols-1 md:grid-cols-2 w-[90%] h-[700px] bg-white mx-auto max-h-[550px] max-w-[1000px]'>

        <div className="absolute xl:top-32 xl:left-56 top-32 left-12">          
          {popup && <Popup/>}
        </div>
        <form ref={form} onSubmit={sendEmail} className=' sm:h-[85%] sm:border-r-[1px] sm:border-gray mt-4 grid'>
          <p className='mt-10 ml-14 font-urbanist font-bold text-4xl mb-14'>Get in touch</p>
          <input type="text" name="user_name" id="name" className='mx-auto text-md placeholder:text-black w-[70%] ml-14 px-1 py-3 border-b-[1px] sm:w-60 xl:w-[60%]' placeholder='Name' required/>
         
          <input type="email" name="user_email" id="email" className=' mt-2 mb-10 text-md placeholder:text-black w-[70%] ml-14 px-1 py-3 border-b-[1px] sm:w-60 xl:w-[60%]' placeholder='Email' required/>

          <textarea type="text" name="message" id="message" className='p-1  placeholder:text-black text-md w-[70%] h-40 border-b-[1px] ml-14 sm:w-60 xl:w-[60%]' placeholder='Message' required />

          <div type='submit' value={"Send"} className="pt-10 mx-auto lg:ml-4 scale-75"><PrimaryCTA name={"Send"}/></div>


        </form>

        <div className="flex flex-col bg-white xl:grid xl:items-top xl:pt-10">
          <img src="images/logo2.jpg" alt="" className='h-32 w-32 mx-auto md:ml-14 sm:w-60 sm:h-60 xl:scale-125 xl:ml-24 mt-10 lg:ml-32' />
          <p className='xs:mx-auto mt-5 text-gray font-semibold text-2xl font-quicksand sm:text-xl md:mx-auto xl:text-4xl xl:font-bold xl:w-[200px] sm:text-center xl:ml-32 sm:ml-2 mb-24 xl:mt-10  '>Let's talk architecture</p>
        </div>
      </section>
      <div className="mt-96">
        <Footer/>
      </div>
    </div>
    </AnimatedPage>
  )
}
