import React, {useState, useEffect } from 'react'

const UserContext = React.createContext();



function UserProvider ({ children }) {
    // const [user, setUser] = useState(null)
    // const [loggedIn, setLoggedIn] = useState(false)
    // const [stories, setStories] = useState ({})

    // useEffect(() => {
    //     fetch('/me')
    //     .then(res => res.json())
    //     .then(data => {
    //         setUser(data)
    //         if (data.error) {
    //             setLoggedIn(false)
    //         } else {
    //             setLoggedIn(true)
    //             getStories()
    //         }
    //     })
    // }, [])

    // const getStories = () => {
    //     fetch('/stories')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setStories(data)
    //     })
    // }

    // const addStory = (story) => {
    //     fetch('/stories', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setStories([...stories, data])
    //     })
    // }

    // const login = (user) => {
    //     setUser(user)
    //     setLoggedIn(true)
    // }

    // const logout = () => {
    //     setUser({})
    //     setLoggedIn(false)
    // }

    // const signup = (user) => {
    //     setUser(user)
    //     setLoggedIn(true)
    // }

    return (
    <UserContext.Provider value={{}} >
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }

//This is what gives us global state.

{/* <UserContext.Provider value={{user, login, logout, signup, loggedIn, stories}} > */}