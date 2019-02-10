fetch('data.json').then((res)=>{
	return res.json();
}).then((data)=>{
	console.log(data.members[1].address);
})

/*

fetch('data.json').then(function(res){
	return res.json();
}).then(function(data){
	console.log(data.members[1].address)
})


function(res){
	console.log();
}
res => {
	console.log();
}
res => console.log();


*/