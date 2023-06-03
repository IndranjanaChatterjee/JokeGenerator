
btn.addEventListener('click',(e)=>
{
    let p=fetch("https://api.chucknorris.io/jokes/random");
    p.then((value)=>
    {
        return value.json();
    }).then((val)=>
    {
        document.getElementById("text").innerHTML=val.value;
    })

})
     

   

    
    


