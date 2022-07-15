import React from "react";
import  PropTypes  from 'prop-types';
import "./helloWorld.css"          
const HelloWorld = ({sayi, aktif, resim, buttonAdi, petiketi, children})  =>  
                 // hepsinin basına props yazmaktan kurtarıyor   
{
       
   return ( 
    <div className="helloWorldWrapper">
         <h1>sayi : {sayi }</h1>
         <h2>Aktif mi ? {aktif == true ? "Aktif" : "Pasif"} </h2>
        <img className="helloWorldImage" src={resim} />
        <button className="helloWorldButton" >{buttonAdi} </button>
        <p className="helloWorldP" >{petiketi} </p>
       <div className="helloWorldRedArea" >
        {children}
       </div>
        
    </div>
   )
}
//Component küçük harfle başlamaz büyük olması gerekir 
HelloWorld.PropType = {
    resim :PropTypes.string,
    buttonAdi :PropTypes.string.isRequired,
    aktif :PropTypes.bool,
    petiketi :PropTypes.string,
    children :PropTypes.node,
    sayi :PropTypes.number,

}
HelloWorld.defaultProps ={
   buttonAdi : "Varsayılan Button adi",
   petiketi : "varsayılan p etiketi metni ",
   sayi : "bir sayi giriniz",
   aktif : false
}
export default HelloWorld;