const personOne = document.getElementById("person1");
const personTwo = document.getElementById("person2");
const personThree = document.getElementById("person3");
const personFour = document.getElementById("person4");
const uow = document.getElementById("uow");
const iit = document.getElementById("iit");
const pageOne = document.getElementById("page1")
const pageTwo = document.getElementById("page2")
const pageThree = document.getElementById("page3")
const pageFour = document.getElementById("page4")
const popUp = document.getElementById("detailPopUp")
const studentName = document.getElementById("studentName");
const closeBtn = document.getElementById("closeBtn");
const popUpStudentImage = document.getElementById("popUpStudentImage");


closeBtn.addEventListener("click", closeTab);

personOne.addEventListener("click", function(){
    popUp.style.opacity = 1;
    popUpStudentImage.src = "img/RizlanAboutUs.jpg"
    popUpStudentImage.style.borderRadius = "10px"
    popUp.style.pointerEvents = "auto"
    studentName.innerHTML = "Ahamed Rizlan"
    uow.innerHTML = "UOW no: W1987516"
    iit.innerHTML = "IIT no: 20223256"
    pageOne.innerHTML = "=> Shop Page"
    pageTwo.innerHTML = "=> Blah Blah Blah"
    pageThree.innerHTML = "=> Page Editor"
    pageFour.innerHTML = "=> Blah Blah Blah"
})

personTwo.addEventListener("click", function(){
    popUp.style.opacity = 1;
    popUpStudentImage.src = "img/LahiruAboutUs.jpg"
    popUpStudentImage.style.borderRadius = "10px"
    popUp.style.pointerEvents = "auto"
    studentName.innerHTML = "Lahiru Dissanayake"
    uow.innerHTML = "UOW no: W1987577"
    iit.innerHTML = "IIT no: 20223284"
    pageOne.innerHTML = "=> Homepage"
    pageTwo.innerHTML = "=> Comments Page"
    pageThree.innerHTML = "=> Page Editor"
    pageFour.innerHTML = ""
})

personThree.addEventListener("click", function(){
    popUp.style.opacity = 1;
    popUpStudentImage.src = "img/ChanakyaAboutUs.jpg"
    popUpStudentImage.style.borderRadius = "10px"
    popUp.style.pointerEvents = "auto"
    studentName.innerHTML = "Chanakya Liyanage"
    uow.innerHTML = "UOW no: W197468"
    iit.innerHTML = "IIT no: 20223220"
    pageOne.innerHTML = "=> Quiz Page"
    pageTwo.innerHTML = "=> About Us Page"
    pageThree.innerHTML = "=> Page Editor"
    pageFour.innerHTML = ""
})

personFour.addEventListener("click", function(){
    popUp.style.opacity = 1;
    popUpStudentImage.src = "img/JasonAboutUs.jpg"
    popUpStudentImage.style.borderRadius = "10px"
    popUp.style.pointerEvents = "auto"
    studentName.innerHTML = "Jason Anthony"
    uow.innerHTML = "UOW no: W1987478"
    iit.innerHTML = "IIT no: 20223232"
    pageOne.innerHTML = "=> Gallery Page"
    pageTwo.innerHTML = "=> Site Map Page"
    pageThree.innerHTML = ""
    pageFour.innerHTML = ""
})

function closeTab(){
    popUp.style.opacity = 0;
    popUp.style.pointerEvents = "none";
}