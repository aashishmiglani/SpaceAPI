function fetchone() {
    fetch("https://isro.vercel.app/api/customer_satellites").then((response) => {
       return response.json()
    }).then((data) => {
       //   console.log(data.customers_satellites[1]) 
 let ihtml=""
       for (i in data.customer_satellites) { 
        ihtml +=
        `<div class="card">
                 <div class="photo">
                     <img src="./images/pexels-pixabay-41006.jpg" alt="">
                 </div>
                 <div class="are">
                     <h1>Id: ${data.customer_satellites[i].id}</h1>
                     <h1>Country: ${data.customer_satellites[i].country}</h1>
                     <h1>Launch Date: ${data.customer_satellites[i].launch_date}</h1>
                     <h1>Mass of Satellites: ${data.customer_satellites[i].mass}</h1>
                     <h1>Launcher: ${data.customer_satellites[i].launcher}</h1>
                 </div>
             </div>`
          console.log(data.customer_satellites[i])
       }
       document.body.querySelector(".two1").innerHTML =ihtml
 
    })
 }
 fetchone()
//  let key =prompt("Enter Your Key")
//  let value=prompt("Enter Your value")
//  localStorage.setItem(key ,value)
//  localStorage.getItem(key)
//  localStorage.deleteItem(key)


//  let valu2e=prompt("Enter Your value")
//  let b=encodeURIComponent(valu2e)
//  let a= decodeURIComponent(valu2e)
// console.log(a,b)

 
 
 // // }
 // // fetchone()
 //  // var q = {
 //     //     method: "POST",
 //     //     body: JSON.stringify(w),
 //     //     headers: {
 //     //         'Content-type': 'application/json;
 //     //     },
 //     // }
 
 //     // var w = {
 //     //     id: 1,
 //     //     name: "Aryabhata"
 //     // }
 