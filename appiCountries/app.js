let infoInteres = [];
let paises = []
let miInformacion = [];
let allInfo = []
let myCountries = ["Argentina" ,"Australia" ,"Canada" ,"China" ,"South Korea" ,"Spain" ,"France" ,
"United Kingdom" ,"Ireland" ,"Italy" ,"Japan" ,"New Zealand" ,"Singapore" ,"South Africa" ,"Uruguay" ,"United States"]

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((info) => {

        let soloNombres = info.map (pais => {

            console.log(pais.name.common)
                    }
            
            )

        for (i=0 ; i< myCountries.length ; i++){
               
            info.forEach(element => {
            

                if(element.name.common == myCountries[i] ) {
                   infoInteres.push(element) 
                }
            });            
        }        
        console.log(infoInteres);

        infoInteres.forEach (element =>{
            let imprimir = element.name.common + " *" + element.flags.svg + " *" + element.population + 
            " /"+ element.startOfWeek  + " *" 
            console.log(imprimir);

       });



        });
//  infoInteres.push([element.name.common, element.flags.svg, element.languages])

