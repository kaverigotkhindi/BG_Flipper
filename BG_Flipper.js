let colorList=["rgba(181, 143, 81)","rgba(146, 181, 81)","rgba(100, 181, 81)","rgba(100, 50,10 )"];
document.getElementById("Click-Me").addEventListener("click",function fun(){
   let index1=Math.floor(Math.random()*10)%4;
   console.log(index1);
    document.getElementById("bg-color").style.background=colorList[index1];
    document.getElementById("bg-color-name").innerHTML=colorList[index1];
});
