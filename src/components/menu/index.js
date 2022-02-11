import './menu.css';
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://www.linkedin.com/in/gabrielsoaresalves/'>
                <BsLinkedin color='#fff' size={24} />
            </a>
            <a className='social' href='https://github.com/http-gabrielalves'>
                <BsGithub color='#fff' size={24} />
            </a>
            <Link className='menu-item' to="/Links">
            LINKS
            </Link>
        
        </div>
    )
}