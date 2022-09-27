let display=async (data)=>{
    document.querySelector("#results").innerHTML=null;
    data.forEach(function(elem,index){
        let card=document.createElement("div");
        card.onclick=()=>{
            save(data[index]);
        }
        let img=document.createElement("img");
        img.src=elem.snippet.thumbnails.high.url;
        let name=document.createElement("h2");
        name.innerText=elem.snippet.title;
        let channel=document.createElement("p");
        channel.innerText=elem.snippet.channelTitle;
        card.append(img,name,channel);
        document.querySelector("#results").append(card);
    })
}


let getData=async (name,key)=>{
let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&key=${key}`);
let data=await res.json();
return(data.items);
}


let myfunc=async ()=>{
    let name=document.querySelector("#inpt").value;
    let key="AIzaSyBokhDxm_QXTwWRIqOEtL1r9PpbKF9loAI";
    let data=await getData(name,key);
    display(data);
}


document.querySelector("#btn").addEventListener("click",myfunc);
let save=(data)=>{
 localStorage.setItem("video",JSON.stringify(data));
 window.location.href="playvideo.html";
}


async function loading(){
    let query="most popular video in india";
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyBokhDxm_QXTwWRIqOEtL1r9PpbKF9loAI`);
    let data=await res.json();
    display(data.items);
}


