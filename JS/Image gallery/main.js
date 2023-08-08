const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageName = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imageAlt = ["Eye image", "Wavy image", "Flower image", "Egypt image", "Butterfly image"];

/* Looping through images */
for (let i = 0; i < imageName.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageName[i]}`);
    newImage.setAttribute('alt', imageAlt[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {
        displayedImage.setAttribute("src", `images/${imageName[i]}`);
        displayedImage.setAttribute("alt", imageAlt[i]);
    });
}

// ALTERNATE CHANGE THUMBBAR IMAGE
// thumbBar.addEventListener("click", (e) => {
//     displayedImage.setAttribute("src", e.target.getAttribute("src"));
//     displayedImage.setAttribute("alt", e.target.getAttribute("alt"));
// });


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
    const currentClass = btn.classList.value;
    if (currentClass === "dark") {
        btn.classList.replace("dark", "light");
        btn.innerText = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.classList.replace("light", "dark");
        btn.innerText = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});