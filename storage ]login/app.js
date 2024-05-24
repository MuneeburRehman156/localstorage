function signup(){
    var email = document.getElementById('floatingInput')
    var password = document.getElementById('floatingPassword')
    localStorage.setItem('email',email.value)
    localStorage.setItem('pass',password.value)
    Swal.fire({
        title: "Good job!",
        text: "You are successfully registered.",
        icon: "success"
      });

      location.href='signin.html'
}



function signin(){
    var email = document.getElementById('floatingInput')
    var password = document.getElementById('floatingPassword')
    if(localStorage.getItem('email')==email.value && localStorage.getItem('pass')==password.value){
      
        Swal.fire({
            title: "Got it!",
            text: "You are our member.",
            icon: "success"
          });
          location.href='super.html'
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            alert('sorry')
    location.href='index.html'

        }
}



function signingo(){
    location.href='signin.html'
}
function signupgo(){
    location.href='index.html'
}