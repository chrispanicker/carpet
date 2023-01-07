import{createGrid} from "./dynamicGrid.js"

//filepaths for the srcs
let spiritQuest = ["./assets/videos/sq.mov", "./assets/images/sq1.jpeg", "./assets/images/sq2.jpeg", "./assets/images/sq3.jpeg"];
let lmh = ["./assets/videos/lmh.mov"]
let arrayOfArrays = [spiritQuest, lmh]

//arrays of titles and descs
let titleArray = ["Silkscreen Quest <br>(2022)", "Losing My Head <br>(2022)"]
let descArray = ["I experimented with silkscreening frames from Spirit Quest(2016).", "A short film I animated and scored with rotoscoped visuals."]

let mainEl = document.querySelector("#main");
let projectIndex = 0;


//function to create the elements dynamically for each project
//hierarchy: mainEl/grandparent/parent1 & parent2/elements

export function createEls(){
	if(projectIndex===titleArray.length){
		mainEl.classList.add("vanish");
		mainEl.classList.remove("hover");
		setTimeout(function(){	
		createGrid();
		mainEl.classList.remove("vanish");
		mainEl.classList.add("hover");
		}, 510);
	} else{
		let parent1 = document.createElement("div");
		let parent2 = document.createElement("div");
		let grandparent = document.createElement("div");
		let title = document.createElement("h2");
		let desc = document.createElement("p");

		parent1.id = "parent1";
		parent2.id = "parent2"
		grandparent.id = "grandparent"
		title.id = "title";
		desc.id = "desc";

		title.innerHTML = titleArray[projectIndex];
		desc.innerHTML = descArray[projectIndex];

		//for loop to iterate through arrays of sources/create elements
		for(let i=0; i<arrayOfArrays[projectIndex].length; i++){
			if(arrayOfArrays[projectIndex][i].includes(".mov")){
				let thisVid = createVid();
				thisVid.src = arrayOfArrays[projectIndex][i];
				parent1.append(thisVid);
			} else {
				let img = document.createElement("img");	
				img.id = `image`
				img.src = arrayOfArrays[projectIndex][i]; 
				parent1.append(img);
			}
		}

		//timing so that it doesnt appear too early
		setTimeout(function(){
			parent2.append(title, desc);
			grandparent.append(parent1, parent2)
			mainEl.append(grandparent)
			mainEl.classList.remove("vanish")
			mainEl.classList.add("hover");
			projectIndex++
		}, 510);
	}
	}

export function createVid(){
	let vid = document.createElement("video");
	vid.id = "image";
	vid.autoplay = true;
	vid.controls = false;
	vid.loop = true;
	vid.muted = true;

	if(projectIndex===1){
		vid.controls = true;
		vid.style.height="45vw";
		vid.style.width="auto";
	}

	return vid;
}





