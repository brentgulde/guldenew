
$('#app1').html(`

<div class="loader"></div>

	`);
setTimeout(function(){
x();	

}, 3000);

function x(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men"
}).done(function(res){
console.log(res);
let html = `
<h1>${res.Title } </h1> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;
$('#app1').html(html);
});

}

$('#app2').html(`

<div class="loader"></div>

	`);
setTimeout(function(){
y();	

}, 3000);

function y(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men 2"
}).done(function(res){
console.log(res);
let html = `
<center>${res.Title} </center> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;
$('#app2').html(html);
});

}

$('#app3').html(`

<div class="loader"></div>

	`);
setTimeout(function(){
z();	

}, 3000);

function z(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men+the+last+stand"
}).done(function(res){
console.log(res);
let html = `
<h1>${res.Title } </h1> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;
$('#app3').html(html);
});

}

$('#app4').html(`

<div class="loader"></div>

	`);
setTimeout(function(){
a();	

}, 3000);

function a(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men first class"
}).done(function(res){
console.log(res);
let html = `
<h1>${res.Title } </h1> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;
$('#app4').html(html);
});

}
$('#app5').html(`

<div class="loader"></div>

	`);
setTimeout(function(){
a();	

}, 3000);

function a(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men apocalypse"
}).done(function(res){
console.log(res);
let html = `
<h1>${res.Title } </h1> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;
$('#app5').html(html);
});

}