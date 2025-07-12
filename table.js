document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase(); // user jo likhe usko lowercase me lo
    let rows = document.querySelectorAll("table tr"); // sabhi table rows lo

    rows.forEach((row, index) => {
        if (index === 0) return; // skip header row
        let text = row.innerText.toLowerCase(); // row ke andar ka text
        row.style.display = text.includes(filter) ? "" : "none"; // agar match karta ho toh dikhaye, nahi toh chhupaye
    });
});
