import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home';

function App() {
  const [state, setState] = useState(false);


 const s = [{
  "request":"S034749",
  "response":"Cardcode : null Is On Hold :null Is on terms : null CreditAvailable : null",
  "status":"Success",
  "refID":"6884d5d7-124b-4ab6-83b4-a61c95a16512",
  "errorMessage":null,
  "timestamp":"2014-03-13"
 },
 {
  "request":"S034749",
  "response":"Cardcode : null Is On Hold :null Is on terms : null CreditAvailable : null",
  "status":"failure",
  "refID":"e6c3fc16-15d3-461d-bab2-c3a6ea457a4a",
  "errorMessage":null,
  "timestamp":"2014-03-13"
 },
 {
  "request":"S034749",
  "response":"Cardcode : null Is On Hold :null Is on terms : null CreditAvailable : null",
  "status":"Success",
  "refID":"1c0c6735-f8ed-415a-a39b-1aca466ffdf0",
  "errorMessage":null,
  "timestamp":"2014-03-13"
 },
 {
  "request":"S034749",
  "response":"Cardcode : null Is On Hold :null Is on terms : null CreditAvailable : null",
  "status":"failure",
  "refID":"71a7d08a-a978-4b98-bb14-5f907f0f9135",
  "errorMessage":null,
  "timestamp":"2014-03-13"
}]


const data = [
  {
  "notes": "Game was played",
  "time": "2017-10-04T20:24:30+00:00",
  "sport": "hockey",
  "owner": "steve",
  "players": "10",
  "game_id": 1,
  },
  {
  "notes": "Game was played",
  "time": "2017-10-04T12:35:30+00:00",
  "sport": "lacrosse",
  "owner": "steve",
  "players": "6",
  "game_id": 2,
  },
  {
  "notes": "Game was played",
  "time": "2017-10-14T20:32:30+00:00",
  "sport": "hockey",
  "owner": "steve",
  "players": "4",
  "game_id": 3,
  },
  {
  "notes": "Game was played",
  "time": "2017-10-04T10:12:30+00:00",
  "sport": "hockey",
  "owner": "henry",
  "players": "10",
  "game_id": 4,
  },
  {
  "notes": "Game was played",
  "time": "2017-10-14T20:34:30+00:00",
  "sport": "soccer",
  "owner": "john",
  "players": "12",
  "game_id": 5,
  }
  ]
  let t = data; 
        let list = [];
        for (let i = 0; i < t.length; i++) {
            let dates = t[i].time.slice(0,10);

            if (!list[dates]) {
                list[dates] = [];
            }
            list[dates].push(t[i]);
        }



function group_by_month(data) {
  let  months = {}
  for (let  i=0; i<data.length; i++) {
     let  obj = data[i];
    console.log(obj)
     let date = new Date(obj.timestamp);
     let month = date.getMonth();
     console.log(month)
     if (months[month]) {
         months[month].push(obj);  // already have a list- append to it
     }
     else {
         months[month] = [obj]; // no list for this month yet - create a new one
     }
  }
  return months;
  
}


let result = group_by_month(s);
console.log("Items of January are ",result[{}] )
// console.log("Items of February are ", result[3])

 const Toggle = () =>{
     setState(!state)
     
 }

  const deta=[
    {
      id:1
    },
    {
      id:2
    },
  ]

  return (
      <>
      <div>
        <Navbar/>
       
       
      </div>
      </>

 
  );
}

export default App;
