let x = Math.floor(Math.random()*3);
let y = Math.floor(Math.random()*3);
let choiceArray = ["paper","rock","scissors"];

var heading = document.querySelector("h2");

const imageOne = "assets/"+choiceArray[x]+".png";
const imageTwo = "assets/"+choiceArray[y]+".png";

// Change the images
const img1 = document.querySelector('.img1');
img1.setAttribute("src",imageOne);

const img2 = document.querySelector('.img2');
img2.setAttribute("src",imageTwo);


// validating the result

if ((x==0 && y==1) || (x==1 && y==2) || (x==2 && y==0))
{
    heading.textContent="Player One Won";
}
else if (x==y)
{
    heading.textContent="Draw";
}
else
{
    heading.textContent="Player Two Won"
}

