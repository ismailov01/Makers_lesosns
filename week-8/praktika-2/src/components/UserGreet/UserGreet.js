import React, { useState } from 'react';

const UserGreet = () => {
    const [isLoged, setLoged] = useState(true)
    
    return(
        <div>
            {
                isLoged && <h1>Welcome, boss!</h1>
            }
        </div>
    )


    // return (
    //     <div>
    //         {
    //             isLoged ? <h1>Welcome, boss!</h1> : <h1>Welcome, user!</h1>
    //         }
    //     </div>
    // )
    
    
    
    // let welcome 
    // if(isLoged){
    //     welcome = <h1>Welcome, boss!</h1>
    // } else{
    //     welcome = <h1>Welcome, user!</h1>
    // }
    // return(
    //     <div>
    //         {welcome}
    //     </div>
    // )



    // if(isLoged){
    //     return (
    //         <div>
    //             <h1>Welcome, BOSS!</h1>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <h1>Welcome, User!</h1>
    //         </div>
    //     );
    // }
    
    
};

export default UserGreet;