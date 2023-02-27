
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

const checkElible = () =>{
   const mySalary = document.getElementById('mySalary').value 
   const myCreditScore = document.getElementById('myCreditscore').value 
   const propertyID = document.getElementById('propertyId').value 

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
            position: 'top-end',
            icon: 'success',
            title: 'You are Eligible to Apply for this property',
            showConfirmButton: false,
            timer: 1500
        })
    }
   })



}


