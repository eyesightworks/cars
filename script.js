// Simple search demo
document.querySelector(".search-box button")
  .addEventListener("click", function () {

    const city = document.querySelectorAll(".search-box input")[0].value;
    const make = document.querySelectorAll(".search-box input")[1].value;
    const model = document.querySelectorAll(".search-box input")[2].value;

    if (!city && !make && !model) {
      alert("Please enter at least one search field.");
      return;
    }

    alert(
      `Searching vehicles...\n\nLocation: ${city || "Any"}\nMake: ${make || "Any"}\nModel: ${model || "Any"}`
    );
  });

// Click category card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Category selected: " + card.querySelector("h3").textContent);
  });
});
