import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
    return (
        <>
        <Navbar />
        <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="../img/Xiao-Shirt.png" width="100%" class="product-info" alt="XiaoShirt"/>
            </div>
            <div class="col-2">
                <p>Products / T-Shirt</p>
                <h1>Yaksha Xiao T-Shirt</h1>
                <h4>$20.00</h4>
                <select>
                    <option>Select Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <input type="number" value="1"/>
                <a href="#" class="btn">Add To Cart</a>
                <h3>Product Details <i class="fa fa-indent"></i></h3>
                <p>Shirt Design of Adepti Xiao from the game Genshin Impact</p>
            </div>
        </div>
    </div>

    <div class="small-container2">
        <div class="row row-3">
            <h2>Related Products</h2>
            <p>View More</p>
        </div>
    </div>

    <div class="small-container2">
        <div class="row">
            <div class="col-4-1">
                <img src="../img/ZhongliShirt.png" class="items" alt=""/>
                <h2>Zhongli T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p> $19.99 </p>
            </div>
            <div class="col-4-1">
                <img src="../img/KazuhaShirt.png" class="items" alt=""/>
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
            <div class="col-4-1">
                <img src="../img/EiShirt.png" class="items" alt=""/>
                <h2>Ei T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $19.99 </p>
            </div>
            <div class="col-4-1">
                <img src="../img/VentiShirt.png" class="items" alt=""/>
                <h2>Venti T-Shirt</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p> $19.99 </p>
            </div>
        </div>
    </div>
        <Footer />
        </>
    )
}

export default ProductInfo;