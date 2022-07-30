import A from "../MyPhoto/foto/A.jpg";
import A1 from "../MyPhoto/foto/A1.jpg";
import A3 from "../MyPhoto/foto/A3.jpg";
import A4 from "../MyPhoto/foto/A4.jpg";
import A5 from "../MyPhoto/foto/A5.jpg";
import A6 from "../MyPhoto/foto/A6.jpg";
import A7 from "../MyPhoto/foto/A7.jpg";
import A8 from "../MyPhoto/foto/A8.jpg";
import A9 from "../MyPhoto/foto/A9.jpg";
import A10 from "../MyPhoto/foto/A10.jpg";
import A11 from "../MyPhoto/foto/A11.jpg";
import A12 from "../MyPhoto/foto/A12.jpg";
import "./MyPhoto.css";
import { useState, useEffect } from "react";

const localFoto = [
  { id: 1, name: A },
  { id: 2, name: A1 },
  { id: 3, name: A3 },
  { id: 4, name: A4 },
  { id: 5, name: A5 },
  { id: 6, name: A6 },
  { id: 7, name: A7 },
  { id: 8, name: A8 },
  { id: 9, name: A9 },
  { id: 10, name: A10 },
  { id: 11, name: A11 },
  { id: 12, name: A12 },
];


const MyPhoto = () => {
    const [timeArray, setTimeArray] = useState(1)
    const fotoOnWindow = () => {


    }
    useEffect(() => {
        const second = setInterval(() => {
            setTimeArray(timeArray+1);
            if ((timeArray+1)===localFoto.length){
                setTimeArray(1)
            }
        }, 10000);
        
        // clearing interval
        return () => clearInterval(second);
      });
  return (
    <div>
      <img src={localFoto[timeArray].name} className="foto" />
    </div>
  );
};
export default MyPhoto;
