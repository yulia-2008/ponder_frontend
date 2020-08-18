document.addEventListener("DOMContentLoaded", () => {
  const usStates = [
      { name: 'ALABAMA', abbreviation: 'AL'},
      { name: 'ALASKA', abbreviation: 'AK'},
      { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
      { name: 'ARIZONA', abbreviation: 'AZ'},
      { name: 'ARKANSAS', abbreviation: 'AR'},
      { name: 'CALIFORNIA', abbreviation: 'CA'},
      { name: 'COLORADO', abbreviation: 'CO'},
      { name: 'CONNECTICUT', abbreviation: 'CT'},
      { name: 'DELAWARE', abbreviation: 'DE'},
      { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
      { name: 'FLORIDA', abbreviation: 'FL'},
      { name: 'GEORGIA', abbreviation: 'GA'},
      { name: 'GUAM', abbreviation: 'GU'},
      { name: 'HAWAII', abbreviation: 'HI'},
      { name: 'IDAHO', abbreviation: 'ID'},
      { name: 'ILLINOIS', abbreviation: 'IL'},
      { name: 'INDIANA', abbreviation: 'IN'},
      { name: 'IOWA', abbreviation: 'IA'},
      { name: 'KANSAS', abbreviation: 'KS'},
      { name: 'KENTUCKY', abbreviation: 'KY'},
      { name: 'LOUISIANA', abbreviation: 'LA'},
      { name: 'MAINE', abbreviation: 'ME'},
      { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
      { name: 'MARYLAND', abbreviation: 'MD'},
      { name: 'MASSACHUSETTS', abbreviation: 'MA'},
      { name: 'MICHIGAN', abbreviation: 'MI'},
      { name: 'MINNESOTA', abbreviation: 'MN'},
      { name: 'MISSISSIPPI', abbreviation: 'MS'},
      { name: 'MISSOURI', abbreviation: 'MO'},
      { name: 'MONTANA', abbreviation: 'MT'},
      { name: 'NEBRASKA', abbreviation: 'NE'},
      { name: 'NEVADA', abbreviation: 'NV'},
      { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
      { name: 'NEW JERSEY', abbreviation: 'NJ'},
      { name: 'NEW MEXICO', abbreviation: 'NM'},
      { name: 'NEW YORK', abbreviation: 'NY'},
      { name: 'NORTH CAROLINA', abbreviation: 'NC'},
      { name: 'NORTH DAKOTA', abbreviation: 'ND'},
      { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
      { name: 'OHIO', abbreviation: 'OH'},
      { name: 'OKLAHOMA', abbreviation: 'OK'},
      { name: 'OREGON', abbreviation: 'OR'},
      { name: 'PALAU', abbreviation: 'PW'},
      { name: 'PENNSYLVANIA', abbreviation: 'PA'},
      { name: 'PUERTO RICO', abbreviation: 'PR'},
      { name: 'RHODE ISLAND', abbreviation: 'RI'},
      { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
      { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
      { name: 'TENNESSEE', abbreviation: 'TN'},
      { name: 'TEXAS', abbreviation: 'TX'},
      { name: 'UTAH', abbreviation: 'UT'},
      { name: 'VERMONT', abbreviation: 'VT'},
      { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
      { name: 'VIRGINIA', abbreviation: 'VA'},
      { name: 'WASHINGTON', abbreviation: 'WA'},
      { name: 'WEST VIRGINIA', abbreviation: 'WV'},
      { name: 'WISCONSIN', abbreviation: 'WI'},
      { name: 'WYOMING', abbreviation: 'WY' }
  ];

  for(var i = 0;i<usStates.length;i++){
      let option = document.createElement("option");
      option.text = usStates[i].name+' '+usStates[i].abbreviation+'';
      option.value = i;
      let select = document.getElementById("state");
      select.appendChild(option);
  }




  const stateSelector = document.querySelector('.form-city')
  const select = document.getElementById("state");



  function getParks() {

  stateSelector.addEventListener("submit", function(e){
    e.preventDefault()

    let selectedState = e.target[0].options[select.selectedIndex].text;
    let abbr = selectedState.split(" ")[1]


<<<<<<< HEAD
     fetch(  `https://developer.nps.gov/api/v1/parks?limit=10&stateCode=${abbr}&api_key=hneol4X1l2adxmk2NQ0lHI7iXRjgZhd0jCoo9Wjc` )
    .then(resp => resp.json())
    .then(obj => {console.log(obj)
    })
  })
}
  const renderHtml = (parkObj) => {
    parkObj.forEach(park => {
      const fullNameLi = document.createElement('li')
      const ulContainer = document.querySelector("body > form > div > ul")






    })
}







=======

     fetch(  `https://developer.nps.gov/api/v1/parks?limit=20&stateCode=${abbr}&api_key=hneol4X1l2adxmk2NQ0lHI7iXRjgZhd0jCoo9Wjc` )
    .then(resp => resp.json())
    .then(obj => { obj.data.forEach(park => {renderPark(park)})
>>>>>>> a5ad1a37b0cbe4fc6f5df435698402ed81a9346e

  })
      function renderPark(park) {
console.log(park.images[0].url)
        let body = document.querySelector('body')
        let parkContainer = document.createElement('div')
        parkContainer.className="park-container"
        parkContainer.innerHTML =` <h1> ${park.fullName}</h1>
                                   <img src=${park.images[0].url}/>
                                   <p>Park Description:</p>
                                   <p>${park.description}</p><br>
                                   <p>Address: ${park.addresses[0].city}, ${park.addresses[0].postalCode}</p>
                                   <p>Contacts: ${park.contacts.phoneNumbers[0].phoneNumber}</p>
                                   <p>Operation hours:  ${park.operatingHours[0].standardHours.wednesday}</p><br>
                                   <p>Activities:</p>
                                   <ul>
                                   <li>${park.activities[0].name}</li>
                                   <li>${park.activities[1].name}</li>
                                   <li>${park.activities[2].name}</li>
                                   <li>${park.activities[3].name}</li>
                                   <li>${park.activities[4].name}</li>
                                   <li>${park.activities[5].name}</li>
                                   </ul>
                                    <br>
                                   `


        body.appendChild(parkContainer)
      }
     
     
      


//  let options = {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//          "Accept": "application/json"
//        },
<<<<<<< HEAD
//        body: JSON.stringify( {imageId: 1, content: text} )
//    }

//  fetch ( "http://localhost:3000/comments", options)
//  .then(res => {form.reset(),  getImage()} )

})
=======
//        body: JSON.stringify( { name: ??????} )       
//     }

//   fetch ( "http://www.localhost:3000/parks", options)
//   .then(res => { console.log(res)} )   


    
    })
  }


 getParks()
  // function postParks() {
  //   document.addEventListener("submit", function(e){
  //    e.preventDefault()

     
})
   


>>>>>>> a5ad1a37b0cbe4fc6f5df435698402ed81a9346e
