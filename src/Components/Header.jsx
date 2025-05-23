import moment from 'moment/moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <img src={logo}/>
            <p className='mt-5 text-[706F6F]'>Journalism Without Fear or Favour</p>
            <p className='mt-[10px] text-black'>{moment().format("dddd , MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;