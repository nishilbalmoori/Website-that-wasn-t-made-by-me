function randomColor(){
	for(let i =0; i<255;i++){
		for(let j =0; j<255;j++){
			for(let k =0; k<255;k++){
				document.getElementById("welcome").color = rgb(i,j,k);
			}
		}
	}
}
randomColor();