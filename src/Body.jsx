/* eslint-disable no-undef */

import RestautantCard from "./RestautantCard";
import './index.css'
import mockDataList from "./mockData";
const Body=()=>{
    return(
        <div>
        <div className="search_Name">
            <input type="search"/>
            <input type="submit"></input>
        </div>
        <div className="res-container">
           {
            mockDataList.map(info => <RestautantCard key={info.id} resName = {info}/>)
           }
            
        </div>
        </div>

    )
}
export default Body;