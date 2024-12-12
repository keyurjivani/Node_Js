

const Ui = (data) =>{
    
    // console.log(data);
    data.map((ele)=>{
        
        let username  = document.createElement("h5");
        username.innerHTML = ` ${ele.username}`;
    
        let email = document.createElement("h5");
        email.innerHTML = `${ele.email}`;
      
        let div = document.createElement("div");
        div.append(username, email);
       
        document.getElementById("Display").append(div)
    })
}






const GetData = async ()=>{
    let req = await fetch("http://localhost:8090/user");
    let res = await req.json();
    console.log(res);
    Ui(res)
}
GetData()