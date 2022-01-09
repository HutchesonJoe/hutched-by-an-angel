const h3 = document.createElement("h3");
h3.textContent = "Fitness should feel good.";

document.querySelector("body").appendChild(h3);

const bio = document.createElement("div");
bio.textContent = "Joe Hutcheson is a personal trainer, yoga instructor, college teacher, and aspiring coder.";

document.querySelector("h3").appendChild(bio);

const mainPic = document.getElementById("mainpic");
console.log(mainPic);
function picGrow() {
    const bigPic = document.getElementById("mainpic");
    bigPic.style.width = "600px";
    console.log("picGrow", bigPic);
}

mainPic.addEventListener("mouseover", function(event){
    picGrow();
    console.log(event)
    }
)

