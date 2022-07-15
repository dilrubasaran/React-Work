import React from "react";

const Button = ( ) => {
    const Clicked = (e,deger  ) => {
        console.log(e,deger )    // değer yerine e yazarak clicked eventlerini görebilirsin
    }   
    function Clicked1( deger) {
        console.log("değer :" ,deger)
    }  
    return (
        <button onClick={( e) => {
            Clicked (e,"dilruba")
            Clicked1("dilruba")
        }  }>Buton tıkla </button>
    )
}
export default Button 