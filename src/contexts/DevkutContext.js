import { createContext, useState } from 'react'

const DevkutContext = createContext({})

function DevkutProvider({children}) {
    const [user, setUser] = useState({
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
    })
    
    const [isOpen, setIsOpen] = useState(false)

    const [communities, setCommunities] = useState([
        {
            id: '12802378123789378912789789123896123', 
            title: 'Eu odeio acordar cedo',
            pic: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
          }
    ])
  
    const [friends, setFriends] = useState([
        {
            name: 'Diego Fernandes',
            avatar: 'https://github.com/diego3g.png',
            nick:'diego3g'
        },
        {
            name: 'Theo Nejm',
            avatar: 'https://github.com/Theo-Nejm.png',
            nick:'Theo-Nejm'
        },
        {
            name: 'Rickelme Dias',
            avatar: 'https://github.com/RickelmeDias.png',
            nick:'RickelmeDias'
        },
        {
            name: 'Fabio Lima Diogenes',
            avatar: 'https://github.com/fabiolimadiogenes.png',
            nick:'fabiolimadiogenes'
        },
        {
            name: 'Mateus V. Farias',
            avatar: 'https://github.com/fariasmateuss.png',
            nick:'fariasmateuss'
        },
        {
            name: 'Carlos Miguel',
            avatar: 'https://github.com/solrachix.png',
            nick:'solrachix'
        },
        {
            name: 'Sampaio Leal',
            avatar: 'https://github.com/SampaioLeal.png',
            nick: 'SampaioLeal'
        }
    ])

    return (
        <DevkutContext.Provider value={{
            user,
            friends,
            communities,
            isOpen,
            setIsOpen
        }}>
            {children}
        </DevkutContext.Provider>
    )
}

export { DevkutProvider, DevkutContext }