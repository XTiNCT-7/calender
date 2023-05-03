import { useState } from "react";
import Calendar from "react-calendar";

function Main() {
    const [date,setDate] = useState(new Date());
    return ( 
        <>
        <div>
            <h1>Calendar</h1>
            <Calendar onChange={setDate} value={date}/>
        </div>
        </>
     );
}

export default Main;