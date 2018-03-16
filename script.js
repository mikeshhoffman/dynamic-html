var products = [
  {name: "princess", price: 39.99, image: "https://www.glamourmutt.com/assets/images/polka-dot-designer-dog-life-jacket--hot-pink-1.jpg"},
  {name: "pool shark", price: 46.99, image: "https://odditymall.com/includes/content/shark-fin-dog-life-jacket-0.jpg"},
  {name: "turbo", price: 29.99, image: "http://www.petmywiener.com/images/thumbs/0002517_460.jpeg"}
]

function buildListings(){
  // select element with id "target"
  var container = document.querySelector("#target")
  // give it a class of "parent"
  container.classList.add("parent")
  
  // loop through the products array, and for each, a listing like:
  // <div>
  //   <h2>productname</h2>  ie. <h2>products[i].name</h2>
  //   <p>productprice</p>  ie. <h2>products[i].price</h2>
  //   <img src="" alt="">
  // </div>
  for(var i=0; i<products.length; i++){
  //console.log(products[i].name)
    var divV = document.createElement("div")
    
    var h2V = document.createElement("h2")
    h2V.innerHTML = products[i].name
    
    var pV = document.createElement("p")
    pV.innerHTML = products[i].price
    
    var imgV = document.createElement("img")
    imgV.setAttribute("src", products[i].image)
    imgV.setAttribute("alt", products[i].name)
    
    divV.appendChild(h2V)
    divV.appendChild(imgV)
    divV.appendChild(pV)
    container.appendChild(divV)
  }
}

buildListings()
