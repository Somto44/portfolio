import Nav from "./Nav";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

function Contact() {
  return (
  <>
     <h1 className="text-white font-bold mt-[30px] text-3xl">
      Let's get <span className="text-orange-600">in Touch</span>
     </h1>
     <div id= "contact" className="mt-[30px]">
      <form action="">
        <input type="text" placeholder="Firstname" className="bg-zinc-800 border-solid border-white border-r-2 border-l-2 border-b-2 border-t-2 rounded p-4 block ml-[446px] w-[330px]"/>
        <input type="text" placeholder="Lastname" className="bg-zinc-800 border-solid border-white border-r-2 border-l-2 border-b-2 border-t-2 rounded p-4 mt-[20px] block ml-[446px] w-[330px]"/>
        <input type="email" placeholder="Email" className="bg-zinc-800 border-solid border-white border-r-2 border-l-2 border-b-2 border-t-2 rounded p-4 mt-[20px] w-[330px] block ml-[446px]"/>
        <textarea placeholder="Message" className="bg-zinc-800 border-solid border-white border-r-2 border-l-2 border-b-2 border-t-2 rounded p-4 mt-[20px] w-[330px] h-[100px] block ml-[446px]"/>
        <button id="send" className="text-white font-sans bg-orange-600 p-[10px] w-[100px] mt-[10px]">Send</button>
      </form>
      <div id="links" className ="mt-[20px]">
        <a href="https://github.com/Somto44" className="text-white text-6xl block">Github <i class="fa-brands fa-github"></i></a>
        <a href ="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnLrSqhndHswbCrDBTfVSJSgWZchRCBfWFnGnvTKpDNJHfNdznNlQgzWjBqZDTMZst" className ="text-orange-600 text-6xl">Email <i class="fa-regular fa-envelope"></i></a>
      </div>
     </div>

  </>
  )
}

export default Contact;