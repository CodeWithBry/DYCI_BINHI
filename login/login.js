const labels = document.querySelectorAll(".inputs > label");
const labelTexts = document.querySelectorAll(".label-text");

labels.forEach((label, index) => {
    const input = label.querySelector("input");

    input.addEventListener("focus", () => {
        labelTexts[index].classList.add("focus");
    });

    input.addEventListener("blur", () => {
        // Remove class if input is empty
        if (!input.value) {
            labelTexts[index].classList.remove("focus");
        }
    });
});
