const accessKey = "kxw_sabpWpScUZc8KXDc3ZHneCUeR5zjgtNEJ5x0zY4";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const viewMoreBtn = document.getElementById("view-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((results) => {
        const image = document.createElement("img");
        image.src = results.urls.regular;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    viewMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

viewMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})