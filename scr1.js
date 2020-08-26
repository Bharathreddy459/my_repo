mylist=["John","Clay","Justin","Mike"];

function hello(){
	for(i=0;i<4;i++){
		if(mylist[i].charAt(0)!=="J"){
			console.log("Hello " + mylist[i])
		}
	}
	
}