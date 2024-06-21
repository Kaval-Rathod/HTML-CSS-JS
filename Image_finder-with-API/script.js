const AccessKey = "dCA1w8Ph0xydAsO2abPe5eMJCxNKCxeJ-3U4fMQow18";

const FormE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const SearchResult = document.querySelector(".search-results");
const ShowMore = document.getElementById("show-more");

let InputData = "";
let Page = 1;

async function SearchImages() {
  InputData = inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${Page}&query=${InputData}&client_id=${AccessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (Page === 1) {
    SearchResult.innerHTML = "";
  }

  results.map((result) => {
    const ImageWraper = document.createElement("div");
    ImageWraper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    ImageWraper.appendChild(image);
    ImageWraper.appendChild(imageLink);
    SearchResult.appendChild(ImageWraper);
  });
  Page++;
  if (Page > 1) {
    ShowMore.style.display = "block";
  }
}

FormE1.addEventListener("submit", (event) => {
  event.preventDefault();
  Page = 1;
  SearchImages();
});

ShowMore.addEventListener("click", () => {
  SearchImages();
});
