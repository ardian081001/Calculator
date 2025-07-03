import { useState } from "react";
import "./style.css";

export default function App() {
const [value, setValue] = useState("");
const hitung = e => setValue(value + e.target.value);
const hapus = ()=> setValue(value.slice(0,-1));
const bersihkan = () =>setValue('');
const samaDengan = ()=> setValue(eval(value));
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={bersihkan}/>
            <input type="button" value="DEL" onClick={hapus} />
            <input type="button" value="." onClick={hitung} />
            <input type="button" value="/" onClick={hitung} />
          </div>
          <div>
            <input type="button" value="7" onClick={hitung}/>
            <input type="button" value="8" onClick={hitung} />
            <input type="button" value="9" onClick={hitung}/>
            <input type="button" value="*" onClick={hitung}/>
          </div>
          <div>
            <input type="button" value="4" onClick={hitung}/>
            <input type="button" value="5" onClick={hitung} />
            <input type="button" value="6" onClick={hitung}/>
            <input type="button" value="+" onClick={hitung}/>
          </div>
          <div>
            <input type="button" value="1" onClick={hitung}/>
            <input type="button" value="2" onClick={hitung}/>
            <input type="button" value="3"onClick={hitung} />
            <input type="button" value="-" onClick={hitung}/>
          </div>
          <div>
            <input type="button" value="0" onClick={hitung}/>
            <input type="button" value="00" onClick={hitung}/>
            <input type="button" value="=" className="equals" onClick={samaDengan} />
          </div>
        </form>
      </div>
    </div>
  );
}
