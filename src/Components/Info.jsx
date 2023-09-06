

const Info = ({name, biography}) => {

    return <>
        <div className="container mt-5 info">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">Hola!</h2>
                    <p>Mi nombre es <strong>{name}</strong>. </p>
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">Biografía</h2>
                    <p> {biography} </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis id quam tincidunt eleifend.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Info;