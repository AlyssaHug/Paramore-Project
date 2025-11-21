import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='header'>
                <h1>Meet The Band</h1>
                <p>The faces behind the music</p>
            </div>
            <div className='band'>
                <img
                    className='band-taylor'
                    src='/Band/Home/Taylor.png'
                    alt='Taylor York'
                />
                <img
                    className='band-hayley'
                    src='/Band/Home/Hayley.png'
                    alt='Hayley Williams'
                />
                <img
                    className='band-zac'
                    src='/Band/Home/Zac.png'
                    alt='Zac Farro'
                />
                <p className='spacer'>Paramore</p>
            </div>
        </>
    );
}

export default App;
