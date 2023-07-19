const searchBox = document.getElementById('search-box');

function search() {
    let searchText = searchBox.value;
    window.location = 'https://google.com/search?q=' + searchText;
}

searchBox.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        search();
    }
})