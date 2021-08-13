import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import './home.css'
import Background from './homePics/naruto.png';
import Titan from './homePics/attack_on_titan.png';
import OnePiece from './homePics/one_piece.jpg';
import DragonBall from './homePics/dragon_ball.png';

const Home = () => {
    const [recipes, setRecipes] = useState({meals:[]});
    const [index, setIndex] = useState(0);
    const [currentUser, setCurrentUser] = useState([])


    useEffect(() => {
        const lastIndex = 9
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000)
        return () => clearInterval(slider)
    }, [index])

    const sectionStyle = {
        width: "100%",
        height: "100%",
        "background-size": "100% auto",
        ul: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Background})`
    };

    return (
        <>
            <div className="container-fluid" style={sectionStyle}>
                <section className="section">
                    <div className="title">
                        {
                            currentUser && <h2>
                                <span>/</span> Welcome {currentUser.username}! Here are your favorite anime!
                            </h2>
                        }
                        {
                            !currentUser&& <h2>
                                <span>/</span> Welcome! Want to try something new?
                            </h2>
                        }

                    </div>
                    <div className="section-center">
                        <article className="activeSlide">
                        <img src={Titan} alt="Attack on Titan" className='recipe-img'/>
                        </article>
                        <button className="prev" onClick={() => setIndex(index - 1)}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <button className="next" onClick={() => setIndex(index + 1)}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>

                    <div className="title">
                        {
                            currentUser && <h2>
                                <span>/</span> Here are anime you might like!
                            </h2>
                        }
                        {
                            !currentUser&& <h2>
                                <span>/</span> Welcome! Want to try something new?
                            </h2>
                        }

                    </div>
                    <div className="section-center">
                        <article className="activeSlide">
                            <img src={OnePiece} alt="One Piece" className='recipe-img'/>
                        </article>
                        <button className="prev" onClick={() => setIndex(index - 1)}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <button className="next" onClick={() => setIndex(index + 1)}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>

                    <div className="title">
                        {
                            currentUser && <h2>
                                <span>/</span> Here are anime you recently favorited!
                            </h2>
                        }
                        {
                            !currentUser&& <h2>
                                <span>/</span> Welcome! Want to try something new?
                            </h2>
                        }

                    </div>
                    <div className="section-center">
                        <article className="activeSlide">
                            <img src={DragonBall} alt="Dragon Ball" className='recipe-img'/>
                        </article>
                        <button className="prev" onClick={() => setIndex(index - 1)}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </button>
                        <button className="next" onClick={() => setIndex(index + 1)}>
                            <i className="fas fa-chevron-circle-right"></i>
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home