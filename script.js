       const issues = document.querySelectorAll(".issue");

issues.forEach(issue => {
    const button = issue.querySelector(".issue-button");

    button.addEventListener("click", () => {
        issue.classList.toggle("active");
    });
});


const summaries = document.querySelectorAll(".section-summary");

summaries.forEach(summary => {
    const button = summary.previousElementSibling

    button.addEventListener("click", () => {
        summary.classList.toggle("active");
    });
});