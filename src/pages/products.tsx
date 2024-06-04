import ContactUs from "@/componets/atom/Emailjs";
import Footer from "@/componets/atom/Footer";
import Header from "@/componets/atom/Header";
import ProductCard from "@/componets/atom/ProductCard";
import React from "react";

 const ProductsPage = (()=>{
    return(
        <>
        <div className="">
        <Header/>
        <div className="">
        <ProductCard/>
        </div>
        <ContactUs></ContactUs>
        <Footer/>
        </div>  
        </>
    )
});

export default ProductsPage