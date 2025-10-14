import {monsters} from "./Utilities/database.js";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import pig from "./assets/favicon.png"


function App() {
    // console.log(monsters)

    const hitList = monsters.map((el,index) => {
        return(


            // <div id={"Card"} key={index} style={{border: "blue 2px solid", marginBottom:"5px"}}>
            //     <h2>First Name: {el.fname}</h2>
            //     <h3>Last Name: {el.lname}</h3>
            //     <p>Age: {el.age}</p>
            //     <p>More Info: {el.moreInfo}</p>
            // </div>

        <Card id={"Card"} key={index} style={{border: "black 1.5px solid", marginBottom:"5px", width: "20rem"}}>
            <img
            alt="sample"
            src={pig}
            />
            <CardBody>
                <CardTitle tag="h5">
                    Name: {el.fname} {el.lname}
                </CardTitle>
                <CardSubtitle
                >Age: {el.age}
                </CardSubtitle>
                <CardText>
                    More Info: {el.moreInfo}
                </CardText>
            </CardBody>
        </Card>
        )
    })

  return (
    <>
        <h1>Fake Database</h1>
        {hitList}
    </>
  )
}

export default App
