const popUp = document.querySelector("#popup")
const imgOne = document.getElementById("imgOne")
const imgTwo = document.getElementById("imgTwo")
const imgThree = document.getElementById("imgThree")
const imgFour = document.getElementById("imgFour")
const title = document.getElementById("popUpPage")
const pointOne = document.getElementById("pointOne")
const pointTwo = document.getElementById("pointTwo")
const pointThree = document.getElementById("pointThree")
const closeBtn = document.getElementById("closeBtn") 
const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', function() {
    popUp.style.top = (window.scrollY + 165) + 'px';
  });


function showPopUp(){
    popUp.style.opacity = 1;
    popUp.style.pointerEvents = "auto"
    boxes.forEach(box => {
        box.style.pointerEvents = "none"
    })
} 

function closePopUp(){
    popUp.style.opacity = 0;
    popUp.style.pointerEvents = "none"
    boxes.forEach(box => {
        box.style.pointerEvents = "auto"
    })
}

closeBtn.addEventListener("click", closePopUp)

imgOne.addEventListener("click", function(){
    showPopUp()
    title.innerHTML = "Quiz Page"
    pointOne.innerHTML = "This page was made using HTML, CSS and Javascript where javascript was handling all the verifications"
    pointTwo.innerHTML = "Arrays were used to store the questions and manage the quiz."
    pointThree.addEventListener("click", function(){
        window.location.href = "quiz.html"
    })
})

imgTwo.addEventListener("click", function(){
    showPopUp()
    title.innerHTML = "About Us Page"
    pointOne.innerHTML = "This page was made using HTML, CSS and Javascript where javascript was used to make the popup when a student is selected"
    pointTwo.innerHTML = ""
    pointThree.addEventListener("click", function(){
        window.location.href = "AboutUs.html"
    })
})

imgThree.addEventListener("click", function(){
    showPopUp()
    title.innerHTML = "Home Page"
    pointOne.innerHTML = "I helped in the development of the Homepage with design and UI choices"
    pointTwo.innerHTML = ""
    pointThree.addEventListener("click", function(){
        window.location.href = "index.html"
    })
})

imgFour.addEventListener("click", function(){
    showPopUp()
    title.innerHTML = "NavBar"
    pointOne.innerHTML = "I helped in the development of the navbar with coming up with the design as well as the code to make it happen"
    pointTwo.innerHTML = ""
    pointThree.addEventListener("click", function(){
        window.location.href = "index.html"
    })
})