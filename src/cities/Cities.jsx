import React from 'react'
import City from '../city/City';
import './Cities.css'
export default function Cities() {
  const cities =[
    {id:1 , title:"Jenin City" , desc:"Jenin, a vibrant Palestinian city, thrives with culture, history, and resilience." , src:require("../img/jenin.jpg"), alt:"Jenin City"},
    {id:2 , title:"Nablus City" , desc:"Nablus, a historic Palestinian city, boasts ancient architecture, bustling markets, and rich heritage." , src:require("../img/nablus.jpeg"), alt:"Nablus City"},
    {id:3 , title:"Tulkarm City" , desc:"Tulkarm, a Palestinian city, is known for its agricultural traditions, close-knit community, and cultural significance." , src:require("../img/tulkarm.jpg"), alt:"Tulkarm City"},
    {id:4 , title:"Ramallah City" , desc:"Ramallah, a vibrant Palestinian city, serves as the administrative and cultural center, offering modernity, art, and political significance." , src:require("../img/ramallah.jpg"), alt:"Ramallah City"},
    {id:5 , title:"Jerusalem City" , desc:"Jerusalem, a city of profound religious importance, unites three major faiths in its ancient walls, offering a diverse and storied history." , src:require("../img/jerusalem.jpg"), alt:"Jerusalem City"},
    {id:5 , title:"Gaza City" , desc:"Gaza, a Palestinian enclave along the Mediterranean, faces ongoing challenges, embodying resilience, conflict, and human determination." , src:require("../img/gaza.jpg"), alt:"Gaza City"},

  ]
  return (
    <>
    <div className="overflow-hidden">
       <div className="row">
          {cities.map((city)=>{
            
            return <City {...city} key={city.id}/>
            
            })}
       </div>
    </div>
    
    </>
  )
}
