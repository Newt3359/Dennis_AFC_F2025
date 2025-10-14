import Child from "./Child.jsx";

function Parent(props) {

    let children = ["John","June", "Jack", "Jenn"]

    const {dog1, dog2} = props

    return (
        <>
            <h1 className="parent">I am parent</h1>
            <p>{dog1}</p>
            <p>{dog2}</p>
            <Child myChildren = {children}/>
        </>
    )
}

export default Parent