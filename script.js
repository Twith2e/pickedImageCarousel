let picArray = [];
let currentIndex = 0;

fileInput.addEventListener("change", (e) => {
  let file = e.target.files[0];

  let fileReader = new FileReader();
  if (file) {
    fileReader.readAsDataURL(file);
  }

  fileReader.addEventListener("load", (e) => {
    let extractedPicture = e.target.result;
    picArray.push(extractedPicture);
    displayImg(picArray[currentIndex]);
  });
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < picArray.length - 1) {
    currentIndex++;
    displayImg(picArray[currentIndex]);
  } else if (currentIndex === picArray.length - 1) {
    currentIndex = 0;
    displayImg(picArray[currentIndex]);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = picArray.length - 1;
    displayImg(picArray[currentIndex]);
  } else {
    currentIndex--;
    displayImg(picArray[currentIndex]);
  }
});

function displayImg(src) {
  if (picArray.length > 0) {
    imgHolder.innerHTML = `<img class="img" id="imgSlide" src="${src}" alt="img"/>`;
  }
}

carousel.addEventListener("mouseover", () => {
  if (imgHolder.innerHTML) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
});

carousel.addEventListener("mouseleave", () => {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
});
