import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
        <Navbar />
    <div class="small-container-2">
        <div class="row row-2">
            <h1>All Products</h1>
            <select>
                <option>Default Sorting</option>
                <option>Sort by price</option>
                <option>Sort by popularity</option>
                <option>Sort by rating</option>
                <option>Sort by sale</option>
            </select>
        </div>
        <div class="row">
            <div class="col-5">
                <Link to="/ProductInfo"><img src="../img/Xiao-Shirt.png" class="items" alt="XiaoShirt"/></Link>
                <h2>Adepti Xiao Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p><strong> $19.99 </strong></p>
            </div>
            <div class="col-5">
                <img src="../img/VentiShirt.png" class="items" alt="VentiShirt"/>
                <h2>Venti T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $19.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/KazuhaShirt.png" class="items" alt="KazuhaShirt"/>
                <h2>Kazuha T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $19.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/EiShirt.png" class="items" alt="EiShirt"/>
                <h2>Ei T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $19.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/ZhongliPlush.jpeg" class="items" alt="ZhongliPlush"/>
                <h2>Zhongli Dragon Form Plushie </h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $29.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/PaimonPlush.jpeg" class="items" alt="PaimonPlush"/>
                <h2>Paimon Plushie</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $24.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/GenshinWallscroll.jpeg" class="items" alt="GenshinWallscroll"/>
                <h2>Genshin Wall Scroll</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $14.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/Genshinstickers.jpeg" class="items" alt="Genshinstickers"/>
                <h2>Genshin Impact 100 Stickers</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $9.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/MonaFigure.jpeg" class="items" alt="MonaFigure"/>
                <h2>Mona Figure</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $259.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/GanyuFigure2.jpeg" class="items" alt="GanyuFigure"/>
                <h2>Ganyu Figure</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $199.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/GenshinKFC.jpeg" class="items" alt="GenshinKFC"/>
                <h2>Diluc & Noelle KFC Collab Set</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $299.99 </p>
            </div>
            <div class="col-5">
                <img src="../img/KeqingFigure.jpeg" class="items" alt="KeqingFigure"/>
                <h2>Keqing Figure</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $189.99 </p>
            </div>
        </div>
        <div class="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Products;