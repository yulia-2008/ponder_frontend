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

  getParks()

  function getParks() {

  stateSelector.addEventListener("submit", function(e){           // eventListener to form
    e.preventDefault()

    let selectedState = e.target[0].options[select.selectedIndex].text;  // take data from selection
    let abbr = selectedState.split(" ")[1]                               // extract abbreviation from selected state

     fetch("http://www.localhost:3000/parks")
    .then(resp => resp.json())
    .then(obj => { resetResults(), renderParks(obj)
  })

  function resetResults() {                                       // remove older search results

        let div = document.querySelector('.park-section')
        div.innerHTML = " "
  }
  function renderParks(obj) {
        obj.forEach(park => {
         if (park.address === abbr)                                 // render park if park's address matches selected state
         { let container = document.querySelector('.park-section')
          let parkContainer = document.createElement('div')
          parkContainer.className = "park-container"
          parkContainer.innerHTML =` <h1> ${park.name}</h1>
                                    <img src= ${park.image_url}>
                                    <p>Address: ${park.address}</p>
                                    <p>Contacts: ${park.contact}</p>
                                    <p>Activities: ${park.activities}</p>
                                    <br>
                                    <form  class="comment-form">
                                    <input  type="text" name="comment"  placeholder="Add a comment..." />
                                    <button class="comment-button" type="submit">Post</button>
                                    </form>
                                    <input type="button" value= "All comments">
                                    <br>
                                    <br>
                                   `

                           container.appendChild(parkContainer)
                let form = parkContainer.querySelector('.comment-form')    //set dataset to comment form
                form.dataset.parkId = park.id


        }
   })
  }

  let div = document.querySelector(".park-section")

div.addEventListener("click", function(e){

  if (e.target.textContent === "Post") {
  e.preventDefault()

let comment = e.target.parentNode[0].value                          //  comment  from input
let parkId = e.target.parentNode.dataset.parkId



  let options = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify( {  park_id: parkId, user_id: 39, description: comment } )       
    }

  fetch ( "http://www.localhost:3000/comments", options)
  .then(resp =>  resp.json())
  .then(comm => console.log(comm), alert("Thank you for your comment")
  )
}

    if (e.target.value === "All comments"){
         //e.preventDefault();
         let form = e.target.parentNode.querySelector(".comment-form")
         let parkId = form.dataset.parkId


         fetch("http://www.localhost:3000/parks/" + parkId)
        .then(resp => resp.json())
        .then(obj =>  {renderComments(obj)
        })
    }

   })

    function renderComments(obj) {
         let  allForms = document.querySelectorAll(".comment-form")   // finding all park containers
         allForms.forEach(form =>{                               //finding the rigth park container where to render comments
              if (form.dataset.parkId == obj.id )  {
            form.parentNode.lastChild.remove()                     // reseting comments
            let commentsList =  document.createElement('ul')      // creating new ul for comments
            commentsList.className = "rendered-comments-field"
            form.parentNode.appendChild(commentsList)

            obj.comments.forEach(comm =>{                                 // render all comments
            let li = document.createElement('li')
            li.innerHTML =  `<p>${comm.description}</p>
                             <input type="button" value= "Delete Comment">
                             <br><br>  `
            commentsList.appendChild(li)
      })
     }
    })

  }}
  )}
})
