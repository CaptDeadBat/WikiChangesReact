import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
  
  
const App = () => {

  const [items, setItems] = useState([]);
  const [domainList, setDomList] =useState([]);


  fetch(
    "http://localhost:8091/domainchanges/")
                .then((res) => res.json())
                .then((json) => {
                  
                  setDomList(json.domainChangeList)
                 

                });
                              
     
console.log(domainList[5]);


domainList.sort((a,b) => (a.count > b.count) ? 1 : -1)


function getUnique(arr, index) {

  const unique = arr
       .map(e => e[index])

       
       .map((e, i, final) => final.indexOf(e) === i && i)
  
       
      .filter(e => arr[e]).map(e => arr[e]);      

   return unique;
}

let uniqFilteredList = getUnique(domainList,'domainName');


const mystyle={
  margin: "auto"
}
  
return (
  <div style={mystyle}>

  <h1 >Real time changes in each language of all wikipedia pages</h1>
 <BarChart width={1100} height={800} data={uniqFilteredList}>
    <Bar dataKey="count" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="domainName" />
    <YAxis />
  </BarChart> 

  </div>
);
}
  
export default App;