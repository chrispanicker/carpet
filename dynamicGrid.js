import {createVid} from "./modularLayout.js"

let mainEl = document.querySelector("#main");
let projects = ["Silkscreen Quest <br>(Silkscreen, 2022)", "Losing My Head <br>(Digital, 2022)", "The Back of My Hand <br>(Silkscreen, 2022)",  "Direct Animation <br>(Manual labor, 2022)", "FA Junk Jam <br>(Photography, 2022)", "Get That Fly! <br>(Arm, 2022)", "Eyes Like the Sky <br>(Mixed, 2021)", "Dino Chomp <br>(Digital, 2021)"];
let srcs = ["./assets/videos/sq.mov", "./assets/videos/lmh.mov", "./assets/images/back.jpeg", "./assets/videos/direct.mov", "./assets/images/fa1.jpeg", "./assets/videos/gd.mov", "./assets/videos/eyes.mp4", "./assets/videos/dino.mp4"];
let foot = document.querySelector("#foot");

export function createGrid(){
	let grid = document.createElement("section");
	grid.id = "grid";

	for(let i=0; i<projects.length; i++){
		let grandparent = document.createElement("div");
		let parent1 = document.createElement("div");
		let parent2 = document.createElement('div');
		
		grandparent.id = "gridGrand";
		parent1.id = "gridP1";
		parent2.id = "gridP2";
		parent2.innerHTML = projects[i];

		if(srcs[i].includes("mov")){
			let thisVid = createVid();
			thisVid.src = srcs[i];
			parent1.append(thisVid);
		} else if(srcs[i].includes("mp4")){
			let thisVid = createVid();
			thisVid.src = srcs[i];
			parent1.append(thisVid);
		} else{
			let thisImg = document.createElement("img");
			thisImg.id = "image";
			thisImg.src = srcs[i];
			parent1.append(thisImg);
		}
	
		grandparent.append(parent1, parent2);
		grid.append(grandparent);
	}

	mainEl.append(grid);
	foot.classList.remove("vanish")
}	