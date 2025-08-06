document.getElementById("educationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let degree = document.getElementById("degree").value;
    let institution = document.getElementById("institution").value;
    let year = document.getElementById("year").value;

    let li = document.createElement("li");
    li.textContent = `${degree} - ${institution} (${year})`;

    document.getElementById("educationList").appendChild(li);

    document.getElementById("educationForm").reset();
});
