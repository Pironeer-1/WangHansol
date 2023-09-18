function Card(props) {
    const { title, backgroundColor, children } = props
    
    return (
        <div
            style={
                {
                    margin: 8,
                }
            }
            >

            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;