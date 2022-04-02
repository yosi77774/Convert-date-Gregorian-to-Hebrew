
import axios from 'axios'
import { useState} from 'react'
function ConvertDateHebrew() {

    const [DateGregorian,setDateGregorian] = useState("");
    const [DateHebrew, setDateHebrew] = useState("")

    const Convert = async ()=>
{
    const myArr = DateGregorian.split("-");
    let str = "converter?cfg=json&gy="+myArr[0]+"&gm="+myArr[1]+"&gd="+myArr[2]
    
    console.log(str+"****")
    let resp = await axios.get("https://www.hebcal.com/" + str)
    setDateHebrew(resp.data.hebrew)
    console.log(resp.data.hebrew)
}

    return (
        <div>
            <br /><br />
            <label >הכנס תאריך</label><br /><br />
            <input type="date" onChange={e => setDateGregorian(e.target.value)}  /><br/><br/>
            <button onClick={Convert}>Convert</button><br/><br/>
            {DateHebrew}
           
        </div>


    );
}

export default ConvertDateHebrew;