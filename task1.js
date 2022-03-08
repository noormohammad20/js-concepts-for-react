const validateEmail = () => {
    const email = document.getElementById('input').value
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // clear data 
    document.getElementById('input').value = ''
    document.getElementById('valid').textContent = ''
    document.getElementById('invalid').textContent = ''
    if (regex.test(email)) {

        const valid = document.getElementById('valid')
        const div = document.createElement('div')
        div.innerHTML = `<p class="text-center text-success">*wow! your email is valid</p>`
        valid.appendChild(div)

        return true
    }
    else {
        const invalid = document.getElementById('invalid')
        const div = document.createElement('div')
        div.innerHTML = `<p class="text-center text-danger">*invalid email</p>`
        invalid.appendChild(div)

        return false
    }
}