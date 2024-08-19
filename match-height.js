document.addEventListener("DOMContentLoaded", function () {
  const specRows = document.querySelectorAll(".spec-row");
  let maxHeight = 0;

  specRows.forEach((row) => {
    const height = row.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  specRows.forEach((row) => {
    row.style.height = maxHeight + "px";
  });
});
