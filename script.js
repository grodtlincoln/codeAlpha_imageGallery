const buttons = document.querySelectorAll("[data-filter]");
const imageGalleries = document.querySelectorAll(".imageGallery");

buttons.forEach(btn => {
    btn.addEventListener("click",() => {
        const filter = btn.getAttribute("data-filter");

        buttons.forEach(btn => btn.classList.remove("active-button"));
        btn.classList.add("active-button");

        imageGalleries.forEach(imageGallery => {
            const category = imageGallery.getAttribute("data-category");
                if(filter === category || filter === "all") {
                    imageGallery.style.display = "grid";
                        }else {
                            imageGallery.style.display = "none";
            }
        });
   });
});


const lightboxContainer = document.getElementById("lightboxContainer");
const lightbox = document.getElementById("lightbox");
const lightboxCaption = document.getElementById("lightboxCaption");
const images = document.querySelectorAll(".imageGallery img");
let currentIndex = 0;

function openImagePop(index) {
    currentIndex = index;
    showImage();
    lightboxContainer.classList.add("active");
}

function showImage() {
  const img = images[currentIndex];
  lightbox.src = img.src;
  lightboxCaption.textContent = img.alt || "";
}

function closeImagePop() {
    lightboxContainer.classList.remove("active");
}

function nextImage(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function outsideClick(e) {
  if (e.target.id === "lightboxContainer") {
    closeImagePop();
  }
}