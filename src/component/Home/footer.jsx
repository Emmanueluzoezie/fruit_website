import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Footer = () => {
  return (
        <div className="bg-gray-100 sm:flex sm:flex-wrap justify-center">
             <div className='m-5 w-2/5 md:w-60'>
                <h3  className="font-bold">EXTRAS</h3>
                <button className="block">Brands</button>
                <button className="block">Gift Certificates</button>
                {/* <a href="#">Affiliate</a> */}
                <button className="block">Specials</button>
                
            </div>
            <div className='m-5 w-2/5 md:w-60'>
                <h3 className="font-bold">INFORMATION</h3>
                <button className="block">About Us</button>
                <button className="block">Privacy Policy</button>
                <button className="block">Terms & Conditions</button>
                <button className="block">Contact Us</button>
            </div>
            <div className='m-5 sm:w-2/5 md:w-60'>
                <h3 className="font-bold">CONTACT US</h3>
                <div>
                    <LocationOnIcon/> Apo Resettlemwnt Abuja
                </div>
                <div>
                   <EmailIcon/> dahliafruit@gmail.com
                </div>
                <div>
                   <WhatsAppIcon/> +234 8066026820
                </div>
                <div>
                   <LocationCityIcon/> Abuja, Nigeria
                </div>
            </div>
        </div>
   )
};

export default Footer;
