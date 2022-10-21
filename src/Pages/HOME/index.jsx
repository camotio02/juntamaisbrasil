import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "./index.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
                <div className="secao">
                    <div className="secao-um">
                        <div data-aos="zoom-in" className="mini-container">
                            <h1 className="container-title">
                                ONG Junta Mais Brasil, uma das Organizações com ações voluntárias de portas abertas.
                            </h1>
                            <div className="container-items">
                                <div data-aos="zoom-in" className="items-a">
                                    <h2>Indigue seus amigos para participarem desta ONG</h2>
                                    <h4>Para fazer parte desta família que está sempre ao olhar do bem para o proxímo</h4>
                                </div>
                                <div className="items-b">
                                    <div  data-aos="flip-left" className="items-b-minicadastro">
                                        <h5 className="boas-vindas">Faz a diferença, experimente ação voluntárias so por algumas horas.</h5>
                                        <input className="input" type="number" placeholder="Digite seu  número" />
                                        <div className="submit">Continuar<ArrowForwardIcon /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secaodois">ilkhh</div>
                <div className="secao-tres">
                    
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