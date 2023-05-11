//fetch

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())//Lo que obtenemos de la api la retornamos en json...
    .then(data => {
        console.log("Imprimiendo desde fetch 1, el archivo json: ",data)
        const newArrayNombres = []
        data.results.forEach(element => {
            console.log("Imprimiendo desde fetch, con forEach: ",element)
            newArrayNombres.push(element.name)      
        });
        console.log("Imprimiendo newArray donde guardamos 'name', con forEach: ",newArrayNombres)
    })
    .catch(error => {
        console.log(error)
    })

    //async & await
    const obtenerPokemones = async () => {
        try {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon")
            const data = await res.json()//Lo que obtenemos de la api la retornamos en json...
             console.log("Imprimiendo desde async, el archivo Json",data)
            const arrayNombres =  data.results.map(poke => poke.name)
            console.log("Imprimiendo arrayNombres con map: ",arrayNombres)
        } catch (error) {
            console.log(error)
        }
    }
    obtenerPokemones()