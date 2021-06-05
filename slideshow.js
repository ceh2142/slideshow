var myImages =["earth.jpg", "mars.jpg","jupiter.jpg", "saturn.jpg", "uranus.jpg"];


var captionImages =["Earth: Third Planet From the Sun", "Mars: Fourth Planet From the Sun", "Jupiter: Fifth Planet From the Sun", "Saturn: Sixth Planet From the Sun", "Uranus: Seventh Planet From the Sun"]; 

var index=0; 

setInterval(autoSlide,2000); // Next
function autoSlide()
{
if (document.getElementById("auto").checked)
 nextImg(); 
}

function updateImage()
{
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

var nextButton = document.getElementById("next"); 
function nextImg()
{
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
nextButton.addEventListener("click",nextImg,false); 
//Back 
var previousButton = document.getElementById("previous"); 
function backImg()
{
 if (index==0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 
previousButton.addEventListener("click",backImg,false);
