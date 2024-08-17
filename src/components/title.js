

function Title(props){
    return(
        <>
            <h1 
                className={`${props.textPosition} mb-4 ${props.textColor}`}
                >{props.title}</h1>
        </>
    )
}

export default Title;