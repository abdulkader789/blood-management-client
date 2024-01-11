import { Link } from 'react-router-dom';
import bloodicon from '../assets/bloodicon.webp'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='pt-5 blood-background'>
            <h2 className='font-extrabold text-4xl text-center text-white'>Donate blood give the gift of life</h2>
            <section className='flex justify-evenly py-5 mt-5'>
                <Link>
                    <div className=' bg-white py-5 px-16 rounded-md'>
                        <img src={bloodicon} className='h-16 w-16 m-auto' />
                        <h3 className='font-bold text-xl text-center text-black'>Blood<br />Add Here</h3>
                    </div>
                </Link>
                <Link>
                    <div className=' bg-white py-5 px-16 rounded-md'>
                        <img src={bloodicon} className='h-16 w-16 m-auto' />
                        <h3 className='font-bold text-xl text-center text-black'>Blood<br />Search Here</h3>
                    </div>
                </Link>
                <Link>
                    <div className=' bg-white py-5 px-16 rounded-md'>
                        <img src={bloodicon} className='h-16 w-16 m-auto' />
                        <h3 className='font-bold text-xl text-center text-black'>Blood<br />Request Here</h3>
                    </div>
                </Link>
            </section>
        </div>
    );
};

export default Home;