
let searchInput = document.querySelector(".search_input");

searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let searchValue = searchInput.value.trim();
        if (searchValue !== "") {
            alert("You searched for: " + searchValue);
        } else {
            alert("Please type something to search.");
        }
    }
});


let actionItems = document.querySelectorAll(".action_container");

actionItems.forEach(function (item) {
    item.addEventListener("click", function () {
        let name = item.querySelector(".action_name");
        if (name) {
            alert(name.innerText + " clicked!");
        }
    });
});


