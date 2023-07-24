`use strict`

// to show the different cards when each thumbnail is clicked

function changeHortonPlains() {
    document.getElementById("content-heading").textContent = "Horton Plains";
    document.getElementById("details-text").textContent = "Horton Plains National Park in Sri Lanka is a stunning highland park established in 1988. Located at an elevation of 2,100-2,300 meters, it comprises grasslands, cloud forests, and endemic species. Serving as the origin of three major rivers, the park boasts rich biodiversity and is home to unique wildlife. Stone tools from the Balangoda culture have been discovered here. Visitors are drawn to the iconic World's End precipice and Baker's Falls. Despite the threat of forest dieback, the park remains a popular tourist destination renowned for its natural beauty and ecological significance.";
    let image = document.getElementById("main-content-image");
    image.src = "img/horton.jpg";
    let video = document.querySelector(".button");
    video.href = "https://youtu.be/ZpGE6p-Ol2c";
}

function changeEllaRock() {
    document.getElementById("content-heading").textContent = "Ella Rock";
    document.getElementById("details-text").textContent = "Ella Rock is a famous natural landmark located near the town of Ella in Sri Lanka. This stunning rock formation has become a popular attraction for hikers and nature enthusiasts. Rising majestically amidst lush greenery, Ella Rock offers breathtaking panoramic views of the surrounding valleys, tea plantations, and cascading waterfalls. The hike to the top is a thrilling adventure, taking visitors through scenic landscapes and dense forests. Once at the summit, the reward is a mesmerizing vista that captures the beauty of the region. Ella Rock is not only a visual delight but also a testament to the captivating natural wonders found in Sri Lanka's hill country."
    let image = document.getElementById("main-content-image");
    image.src = "img/ella-rock.jpg";
    let video = document.querySelector(".button");
    video.href = "https://www.youtube.com/watch?v=XMt5QcKe0DU"
}

function changeSigiriya() {
    document.getElementById("content-heading").textContent = "Sigiriya";
    document.getElementById("details-text").textContent = "Sigiriya, also known as the 'Lion Rock,' is an ancient rock fortress and UNESCO World Heritage site in Sri Lanka. Rising dramatically 200 meters above the surrounding plain, it boasts impressive ancient ruins, including a palace complex and landscaped gardens. Built by King Kasyapa in the 5th century AD, Sigiriya is a remarkable feat of engineering and architecture. The ascent to the summit involves climbing a series of steep staircases and passing through captivating frescoes on the rock's walls. At the top, visitors are rewarded with breathtaking views of the countryside, making Sigiriya a captivating destination that combines history, art, and natural beauty.";
    let image = document.getElementById("main-content-image");
    image.src = "img/sigirya.jpg";
    let video = document.querySelector(".button");
    video.href = "https://youtu.be/uJQz2uWr2E8";
}

function changeMeemure() {
    document.getElementById("content-heading").textContent = "Meemure";
    document.getElementById("details-text").textContent = "Meemure is a picturesque and remote village nestled deep within the Knuckles Mountain Range in Sri Lanka. This secluded hamlet is known for its untouched natural beauty and traditional way of life. Surrounded by dense forests, cascading waterfalls, and mist-covered mountains, Meemure offers a serene and tranquil escape from the bustling world. The village is inhabited by a close-knit community that preserves their unique customs, rituals, and traditional practices. Visitors can immerse themselves in the village's rich cultural heritage, explore the scenic surroundings through hiking trails, and experience the warmth and hospitality of the locals. Meemure is a hidden gem that provides an authentic and unforgettable rural experience.";
    let image = document.getElementById("main-content-image");
    image.src = "img/meemure.jpg";
    let video = document.querySelector(".button");
    video.href = "https://youtu.be/YGrqvW5jFfw";
}

function changeOhiya() {
    document.getElementById("content-heading").textContent = "Ohiya";
    document.getElementById("details-text").textContent = "Ohiya is a scenic hill station located in the central highlands of Sri Lanka. Nestled amidst misty mountains and lush tea plantations, Ohiya offers a serene and idyllic retreat for nature lovers and adventure enthusiasts. The village is renowned for its breathtaking landscapes, with rolling hills, cascading waterfalls, and panoramic viewpoints. Ohiya serves as a gateway to explore the enchanting beauty of Horton Plains National Park, where visitors can witness the iconic World's End precipice and Baker's Falls. Trekking and hiking opportunities abound in Ohiya, allowing travelers to immerse themselves in the region's natural wonders. With its tranquil ambiance and captivating vistas, Ohiya is a must-visit destination for those seeking tranquility and natural splendor.";
    let image = document.getElementById("main-content-image");
    image.src = "img/ohiya.jpg";
    let video = document.querySelector(".button");
    video.href = "https://youtu.be/zJRmJOiVziU";
}


// to change colours

const btn = document.getElementById("colour-change");


function bodyColourChangeOne() {
    document.body.style.backgroundColor = "395144";
}

function bodyColourChangeTwo() {
    document.body.style.backgroundColor = "AA8B56";
}

function bodyColourChangeThree() {
    document.body.style.backgroundColor = "4E6C50";
}

// to change font-sizes

function changeFontLarge() {
    document.getElementById("details").style.fontSize = "large";
}

function changeFontLarger() {
    document.getElementById("details").style.fontSize = "larger";
}

function changeFontLargest() {
    document.getElementById("details").style.fontSize = "25px"
}

// to make the settings menu visible

let visible = false;
function displayMenu() {
    if (visible == true) {
        document.getElementById('settings').style.display = "none";
        visible = false;
    } else if (visible == false) {
        document.getElementById('settings').style.display = "flex";
        visible = true;
    }
}

// to make a random colour appear

function randomColour() {
    let r = (Math.floor(Math.random() * 256)); // gets random number between 1 and 256
    let g = (Math.floor(Math.random() * 256));
    let b = (Math.floor(Math.random() * 256));
    document.body.style.backgroundColor =  'rgb(' + r + ',' + g + ',' + b + ')'; 
}