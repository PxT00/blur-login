document.addEventListener('DOMContentLoaded', function () {
    let usernameformGroup = document.getElementById('Username');
    let usernameLabel = document.getElementById("username-label");
    let passwordformGroup = document.getElementById("Password");
    let passwordLabel = document.getElementById("password-label")
    




        usernameformGroup.addEventListener('mouseover', function () {
                usernameLabel.style.transform = 'translateY(-150%)';
                usernameLabel.style.opacity = "60%"
        });


        usernameformGroup.addEventListener('mouseout', function(){
            if (usernameformGroup.value == ""){
                usernameLabel.style.transform = '';
                usernameLabel.style.opacity = "" 
            } 
            
        })
        
        passwordformGroup.addEventListener('mouseover', function () {
            passwordLabel.style.transform = 'translateY(-150%)';
            passwordLabel.style.opacity = "60%"
    });


        passwordformGroup.addEventListener('mouseout', function(){
            if (passwordformGroup.value == ""){
                passwordLabel.style.transform = '';
                passwordLabel.style.opacity = "" 
            } 
            
        })

})

  
    
  
