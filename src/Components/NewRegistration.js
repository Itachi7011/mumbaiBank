
function NewRegistration() {
    return (
        <>
            <div className="main-body">
                <div className="nav-btn">
                <h1>Please Choose One Of Them :</h1>
                    <button type="button" class="btn btn-primary btn-lg"> <a href="/NewConsumerRegistration"> Consumer  </a></button><br/>
                    <button type="button" class="btn btn-primary btn-lg"> <a href="/NewEmpRegistration"> Bank Employee </a> </button><br/>
                    
                </div>
            </div>


        </>
    )
}
export default NewRegistration;