const form = document.getElementById("myForm")

function submitForm(e){
    const formInput = new FormData(form)

    const email = formInput.get('email')
    const password = formInput.get('password')
    const confirmPass = formInput.get('confPass')
    const gender = formInput.get('gender')
    const subscriptionPlan = formInput.get('subsPlan')
    const checkbox = formInput.get('box')

    let errorMessage = []

    if(!email){
        errorMessage.push("Email must be filled!")
    }

    if(!email.includes("@") || email.endsWith("@")){
        errorMessage.push("Wrong email address!")
    }

    if(!password){
        errorMessage.push("Password must be filled!")
    }

    if(password && password != confirmPass){
        errorMessage.push("Confirm Password & Password must be same!")
    }

    if(password && password.length < 4){
        errorMessage.push("Password must more than four characters!")
    }

    if(!gender){
        errorMessage.push("Gender must be filled!")
    }

    if(!subscriptionPlan){
        errorMessage.push("Subscription Plan must be filled!")
    }

    if(!checkbox){
        errorMessage.push("Must agree to terms & condition!")
    }

    if(errorMessage.length > 0){
        alert(errorMessage.join("\n"))
        e.preventDefault()
    }else{
        if(!confirm("Are you sure?")){
            e.preventDefault()
        }
    }
}

form.addEventListener('submit', submitForm)
