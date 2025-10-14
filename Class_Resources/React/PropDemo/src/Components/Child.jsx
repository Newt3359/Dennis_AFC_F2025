function Child({myChildren}) {

let results = Array.isArray(myChildren)
    ? myChildren.map((el,i) => <p key={i}>My child is: {el}</p>)
    :<p>My child is: {myChildren}</p>;



    return (
        <>
            <h1 className="child">I am child</h1>
            <p>These are the children</p>
            {results}
        </>
    )
}

export default Child