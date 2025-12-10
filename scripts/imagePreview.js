const images = document.querySelectorAll(".hide-image-preview");
const backgroundDivs = document.querySelectorAll(".image-divs")

function hideImagePreview(index, bool) {
    console.log("hello")
    images.forEach((e, i) => {
        console.log("something")
        if(index == i && e.classList.contains("show-image-preview") && bool == true) {
            e.classList.remove("show-image-preview");
            backgroundDivs[i].classList.remove("show-image-bg")
        } else if(index == i) {
            console.log("image div")
            e.classList.add("show-image-preview")
            backgroundDivs[i].classList.add("show-image-bg")
        }   
    })
}