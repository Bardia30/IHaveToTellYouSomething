const main = document.querySelector("main");
const rick = document.querySelector("iframe");



let i = 0;
while (i < 5000){
    const newScroll= document.createElement("h3");
    newScroll.classList.add("scroll");
    newScroll.innerText = "Scroll more"
    main.appendChild(newScroll);
    i++;
}

const newScroll= document.createElement("h3");
newScroll.classList.add("scroll");
newScroll.innerText = "Scroll more"
main.appendChild(newScroll);


const button = document.querySelector('button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const allScrolls = document.querySelectorAll(".scroll");
    // for (let i = 0; i < allScrolls.length; i++){
    //     allScrolls[i].remove();
    // }
    allScrolls.forEach((element) => {
        element.remove();
    });
    const mainHeader = document.querySelector(".main-header");
    const footer = document.querySelector("footer");
    const secondHeader = document.querySelector(".secondary-header");
    footer.remove();
    secondHeader.remove();


    mainHeader.remove();
    const prank = document.querySelector(".prank");
    prank.style.display = "block";
    main.style.height = "100vh";

})
