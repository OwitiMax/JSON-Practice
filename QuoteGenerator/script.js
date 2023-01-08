let quoting=document.querySelector("#quot")
let nameOfQuoter=document.querySelector("#nameofQuoter")
let generateBut=document.querySelector("#generator")
generateBut.addEventListener("click",()=>{
  url=("https://api.quotable.io/random")
  fetch(url)
  .then((response)=>{
    return response.json()
  }) 
  .then((data)=>{
   quoting.textContent=data.content
   nameOfQuoter.textContent=data.author 
  }) 
})