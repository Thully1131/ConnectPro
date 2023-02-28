
const search = () =>{
    const searchWord = document.getElementById('searching').value
    axios.post('http://127.0.0.1:4444/search', {
        keyWord: searchWord
    }).then((res)=>{
        if(res.data[0].message ==  "searching" ){
            window.location ='/searchedProperty'
        }
    })
}

const checkElible = propertyID =>{
    const mySalary = document.getElementById(`mySalary-${propertyID}`).value 
   const myCreditScore = document.getElementById(`myCreditscore-${propertyID}`).value 

   axios.post('http://localhost:4444/eligible',{
    mysalary: mySalary,
    mycreditscore: myCreditScore,
    property_ID: propertyID
   }).then(res=>{
    if(res.data[0].message == "you are NOT eligible for this property"){
        Swal.fire({
            icon: 'error',
            title: 'Sorry!!',
            text: 'You are NOT eligible For this property',
          }).then(()=>{
            window.location ='/'
        }) 
    } else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You are Eligible to Apply for this property',
            text: 'Redirecting to the contact page',
            showConfirmButton: false,
            timer: 3300
        }).then(()=>{
            window.location ='/contact'
        })
    }
   })

}


