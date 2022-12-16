function fetchone() {
   fetch("https://isro.vercel.app/api/customer_satellites").then((response) => {
      return response.json()
   }).then((data) => {
      //   console.log(data.customers_satellites[1]) 

      for (let i = 0; i <= data.customer_satellites.length; i + 2) {
         document.body.querySelector(".two1").innerHTML +=

            `<div class="card-item-${i}">
            <div class="card">
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
            </div>



            <div class="card">
            <div class="photo">
                <img src="./images/pexels-pixabay-41006.jpg" alt="">
            </div>
            <div class="are">
                <h1>Id: ${data.customer_satellites[i + 1].id}</h1>
                <h1>Country: ${data.customer_satellites[i + 1].country}</h1>
                <h1>Launch Date: ${data.customer_satellites[i + 1].launch_date}</h1>
                <h1>Mass of Satellites: ${data.customer_satellites[i + 1].mass}</h1>
                <h1>Launcher: ${data.customer_satellites[i + 1].launcher}</h1>
            </div>
        </div>


        <div class="card">
                <div class="photo">
                    <img src="./images/pexels-pixabay-41006.jpg" alt="">
                </div>
                <div class="are">
                    <h1>Id: ${data.customer_satellites[i + 2].id}</h1>
                    <h1>Country: ${data.customer_satellites[i + 2].country}</h1>
                    <h1>Launch Date: ${data.customer_satellites[i + 2].launch_date}</h1>
                    <h1>Mass of Satellites: ${data.customer_satellites[i + 2].mass}</h1>
                    <h1>Launcher: ${data.customer_satellites[i + 2].launcher}</h1>
                </div>
            </div>
            </div>`






















         console.log(data.customer_satellites[i])
      }

   })
}
fetchone()



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
