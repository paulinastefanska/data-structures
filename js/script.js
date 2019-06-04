'use strict';
(function(){ 

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

	for (var i=0; i < data.length; i++) { //all data

      var boxDiv = document.createElement("div"); //add div
      boxDiv.id = data[i].id;
      boxDiv.classList.add('box'); //add class

      var boxDivHeader = document.createElement("header"); //add header
      boxDivHeader.innerText = data[i].title; //var title

      var categories = data[i].categories;  //all var data add box class
    
    
      for (var j=0; j < categories.length; j++) { //all categories
        
        if (categories[j] == 'special-header') {
          boxDivHeader.classList.add(categories[j]); //if have special-header add class to header 
        }
        else {boxDiv.classList.add(categories[j])}; //else add class to box
      };

      boxDiv.appendChild(boxDivHeader); //header

      boxDiv.innerHTML = boxDiv.innerHTML + data[i].content; //add content

      document.body.appendChild(boxDiv); //add body
    };
    
 })();