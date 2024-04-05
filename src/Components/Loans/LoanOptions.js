
function LoanOptions() {
    return (
        <>
            <div className="main-body">
                <div className="nav-btn">
                <h1>Please Choose according to your Account Type :</h1>
                    <button type="button" class="btn btn-primary btn-lg"> <a href="/CustomerSavingLoans"> Saving Accounts </a></button><br/>
                    <button type="button" class="btn btn-primary btn-lg"> <a href="/CustomerCurrentLoans"> Current Accounts </a> </button><br/>
                   
                </div>
            </div>


        </>
    )
}
export default LoanOptions;
