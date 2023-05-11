//Consumiendo API de Rick & Morty con fetch y asyn await...

//Forma que se hizo en el video...
// function getCharacters(done) {
//     const result = fetch("https://rickandmortyapi.com/api/character")

//     result.then(response => response.json())
//         .then(data => done(data))
// }

// getCharacters((data) => {
//     console.log(data)

//     data.results.forEach(element => {

//         const article = document.createRange().createContextualFragment(/*HTML*/
//             `
//         <article>

//         <div class="image-container">
//             <img src="${element.image}">
//         </div>

//         <h2>Personaje: ${element.name}</h2>
//         <span>Estado de Personaje: ${element.status}</span>

//      </article>
//         ` );

//         const main = document.querySelector("main")

//         main.append(article)

//     });
// });

// -----------------------------------------------------------------------
//Con fetch...
// fetch("https://rickandmortyapi.com/api/character")
//     .then(respuesta => respuesta.json())
//     .then(datos => datos.results.forEach(items => {

//         console.log("Imprimiendo desde forEach; ", datos)

//         const main = document.querySelector("main")

//         const article = document.createElement("article")
//         article.innerHTML += `
//                 <article>

//         <div class="image-container">
//             <img src="${items.image}">
//         </div>

//         <h2>Personaje: ${items.name}</h2>
//         <span>Estado de Personaje: ${items.status}</span>

//      </article>
//         `
//         main.append(article)

//     })//Cierre de ciclo
//     ).catch(error => {
//         console.log(error)
//     })

    // -------------------------------------------------------
    //Con async await...
    const obtenerPersonajes = async () => {
        try {
            const respuesta = await fetch("https://rickandmortyapi.com/api/character")
            const datos = await respuesta.json()
            console.log("Imprimiendo desde async: ",datos)

            datos.results.forEach(items => {
                const main = document.querySelector("main")
                const articulo = document.createElement("article")
                articulo.innerHTML += `
                                <article>
                
                        <div class="image-container">
                            <img src="${items.image}">
                        </div>
                
                        <h2>Personaje: ${items.name}</h2>
                        <span>Estado de Personaje: ${items.status}</span>
                
                     </article>
                        `
                        main.append(articulo)
            });
        } catch (error) {
            console.log(error)
        }
    }

    obtenerPersonajes()