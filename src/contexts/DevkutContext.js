/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'

const DevkutContext = createContext({})

function DevkutProvider({children}) {
    const initialState = {
        name: 'Salomao',
        nick: 'xSallus',
        avatar: 'https://github.com/xSallus.png',
        gender: 'male',
        civil: 'Single',
        from: 'Brazil',
        counts: {
            recados: 0,
            photos: 0,
            videos: 0,
            fans: 0,
            msgs: 0
        },
        stats: {
            trusty: 0,
            nice: 0,
            sexy: 0
        }
    }

    const [user, setUser] = useState(initialState)
    
    const [isOpen, setIsOpen] = useState(false)

    const [communities, setCommunities] = useState([])
  
    const [friends, setFriends] = useState([])

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    function retrieveFriendsData(url) {

        fetch(`${url}/followers`)
        .then(res=>{ return res.json() })
        .then(ponse=>{
            const temp_friends = ponse.map(friend=>({
                id: friend.id,
                nick: friend.login,
                avatar: friend.avatar_url
            }))

            setFriends([...friends, ...temp_friends])
        })

        fetch(`${url}/following`)
        .then(res=>{ return res.json() })
        .then(ponse=>{
            const temp_friends = ponse.map(friend=>({
                id: friend.id,
                nick: friend.login,
                avatar: friend.avatar_url
            }))

            setFriends([...friends, ...temp_friends])
        })
    }

    function retrieveUserData() {
        const user_url = process.env.NEXT_PUBLIC_USER_URL
        
        let temp_user = {
            gender: 'male',
            civil: 'single',
            counts: {
                recados: 0,
                photos: 0,
                videos: 0,
                fans: 0,
                msgs: 0
            },
            stats: {
                trusty: 0,
                nice: 0,
                sexy: 0
            }
        }

        fetch(user_url)
        .then(res=>{ return res.json() })
        .then(ponse=>{
            setUser({
                ...temp_user,
                id: ponse.id,
                name: ponse.name,
                avatar: ponse.avatar_url,
                from: ponse.location,
                nick: ponse.login
            })
        })

        retrieveFriendsData(user_url)
    }

    function retrieveCommunityData() {
        const url = process.env.NEXT_PUBLIC_CMS_BASE_URL
        const token = process.env.NEXT_PUBLIC_CMS_TOKEN
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "query": `query {
                allCommunities {
                  id
                  title
                  pictureUrl
                }
            }` })
        })
        .then(res=>res.json())
        .then(ponse=>{
            const { allCommunities } = ponse.data
            setCommunities(allCommunities.map(comm=>({
                id: comm.id,
                picture: comm.pictureUrl,
                title: comm.title
            })))
        })
        // console.log(`${url}/${token}`)
    }

    useEffect(()=>{
        retrieveUserData()
        retrieveCommunityData()
    }, [])

    return (
        <DevkutContext.Provider value={{
            user,
            friends,
            communities,
            isOpen,
            toggleMenu
        }}>
            {children}
        </DevkutContext.Provider>
    )
}

export { DevkutProvider, DevkutContext }