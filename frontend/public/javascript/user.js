// const searchWord = document.getElementById('searching').value

// const search = () =>{
//     if(searchWord == ""){
//         console.log("put key word")
//     } else{
//         searchA()
//     }
    
// }
// const search= () => {
//     axios.get('http://localhost:4444/fetchProperty').then((res)=>{

//         const filterResult = res.filter(key => searchWord.value === key.rentAmount || searchWord.value.toLowerCase() == key.propertType.toLowerCase() || searchWord.value.toLowerCase() == key.location.toLowerCase )

//         let result = filterResult.map((dt,idx)=>{
//             return ` <div class="card m-3" style="width: 30rem; font-size:20px">
//             <div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
//                 <div class="carousel-inner mt-3">
//                   <div class="carousel-item active">
//                     <img src="${dt.pictureOne}" class="d-block w-100" alt="">
//                   </div>
//                   <div class="carousel-item">
//                     <img src="${dt.pictureTwo}" class="d-block w-100" alt="">
//                   </div>
//                   <div class="carousel-item">
//                     <img src="${dt.pictureThree}" class="d-block w-100" alt="">
//                   </div>
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
//                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                   <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
//                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                   <span class="visually-hidden">Next</span>
//                 </button>
//               </div>
//             <div class="card-body mb-3">
//                 <h5 class="card-title" style="font-size:30px">$ ${dt.rentAmount}</h5>
//                 <h5 class="card-title" style=" font-size:20px">${dt.location}</h5>
//                 <h6 class="mb-3" style=" font-size:20px">${dt.propertType}</h6>
//                 <p style=" font-size:15px">${dt.address}</p>
//                 <p class="card-text" style=" font-size:15px">${dt.description}.</p>
//                 <p class="card-text" style=" font-size:15px;font-style: italic;">Posted on: ${dt.createdAt}</p>
//                 <button class="btn btn-primary " style=" font-size:15px">Requirment Form</button>
//             </div>
//         </div>`
//         })
//         document.getElementById('foundProperties').innerHTML = filterResult.length > 0 ? result.join("") : `<div>No Cars Found</div>`;
//     })
// }