function clickHandler() {
    var promise = fetch("PersonServlet");
    promise.then(function (response) {
        return response.json();
    }).then(function (persons) {
        var tableRows = persons.map(function (p) {
            return "<tr><td>" + p.firstName + "</td><td>" + p.lastName + "</td><td>" + p.phone + "</td></tr>";
        }).join("");
        document.getElementById("tbody").innerHTML = tableRows;
    });
}

document.getElementById("btn").onclick = clickHandler;