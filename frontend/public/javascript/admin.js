

const list = () => {
    const amount = document.getElementById('rent').value
    const type = document.getElementById('type').value
    const location = document.getElementById('location').value
    const address = document.getElementById('address').value
    const imageOne = document.getElementById('image1').value
    const imageTwo = document.getElementById('image2').value
    const imageThree = document.getElementById('image3').value
    const description = document.getElementById('description').value


    axios.post('http://127.0.0.1:4444/registerProperty', {
        rentAmount: amount,
        propertyType: type,
        location: location,
        address: address,
        pictureOne: imageOne,
        pictureTwo: imageTwo,
        pictureThree: imageThree,
        description: description
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
}


