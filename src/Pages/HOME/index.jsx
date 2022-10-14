import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "./index.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import { Logos } from "../../Logos/logos";
export const Home = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        aos.init({ duration: 2000 })
    })
    const on_open = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="container">
                <div data-aos="zoom-in-left" className="side-one">

                </div>
                <div data-aos="zoom-in-left" className="side-two">

                </div>

                <div className="logos-items">
                    <Logos />
                </div>
                {show ?
                    <div className="logos-bottom">
                        <div className="open-open" onClick={on_open}>
                            <ArrowDropDownIcon fontSize="large" />
                        </div>
                    </div>
                    :
                    <div className="logos-bottom-closed">
                        <div className="open-closed" onClick={on_open}>
                            <ArrowDropUpIcon fontSize="large" />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}