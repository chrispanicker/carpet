import {createEls} from "./modularLayout.js"
let mainEl = document.querySelector("#main");
let name = document.querySelector("#name");

//gonna be honest, i have no idea wtf is going on here
//but it works :)

//okay so i think i figured out how to get this to work properly
//(with some help from this stackoverflow topic: https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function?page=1&tab=scoredesc#tab-top)
//


//vague workflow: 
//on click: vanish(mainEl)>createEls()>(if)createGrid()

function vanish(){
	mainEl.classList.add("vanish");	
	mainEl.classList.remove("hover");
	name.classList.remove("vanish");
	setTimeout(deleteAllChildren(mainEl), 500);
	createEls();
};

function deleteAllChildren(parent){
	while(parent.firstChild){
		parent.removeChild(parent.firstChild)
	}
}

mainEl.addEventListener("click", vanish);
export default {mainEl}