import React from "react";

function Marianela() {

    const datos = [
        {
            name: "madrid-itinerario",
            city: "madrid",
            image: ["banner1.jpg", "banner2.jpg", "banner3.jpg"],
        },
        {
            name: "madrid-itinerario2",
            city: "madrid",
            image: ["banner1.jpg", "banner2.jpg", "banner3.jpg"],
        },
        {
            name: "madrid-itinerario3",
            city: "madrid",
            image: ["banner1.jpg", "banner2.jpg", "banner3.jpg"],
        }

    ]

    return (
        <>
            {datos.map((item) => {
                return (
                    <div style={{ backgroundColor: "green", width: "20vw", height: "30vh", margin: "10px" }}>

                        <p>{item.name}</p>
                        {item.image.map((element) => {
                            return (
                                <div style={{ backgroundColor: "white", width:"10vw", height:"10vh" }}>

{<img src={process.env.PUBLIC_URL + `/image/itinerary/${element}`} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="..." />}                               </div>



                            )
                        })}

                    </div>



                )
            })}

        </>



    )
}
export default Marianela;