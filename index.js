const shopItem = document.querySelectorAll(".item")
const store = document.getElementById("store")
const quiz = document.getElementById("quiz")
const gallery = document.getElementById("gallery")

shopItem.forEach(items => {
    items.addEventListener("click", function(){
        console.log("clicked")
        window.location.href = "shop.html"
    })
  });

  store.addEventListener("click", function(){
    window.location.href = "shop.html"
  })

  quiz.addEventListener("click", function(){
    window.location.href = "quiz.html"
  })

  gallery.addEventListener("click", function(){
    window.location.href = "Gallery.html"
  })