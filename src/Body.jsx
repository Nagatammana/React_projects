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
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
           <RestautantCard resName={mockDataList}/>
            
        </div>
        </div>

    )
}
export default Body;