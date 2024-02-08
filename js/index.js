fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) //Convertir la data a JSON
    .then(data => {
        let fila = '<tr><th>Nombre</th><th>Email</th><th>Télefono</th></tr>'
        for (let usuario of data) {
            fila += `<tr><td>${usuario.name}</td>
                         <td>${usuario.email}</td>
                        <td>${usuario.phone}</td></tr>`
        }
        document.getElementById("tabla").innerHTML = fila
    })