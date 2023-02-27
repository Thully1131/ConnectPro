const form = document.getElementById('formRegister');
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
register()
 
  })
  }
  

const list = () => {
    const amount = document.getElementById('rent').value
    const type = document.getElementById('type').value
    const location = document.getElementById('location').value
    const address = document.getElementById('address').value
    const imageOne = document.getElementById('image1').value
    const imageTwo = document.getElementById('image2').value
    const imageThree = document.getElementById('image3').value
    const description = document.getElementById('description').value
    const salary = document.getElementById('salary').value
    const creditscore = document.getElementById('creditScore').value

if(amount.length !== 0 && type.length !==0 && location.length !==0 && address.length !==0 && imageOne.length!==0 &&imageTwo.length !==0
    && imageThree.length !==0 && description.length !==0 && salary.length !==0 && creditscore.length !==0){
        axios.post('http://127.0.0.1:4444/registerProperty', {
            rentAmount: amount,
            propertyType: type,
            location: location,
            address: address,
            pictureOne: imageOne,
            pictureTwo: imageTwo,
            pictureThree: imageThree,
            description: description,
            minSalary: salary,
            creditscore: creditscore
        }).then(res => {
            if (res.body !== " ") {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Property Saved Successfully',
                    showConfirmButton: false,
                    timer: 1500
                }).then(rs => {
                    window.location = '/admin'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to save property details',
                })
    
            }
    
        }).catch(err => {
            console.log(err)
        })
} else(
    document.getElementById('complete').innerHTML = `<h1 style="color: red;"> Complete all fields<h1>`
)
   
}


