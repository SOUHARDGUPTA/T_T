const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#timetable tr");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    rows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});