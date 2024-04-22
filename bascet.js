const anaDiv = document.querySelector('.products')

function getCartData() {
    anaDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item, index) => {
        let box = document.createElement("div");
        box.className = "object";
        box.innerHTML = `
    <img src=${item.thumbnail} alt="">
    <h3>${item.title}</h3>
    <p${item.brand}</p>
    <h3>${item.price}</h2>
              <button class="cartBtn" onclick="deleteItem(${index})">DELETEㅤ<i class="fa-solid fa-trash"></i></button>
            </div>
            `;
        anaDiv.appendChild(box);
    });
}


function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCartData()
}

getCartData()






var urunSayisi = 0;

// Artırma işlevi
function urunArtir() {
    urunSayisi++; // Ürün sayısını artır
    guncelleUrunSayisi(); // Sayıyı güncelle
}

// Azaltma işlevi
function urunAzalt() {
    if (urunSayisi > 0) { // Eğer ürün sayısı sıfırdan büyükse azalt
        urunSayisi--; // Ürün sayısını azalt
        guncelleUrunSayisi(); // Sayıyı güncelle
    }
}

// Ürün sayısını güncelleyen işlev
function guncelleUrunSayisi() {
    var urunSayisiSpan = document.getElementById("urunSayisi"); // Span elementini al
    urunSayisiSpan.textContent = urunSayisi; // Ürün sayısını göster
}

// Artırma butonuna tıklama olayı
document.getElementById("artirBtn").addEventListener("click", urunArtir);

// Azaltma butonuna tıklama olayı
document.getElementById("azaltBtn").addEventListener("click", urunAzalt);


