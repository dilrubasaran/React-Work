import "./App.css"
// html için head içinde css linki vermek karşılığı
var benimAdim = "Dilruba"
let benimYasim = 20
const benimSoyadım = "Basaran"
var yas = 20


function App() {
 
  const [number, setNumber] = useState(20)
  const [name, setName ] = useState("dilruba")
  const [isActive, setIsActive] = useState(false)
  const [user, setUser] = useState({name: " " , lastname: " "})
  const [numberArray, setNumberArray] = useState([1,2,3,4,5])

  const changeNumber = ( ) => {
    const n = number  + (5*2+3) 
    setNumber(n)
  }
return (
  <div> 
    <a href="https://unsplash.com/">merhaba dünya </a>

    <img width= "200" src="https://media.istockphoto.com/photos/flyaway-sunset-disintegrating-storm-clouds-dispersing-at-sunset-picture-id1333863903" alt="sunset unsplash" />

    <button>buton</button>
    {/* class atamak için className  */}
    <p className="yellow">Lorem, ipsum dolor.</p>
    <h1 style={
      {color:"red",
       "margin-bottom":'5px', 
       // iki kelime olunca ya tırnak içinde olacak ya da ikinci kelime büyük olacak 
       backgroundColor: "black",
      }
    }>{benimAdim.toUpperCase()}</h1>
    <h2>{benimSoyadım}</h2>
    <h3>{benimYasim >20 ?"yaş 20 den büyük" : "yaş 20 den küçük "}</h3>
    <h4>{100+65+98+32}</h4>
    <h5>{Math.random()}</h5>
    <p>{new Date().toLocaleTimeString()}</p>


    
    <HelloWorld
      baslik1 = "Manzara 1" 
      petiketi = "Merhaba ben Manzara 1" buttonAdi = "Manzara 1" 
      resim="https://picsum.photos/id/14/200/267" 
      >
<button>kırmızı alan</button>
<img src="https://picsum.photos/id/17/200/267" alt="picsum 17" />

    </HelloWorld>


<button>kırmızı alan</button>
    <HelloWorld
      baslik1 = "Manzara 2"
      petiketi = "Merhaba ben Manzara 2" buttonAdi = "Manzara 2"  
      children = { <button>tıkla bana</button>  }
      resim = "https://picsum.photos/id/10/200/267"/>
      <img src="https://picsum.photos/id/15/200/267" alt="picsum görsel 15" /> 
      
    {/* <HelloWorld 
      buttonAdi = "Manzara3"  
      resim = "https://picsum.photos/id/11/200/267"/>
    <HelloWorld 
      buttonAdi = "Manzara4"  
      resim = "https://picsum.photos/id/12/200/267"/>
    <HelloWorld 
      buttonAdi = "Manzara5"  
      resim = "https://picsum.photos/id/13/200/267"/> */}

  <HelloWorld >
      aktif ={true}
      sayi = {20}
      petiketi = "P etiketi string "
      buttonAdi = "String button adi "
      resim = "https://picsum.photos/id/17/200/267" 
      <p>kır4mızı alana gelelcek</p>
  </HelloWorld>

  <h1>kisinin Yasi {number}</h1>
    <button onClick={changeNumber }>Buton</button>
    <h1>isim değeri {name}</h1>
    <input value ={name} onChange={(e) => {setName(e.target.value)  } } />

    <h1>{JSON.stringify(isActive)} </h1>
    <input type="checkbox" checked = {isActive} onChange={(e) => {setIsActive(e.target.checked)} } />

    <h1>{JSON.stringify(user) }</h1>
    <button onClick={() => {
      setUser({name: "Dilruba", lastname: "Basaran" })
    } }>User Bilgilerini ata</button>

    <h1>{JSON.stringify(numberArray)} </h1>
    <button onClick={( ) => {
      const arr = [...numberArray ]
      arr.push(10)
      setNumberArray(arr)
    } }>Eleman Ekle</button>      

</div>

)
}

export default App;