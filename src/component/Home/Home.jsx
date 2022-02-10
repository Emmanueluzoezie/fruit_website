import Header from "./Header";
import Footer from "./footer";
import Items from "./Items";
import main from "./image/main.png"
import banner from "./image/banner.png"
import product2 from "./image/product2.png"

const Home = () => {
  return (
    <div className="bg-yellow-50">
        <Header/>

        <div className=" max-w-300px h-screen bg-gradient-to-t from-red-50 to-green-300">
          <div  className="text-center md:mt-0 pt-32 font-bold text-4xl md:text-5xl ">
            <h1 className="text-green-500">Dahlia Fruit Villa</h1>
            <h2 className="mb-5 text-yellow-500 md:text-3xl text-2xl">Healthy Food Store</h2>
            <a href="" className="bg-gray-400 hover:bg-blue-400 py-3 px-5  text-black hover:text-white md:text-2xl text-xl rounded-full">Order now</a>
          </div>
          <img className=" object-cover  w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72  absolute bottom-0 right-1" src={product2} alt="" />
          <img className=" object-cover  w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72  absolute bottom-0 left-3" src={banner} alt="" />
          <img className=" object-cover  w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72  absolute bottom-16 sm:bottom-0 right-40 sm:left-64 md:left-96 " src={main} alt="" />
          <img className=" hidden md:flex object-cover  w-72 h-72  absolute bottom-0 right-80 " src={main} alt="" />
        </div>
        

        <Items />
        <Footer />
    </div>
  );
};

export default Home;
