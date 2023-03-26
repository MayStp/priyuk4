// const isi = "MayRadiant"
// let root = document.getElementById('root');
// console.log('root: ',root);
// root.textContent = isi;
// root.style.backgroundColor = 'orange';
// root.style.textAlign = 'center';
// root.style.fontSize = '2em'
// root.style.color = 'white';
// root.style.height = '100vh';                       

let user = document.getElementById('userInput');
let pass = document.getElementById('passInput');
let admin = document.getElementById('admin');
let guest = document.getElementById('guest');
let loginbtn = document.getElementById('loginBtn');
let showpass = document.getElementById('showPass');
let logoutbtn = document.getElementById('logoutBtn');

admin.style.display = 'none';
guest.style.display = 'none';
logoutbtn.style.display = 'none'

function onLogin(){
   console.log(user.value);
   console.log(pass.value);
   localStorage.setItem('username', user.value);
    
   if(user.value == "admin" && pass.value == "admin123"){
      alert('Login sebagai admin');
      localStorage.setItem('role', "admin");
      // document.location.href = "secondpg.html"
      user.style.display = 'none'
      pass.style.display = 'none'
      loginbtn.style.display = 'none'
      logoutbtn.style.display = 'block'
      showpass.style.display = 'none'
      admin.style.display = "block"
      guest.stuyle.display = "none"
   }else {
      alert('Login sebagai guest');
      localStorage.setItem('role', "guest");
      user.style.display = 'none'
      pass.style.display = 'none'
      loginbtn.style.display = 'none'
      logoutbtn.style.display = 'block'
      showpass.style.display = 'none'
      admin.style.display = "none"
      guest.stuyle.display = "block"
   }

}

if(localStorage.getItem('username')){
   user.style.display = 'none'
   pass.style.display = 'none'
   loginbtn.style.display = 'none'
   logoutbtn.style.display = 'block'
   showpass.style.display = 'none'
   if(localStorage.getItem('role')== 'admin'){
      admin.style.display = 'block'
      guest.style.display = 'none'
   }else{
      admin.style.display = 'none'
      guest.style.display = 'block'
   }
}

function chgtype(){
   if (document.getElementById("passInput").type = "password"){
      document.getElementById("passInput").type = "text";
   }else{
      document.getElementById("passInput").type = "password";
   }
}

function onLogout(){
   localStorage.clear();
   location.reload();
}
