import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu';

export default function Home(){
    return(
      <div className="container-home">
        
        <div className="logo">
            <img src="/logo.png" alt="logo"/>
            <h1>ShortLinks</h1>
            <span>Make your links shorter! 👇</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#fff"/>
                <input
                placeholder='Paste your link here'
                />
            </div>

            <button>Shorten Link</button>
        </div>

        <Menu/>

      </div>
    )
  }