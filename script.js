const firstName=document.querySelector(".first-name");
const lastName=document.querySelector(".last-name");
const email=document.querySelector(".email");
const password=document.querySelector(".password");
const submit=document.querySelector(".submit");
  console.log(submit)
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!firstName.value){
        document.querySelector("#first-name p").classList.remove("display")
        document.querySelector("#first-name .form-control").style.border="2px solid var(--red)";
        document.querySelector("#first-name .form-control .img img").classList.remove("display")
    }else{
        document.querySelector("#first-name p").classList.add("display")
        document.querySelector("#first-name .form-control .img img").classList.add("display")
        document.querySelector("#first-name .form-control").style.border="1px solid #ccc";
    }
    if(!lastName.value){
        document.querySelector("#last-name p").classList.remove("display")
        document.querySelector("#last-name .form-control").style.border="2px solid var(--red)";
        document.querySelector("#last-name .form-control .img img").classList.remove("display")
    }else{
        document.querySelector("#last-name p").classList.add("display")
        document.querySelector("#last-name .form-control .img img").classList.add("display")
        document.querySelector("#last-name .form-control").style.border="1px solid #ccc";
    }
    if(!email.value){
        document.querySelector("#email p").classList.remove("display")
        document.querySelector("#email .form-control").style.border="2px solid var(--red)";
        document.querySelector("#email .form-control .img img").classList.remove("display")
        
    }else{
        document.querySelector("#email p").classList.add("display")
        document.querySelector("#email .form-control .img img").classList.add("display")
        document.querySelector("#email .form-control").style.border="1px solid #ccc";
    }
    if(!password.value){
        document.querySelector("#password p").classList.remove("display")
        document.querySelector("#password .form-control").style.border="2px solid var(--red)";
        document.querySelector("#password .form-control .img img").classList.remove("display")
    }else{
        document.querySelector("#password p").classList.add("display")
        document.querySelector("#password .form-control .img img").classList.add("display")
        document.querySelector("#password .form-control").style.border="1px solid #ccc";
    }
    if(!email.value.match(mailformat)){
        document.querySelector("#email p").classList.remove("display")
        document.querySelector("#email p").innerText="Please enter an valid email"
        document.querySelector("#email .form-control").style.border="2px solid var(--red)";
        document.querySelector("#email .form-control .img img").classList.remove("display")
    }else{
        console.log("email match")
        document.querySelector("#email p").classList.add("display")
        document.querySelector("#email .form-control .img img").classList.add("display")
        document.querySelector("#email .form-control").style.border="1px solid #ccc";
    }
})