import React from 'react'

const Home = () => {

        return (
            <div>
                <h1>Home</h1>               
            </div>
        )
}

export default Home

// import React, { useContext } from 'react'
// import { UserContext } from './context/user'
// import React from 'react'

// const Home = () => {
//     const { user, loggedIn  } = useContext(UserContext)

//     if( loggedIn ) {
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <h3>{user.username}'s Home Page</h3>
                
//             </div>
//         )
//     } else {
//         return (<h3>Please Login or Signup</h3>)
//     }

// }

// export default Home