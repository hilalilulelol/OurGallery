
import './App.css'
import Navigationbar from './components/Navigationbar'
import Intro from './components/Intro'
import Pertama from './components/Pertama'
import Kedua from './components/Kedua'
import Ketiga from './components/Ketiga'
import Keempat from './components/Keempat'
import Closing from './components/Closing'

import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
     <div className='myBG'>
      <Navigationbar/>
      <Intro/>
     </div>
      {/* end of intro */} 

      {/* 2019 section*/}
      <div className="Pertama">
        <Pertama/>
      </div>
      {/* end of 2019 section*/}

       {/* 2020 section*/}
       <div className="Kedua">
        <Kedua/>
      </div>
      {/* end of 2020 section*/}

      {/* 2021 section*/}
      <div className="Ketiga">
        <Ketiga/>
      </div>
      {/* end of 2021 section*/}

      {/* 2022 section*/}
      <div className="Keempat">
        <Keempat/>
      </div>
      {/* end of 2022 section*/}

      
      {/* closing section*/}
      <div className="closing">
        <Closing/>
      </div>
      {/* end of closing section*/}
    </div>
  )
}

export default App
