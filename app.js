//Enter your code here..

const parentEle = document.getElementById("message");

function display(user){
    let newItem = document.createElement('div');
    newItem.className = "player";
    let name =  document.createElement('div');
    name.innerHTML = "<b>Name : "+ user.name+"</b>";
    newItem.append(name)
    let email =  document.createElement('div');
    email.innerHTML = "<b>Email: </b>"+ user.email;
    newItem.append(email)
    let phone =  document.createElement('div');
    phone.innerHTML = "<b>Phone : </b>"+ user.phone;
    newItem.append(phone)
    let web =  document.createElement('div');
    web.innerHTML = "<b>Website : </b>"+ user.website;
    newItem.append(web)
    let company =  document.createElement('div');
    company.innerHTML = "<b>Company: </b>"+ user.company.name;
    newItem.append(company)
    let city =  document.createElement('div');
    city.innerHTML = "<b>City : </b>"+ user.address.city;
    newItem.append(city)
    let zipcode =  document.createElement('div');
    zipcode.innerHTML = "<b>Zipcode : </b>"+ user.address.zipcode;
    newItem.append(zipcode)
    
    parentEle.append(newItem);
}


async function data(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let res2 = await res.json();
        
        for(let i = 0; i<res2.length; i++){
            display(res2[i]);
            console.log(res2[i]);
        }
    }catch(error){
        console.log(error);
    }
}