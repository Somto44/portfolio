
import Nav from "./Nav";
import myImage from "./profliepic.jpg"


function Home() {
   return (
    <>
    <div className="about-me mt-24 mr-96 animate-fadeIne">
      <p className="text-white font-bold text-wrap">Hi, my name is <span className="text-orange-600">Somto Nwanze</span> I'm a <span className="text-orange-600">software developer</span> based in Long Beach, Califonia 
    <span> I have exprience in various <span className="text-orange-600">programming languages and frameworks</span>, if you like what you see, you can always contact me down below</span>
      </p>
      <img className="w-48 h-48 border-solid border-white border-r-4 border-l-4 border-t-4 border-b-4 rounded-full ml-[900px] -mt-[120px]"  src= {myImage} alt="" />
    </div>
    
    </>
   )
}

export default Home