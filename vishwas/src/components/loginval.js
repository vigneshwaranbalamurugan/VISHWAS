export function login(userType,email,password)
{
   if(userType==='User')
    {
      if(email==='vigneshb.cse@kongu.edu' && password==='1234')
      {
        sessionStorage.setItem('islogin','yes');
        localStorage.setItem('name','vignesh'); // Store name in localStorage
        localStorage.setItem('designation','Assistant Professor'); // Store designation in localStorage
        localStorage.setItem('department','CSE'); // Store department in localStorage
        localStorage.setItem('email','vigneshb.cse@kongu.edu'); // Store email in localStorage
        localStorage.setItem('number', 'number');
        document.getElementById('login-not').style.display='block';
        window.location.href='/booking';
      }
      else{
        alert("Wrong Credentials");
      }

    }
}

