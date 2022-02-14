import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
       <div className='bg-gray-800 py-5 text-center'>
            <div className="flex-shrink-0  mb-3">
                <a href='/' className='text-2xl  md:text-2xl lg:text-3xl md:ml-2 text-yellow-900'>
                Dahlia<span className='text-xl ml-2  md:text-xl lg:text-2xl md:ml-2 text-yellow-500'>Fruit</span>
                </a>
            </div>
        <div className="bg-gray-600 w-5/6 sm:flex sm:flex-wrap justify-center m-auto py-4">
             <div className='m-5 md:w-60'>
                <h3  className="font-bold">LET US HELP YOU</h3>
                <button className="block hover:text-white hover:font-bold">Help Center</button>
                <button className="block hover:text-white hover:font-bold">How to shop on DahliaFruit?</button>
                <button className="block hover:text-white hover:font-bold">Delivery options and timelines</button>
                
            </div>
            <div className='m-5 md:w-60 text-center'>
                <h3 className="font-bold">ABOUT JUMIA</h3>
                <button className="block hover:text-white hover:font-bold">About Us</button>
                <button className="block hover:text-white hover:font-bold">Privacy Policy</button>
                <button className="block hover:text-white hover:font-bold">Terms & Conditions</button>
                <button className="block hover:text-white hover:font-bold">Contact Us</button>
            </div>
            <div className='m-5 md:w-60 text-center'>
                <h3 className="font-bold">CONTACT US</h3>
                <button className="block hover:text-white hover:font-bold"><LocationOnIcon/> Apo Resettlemwnt Abuja</button>
                <button className="block hover:text-white hover:font-bold"><EmailIcon/> dahliafruit@gmail.com</button>
                <button className="block hover:text-white hover:font-bold"><WhatsAppIcon/> +234 8066026820</button>
                <button className="block hover:text-white hover:font-bold"><LocationCityIcon/> Abuja, Nigeria</button>
            </div>
        </div>
        <div className="bg-gray-600 w-5/6 m-auto pb-4">
                <button><InstagramIcon /></button>
            </div>
       </div>
   )
};

export default Footer;

