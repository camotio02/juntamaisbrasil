import './logos.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Aos from 'aos';
import { useEffect } from 'react';
import { useState } from 'react';
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
            <a data-aos="flip-left" className='links' href="">
                {name_link}
            </a>
        </>
    )
}
const Links = () => {
    return <>{
        links.map((item) => (
            <Link key={item.neme} {...item} />
        ))
    }
        <a data-aos="flip-left" className='links ring-bell' href="">
            Ring the bell
        </a></>
}
export const Logos = () => {
    const [show, setShow] = useState(false)
    const [a, setA] = useState(false)


    const click = () => {
        setA(false)
        setShow(!show)
    }
    const closed_menu = () => {
        setShow(false)
    }
    const menu = () => {
        setShow(false)
        setA(!a)
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <>
            {a &&
                <div className='menu-celular'>
                    <Links />
                </div>
            }
            <div className='container-logos'>
                <div className="logos" data-aos="fade-down">
                    <div className='logo-name-project'>
                        <strong className='strong-one'>J</strong>
                        UNTA
                        <strong className='strong-two'>M</strong>
                        AIS
                    </div>

                    <div className='logos-links'>
                        <Links />
                    </div>


                    <div className='logos-icons-items'>
                        <div className='icons-of-logos one'>
                            <SearchIcon onClick={closed_menu} />
                        </div>

                        <div className='icons-of-logos two' onClick={click}>
                            <ComputerIcon />
                            {show ?
                                <div className="icons-of">
                                    <div onClick={closed_menu} className='fundo-default'>
                                        <Brightness2Icon className='icon-one' fontSize='small' /> night
                                    </div>
                                    <div onClick={closed_menu} className='fundo-default'>
                                        <Brightness7Icon className='icon-two' fontSize='small' /> afternoon
                                    </div>
                                    <div onClick={closed_menu} className='fundo-default'>
                                        <ComputerIcon className='icon-three' fontSize='small' /> Default
                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>
                        <div className='icons-of-logos menu'>
                            <MenuIcon onClick={menu} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}