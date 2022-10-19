import './About_project.css'
import Tata from '../../../assets/90821673_4139751109468934_8677620240588210176_n (1).jpg'
import Avatar from '../../../assets/avatars/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image16.jpg'
const depoimentos = [
    {
        avatar: 'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/',
        name: 'Fulano de Tall',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image16.jpg',
        name: 'Temotio Luis Bernardo',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/51f760a0-81f5-11ec-a7ee-f09942e600f9.jpeg',
        name: 'QUIZZ DE MOZ',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/avatardesign-wip.jpg',
        name: 'Jane la vida',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/Avatars-Store_1920x1080.webp',
        name: 'Lucifer Morninstar',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/ea7a3c32163929.567197ac70bda.png',
        name: 'Dr Maria de Santos',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/facebook-avatar.jpg',
        name: 'Crisman de jonh',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
    {
        avatar: '../../../assets/avatars/download.png',
        name: 'Abdul Pedrinho de Moz',
        description: `
        English texts for beginners to practice reading and comprehension online and for free.
        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
        The texts below are designed to
        `
    },
]
const Depoimentos = ({ avatar, name, description }) => {
    return (
        <>
            <div data-aos="zoom-in-right" className="depoimento">
                <div className="description-depoimetado">{description}</div>
                <div className="depoiment">
                    <img className='avatar-deoimento' src={Avatar} alt="" />
                    <div className="name">{name}</div>
                </div>
            </div>
        </>
    )
}
export const About_project = () => {
    return (
        <>
            <div className="about-junta-mais">
                <header className="junta-mais-header">
                    <h1 className="junta-mais-h1">
                        <strong className="Junta-mais-ong">
                            ONG
                        </strong>
                        <strong className="letra">
                            J
                        </strong>
                        unta
                        <strong className="letra">
                            M
                        </strong>
                        ais
                    </h1>
                    <p className="junta-mais-description">
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                    </p>
                </header>
                <div className="data-description">
                    <img className='imag-avatar' src={Tata} alt="avatar do publicador" />
                    <p className='description'>Publicado no dia: 10 de agosto de 2018</p>

                </div>
            </div>
            <div className="what-junta-mais">
                <h2 className='what-h2'>Missões e trabalhos</h2>
                <div data-aos="zoom-in-right" className="what-descritpion">
                    <h3 className='what-h3'>Missões</h3>
                    <div className='discription'>
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="what-descritpion">
                    <h3 className='what-h3'>Trabalhos</h3>
                    <div className='discription'>
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        English texts for beginners to practice reading and comprehension online and for free.
                        Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                        The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                    </div>
                </div>

                <h2 className='what-h2-segundo'>
                    Sonhos e objetivos que a Junta Mais espera alcançar.
                </h2>
                <div className="what-cards">
                    <div data-aos="zoom-in-right" className="card">
                        <h3 className='what-h3'>SONHOS:</h3>
                        <div className='discription-card'>
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        </div>
                    </div>
                    <div data-aos="zoom-in-right" className="card">
                        <h3 className='what-h3'>OBJTIVOS:</h3>
                        <div className='discription-card'>
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        </div>
                    </div>
                    <div data-aos="zoom-in-right" className="card">
                        <h3 className='what-h3'>METAS E INSPIRAÇÕES:</h3>
                        <div className='discription-card'>
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                            English texts for beginners to practice reading and comprehension online and for free.
                            Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.
                            The texts below are designed to help you develop while giving you an instant evaluation of your progress.
                        </div>
                    </div>
                </div>

                <h2 className='what-h2-segundo'>
                    COMENTÁRIOS SOBRE A ONG JUNTA MAIS
                </h2>
                <div className="depoimentos">
                    {depoimentos.map((item) => (
                        <Depoimentos key={item.title} {...item} />
                    ))}
                </div>
            </div>

        </>
    )
}