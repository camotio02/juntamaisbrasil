import './logos.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
const links = [
    { name_link: 'Home' },
    { name_link: 'Servises' },
    { name_link: 'About Us' },
    { name_link: 'Contact Us' },
    { name_link: 'Tools' },
]
export const Link = ({ name_link }) => {
    return (
        <>
            <a className='links' href="">
                {name_link}
            </a>
        </>
    )
}
export const Logos = () => {
    return (
        <>
            <div className='container-logos'>
                <div className="logos">
                    <div className='logo-name-project'>
                        <strong className='strong-one'>J</strong>
                        UNTA
                        <strong className='strong-two'>M</strong>
                        AIS
                    </div>
                    <div className='logos-links'>
                        {
                            links.map((item) => (
                                <Link key={item.neme} {...item} />
                            ))
                        }
                    </div>
                    <div className='logos-icons-items'>
                        <div className='icons-of-logos'>
                            <SearchIcon />
                        </div>
                        <div className='icons-of-logos'>
                            <ComputerIcon />
                        </div>
                        <div className='icons-of-logos'>
                            <MenuIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}