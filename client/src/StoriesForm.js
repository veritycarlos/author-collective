// import React, { useState } from 'react'
// import { UserContext } from './context/user'


// const StoriesForm = ({ addStory }) => {
//     const [name, setName] = useState("")
//     const [language, setLanguage] = useState("")
//     const [usage, setUsage] = useState("")
//     const { addStory } = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         addStory({
//             name: name, 
//             language: language,
//             usage: usage
//         })
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name: </label>
//             <input 
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             /> <br/>
//             <label>Language: </label>
//             <input 
//                 type="text"
//                 id="language"
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//             /> <br/>
//             <label>Usage: </label>
//             <input 
//                 type="text"
//                 id="usage"
//                 value={usage}
//                 onChange={(e) => setUsage(e.target.value)}
//             /> <br />
//             <input type="submit" />
//         </form>
//     )
// }

// export default StoriesForm