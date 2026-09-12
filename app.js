url ="https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const config = {headers: {Accept : "application/json"}}
        let res = await axios.get(url,config);
        return res.data.joke;
    } catch (e){
        console.log("error - ", e);
    }
}

p=document.querySelector("p");
btn=document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let x= await getJoke();
    p.innerText=x;
})