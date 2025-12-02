function Status({isOnline}) {   
    return(
        <div className="main">
            <h2>{isOnline ? 
            "text-green-500":
            "text-red-500"}
            Status: {isOnline ? "Online" : "Offline"}
            </h2>
            </div>
           
    );

}
export default Status;