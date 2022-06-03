import React from 'react'
import Header from './Header'

const View = () => {
    
    var Event=[
        {
          "name"      : "Amal",
          "date"    :"24/04/2014",
          "venue" :"Chengannur",
          "organiser" :"Hari", 
          "contactno" :"9876543210"
          
    
        },
    
        {
            "name"      : "Kiran",
            "date"    :"24/03/2014",
            "venue" :"pathanamthitta",
            "organiser" : "Sudhi",
            "contactno" :"9876543210",
            
      
          },
      
          {
            "name"      : "Midhun",
            "date"    :"23/03/2018",
            "venue" :"Ernakulam",
            "organiser" : "Vipin",
            "contactno" :"9876543210"
            
      
          },
      
      ]
  return (

    
    
      
          <div>
         <Header/>
               <div className="Container">
          <div className="row g-10">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="row g-3">
                  <table class="table table-primary">
        <thead>
          <tr>  
            <th scope="col">No</th>
      
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Venue</th>
            <th scope="col">Organiser</th>
            <th scope="col">Contact No</th>
      
          </tr>
      
        </thead>
        <tbody>
          {Event.map((value,key)=>{
            return <tr>
           <th scope="Row">1</th>  
           <td>{value.name}</td>
           <td>{value.date}</td>
           <td>{value.venue}</td>
           <td>{value.organiser}</td>
           <td>{value.contactno}</td>
      
            </tr>
          })}
        </tbody>
      </table>
                     
                     
                     
                    
                  </div>
              </div>
          </div>
      </div>
            
          </div>
  )
}

export default View