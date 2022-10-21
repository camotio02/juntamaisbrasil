import './site_two.css'
import Menino1 from '../../../assets/photo-choldren/criancas.jpg'
export const Site_two = () => {
    return (
        <>
            <div className='site-two-cards'>
                <div data-aos="zoom-in-right" className="site-card">
                    <div className='card-title'>Ação das crianças</div>
                    <p className='card-description'>
                        Textos em inglês para iniciantes praticarem leitura e compreensão online e de graça. Praticar sua compreensão do inglês escrito melhorará seu vocabulário e
                    </p>
                    <p className='card-childrens-description'>
                        <img className='card-childrens-image' src={Menino1} alt="" />
                    </p>
                    <div className="button">
                        Visitar a página
                    </div>
                </div>

                <div data-aos="zoom-in-right" className="site-card">
                    <div className='card-title'>Adentimenros Adonto</div>
                    <p className='card-description'>
                        Textos em inglês para iniciantes praticarem leitura e compreensão online e de graça. Praticar sua compreensão do inglês escrito melhorará seu vocabulário e
                    </p>
                    <p className='card-childrens-description'>
                        <img className='card-childrens-image' src={''} alt="" />
                    </p>
                    <div className="button">
                        Visitar a página
                    </div>
                </div>
            </div>
        </>
    )
}