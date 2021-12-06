import React, { useState } from 'react';

const UserGreet = () => {
    const [isloged, setLog] = useState(false)
    


    return (
        <div>
            {
                isloged && <h1>Welcome Kuba</h1>
            }
        </div>
    )













    // return(
    //     <div>
    //         {
    //             isloged ? <h1>Welcome Kuba</h1> : <h1>Welcome user</h1>
    //         }
    //     </div>
    // )


    // let welcome 
    // if(isloged) {
    //     welcome = <h1>Welcome,Kuba!</h1>
    // } else{
    //     welcome = <h1>Welcome User!</h1>
    // }
    // return(
    //     <div>{welcome}</div>
    // )
    
};

export default UserGreet;