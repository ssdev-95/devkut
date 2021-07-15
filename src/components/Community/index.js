/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useDevkut } from '@/hooks'
import { Container } from '@/components/Container'
import { BoxContainer, Box } from '@/styles/home'

function CommunityContainer() {
    const { friends, communities } = useDevkut()

    const [someFriends, setSomeFriends] = useState([])
    const [someCommunities, setSomeCommunities] = useState([])

    useEffect(()=>{
      communities.length>9 ? setSomeCommunities(communities.slice(0, 9)) : setSomeCommunities([...communities])
      friends.length>9 ? setSomeFriends(friends.slice(0, 9)) : setSomeFriends([...friends])
    }, [friends, communities])

    return (
       <>
         <Container>
          <section>
            <h3>Communities&nbsp;<span>&#40;{communities.length}&#41;</span></h3>
            <BoxContainer>
              {
                (someCommunities.length>0) ? someCommunities.map(comm=>(
                  <Box key={comm.id}>
                    <img src={comm.picture} alt={comm.title} />
                    <span>{comm.title}</span>
                  </Box>
                )) : (
                  <p>No Communities yet&nbsp;&nbsp;&#59;&nbsp;&nbsp;&#95;&nbsp;&#59;&#41;</p>
                )
              }
            </BoxContainer>
          </section>
        </Container>
        <Container>
          <section>
            <h3>Friends&nbsp;<span>&#40;{friends.length}&#41;</span></h3>
            <BoxContainer>
              {
                (someFriends.length>0) ? someFriends.map(fulano=>(
                  <Box key={fulano.id}>
                    <img src={fulano.avatar} alt={fulano.nick} />
                    <span>{`@${fulano.nick}`}</span>
                  </Box>
                )) : (
                  <p>No friends yet&nbsp;&nbsp;&#59;&nbsp;&nbsp;&#95;&nbsp;&#59;&#41;</p>
                )
              }
            </BoxContainer>
          </section>
        </Container>
       </> 
    )
}

export { CommunityContainer }