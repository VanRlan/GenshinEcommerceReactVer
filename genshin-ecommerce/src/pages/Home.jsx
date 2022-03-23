import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Navbar />
        <main className="hero">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h1>Experience the World of Genshin Impact!</h1>
                    <p>Join Millions of other Players!</p>
                    <Link to="/products" className="btn">EXPLORE NOW! &#8594;</Link>
                </div>
                <ul className="poster-download">
                    <li>
                        <a href="https://www.playstation.com/en-us/games/genshin-impact/" target="_blank"> <img
                                src="https://webstatic-sea.mihoyo.com/upload/event/2021/04/27/caf1de876b2d79715604463df4187b2f_4939885485338929477.png"
                                alt="key"/></a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/app/id1517783697" target="_blank"> <img
                                src="https://webstatic-sea.mihoyo.com/upload/event/2020/12/14/6ff53bc5d797e9efc2ac7b2b602c267a_8295237617862628623.png"
                                alt="key"/></a>
                    </li>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
                            target="_blank">
                            <img src="https://webstatic-sea.mihoyo.com/upload/event/2020/12/14/396b8eb0d0d2f27aadb476e0b62d0926_8878641138830187947.png"
                                alt="key"/></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="https://webstatic-sea.mihoyo.com/upload/event/2020/12/14/a27edf5aa048e9509f0850856ad3f403_396608336029707725.png"
                                alt="key"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </main>

    {/* <section class="slidez">
        <div class="slider">
            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />


                <div class="slide first">
                    <img src="./img/Albedo.jpeg" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/arataki-itto-introduction.jpeg" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/gorou-intro.jpeg" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/YUnjin.jpeg" alt=""/>
                </div>

                <div class="navigation-auto">
                    <div class="auto-btn-1"></div>
                    <div class="auto-btn-2"></div>
                    <div class="auto-btn-3"></div>
                    <div class="auto-btn-4"></div>
                </div>
            </div>

            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
    </section> */}

    <section className="news">
        <h2>NEW CHARACTERS!</h2>
        <div class="slider">
            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />


                <div class="slide first">
                    <img src="./img/Kamisato-Ayato.webp" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/Yae-Miko.jpeg" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/arataki-itto-introduction.jpeg" alt=""/>
                </div>
                <div class="slide">
                    <img src="./img/gorou-intro.jpeg" alt=""/>
                </div>

                <div class="navigation-auto">
                    <div class="auto-btn-1"></div>
                    <div class="auto-btn-2"></div>
                    <div class="auto-btn-3"></div>
                    <div class="auto-btn-4"></div>
                </div>
            </div>

            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
        {/* <div className="categories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src="./img/Albedo.jpeg" alt="Albedo"/>
                    </div>
                    <div className="col-3">
                        <img src="./img/arataki-itto-introduction.jpeg" alt="Itto"/>
                    </div>
                    <div className="col-3">
                        <img src="./img/gorou-intro.jpeg" alt="Gorou"/>
                    </div>
                    <div className="col-3">
                        <img src="./img/YUnjin.jpeg" alt="Yunjin"/>
                    </div>
                </div>
                <a href="./pages/product.html"><button className="btn2">
                        MORE...
                    </button>
                </a>
            </div>
        </div> */}
    </section>

    <article className="featured-products">
        <div className="small-container">
            <h3>TOP UP</h3>
            <div className="row">
                <div className="col-4">
                    <img src="https://image.api.playstation.com/vulcan/img/rnd/202104/2509/6THKBYMLzp8PtSd9ZOwAIqcr.png"
                        className="genesis" alt="60"/>
                    <p className="price">$0.99</p>
                </div>
                <div className="col-4">
                    <img src="./img/300_Genesis_Crystal.webp" className="genesis" alt="300"/>
                    <p className="price">$4.99</p>
                </div>
                <div className="col-4">
                    <img src="./img/980_Genesis_Crystal.webp" className="genesis" alt="980"/>
                    <p className="price">$14.99</p>
                </div>
                <div className="col-4">
                    <img src="./img/1980_Genesis_Crystal.webp" className="genesis" alt="1980"/>
                    <p className="price">$29.99</p>
                </div>
                <div className="col-4">
                    <img src="./img/3280_Genesis_Crystal.webp" className="genesis" alt="3280crystals"/>
                    <p className="price">$49.99</p>
                </div>
                <div className="col-4">
                    <img src="./img/6480_Genesis_Crystal.jpeg" className="genesis" alt="6480"/>
                    <p className="price">$99.99</p>
                </div>
            </div>
        </div>
    </article>
    <Footer />
    </>
    )
}

export default Home;