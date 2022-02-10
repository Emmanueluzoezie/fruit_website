import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Footer = () => {
  return (
        <div className="bg-gray-100 sm:flex sm:flex-wrap justify-center">
             <div className='m-5 w-2/5 md:w-60'>
                <h3  className="font-bold">EXTRAS</h3>
                <a className="block" href="#">Brands</a>
                <a className="block" href="#">Gift Certificates</a>
                {/* <a href="#">Affiliate</a> */}
                <a className="block" href="#">Specials</a>
            </div>
            <div className='m-5 w-2/5 md:w-60'>
                <h3 className="font-bold">INFORMATION</h3>
                <a className="block" href="#">About Us</a>
                <a className="block" href="#">Privacy Policy</a>
                <a className="block" href="#">Terms & Conditions</a>
                <a className="block" href="#">Contact Us</a>
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
