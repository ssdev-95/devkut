/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { ProfileContainer } from '@/components/Profile'
import { Actions, Main, Stat, StatsWrapper, MHeader, BoxContainer, Box } from '@/styles/home'

import {Favorite} from '@material-ui/icons'
import {Star} from '@material-ui/icons'
import {EmojiEmotions} from '@material-ui/icons'
import {Email} from '@material-ui/icons'
import {MenuBook} from '@material-ui/icons'
import {PhotoCamera} from '@material-ui/icons'
import {Videocam} from '@material-ui/icons'
import {Bookmark} from '@material-ui/icons'

import { useDevkut } from '@/hooks'

export default function Home() {
  const { user, friends, communities } = useDevkut()

  return (
    <Main>
      <Menu />
      <div className="profileArea">
        <ProfileContainer />
      </div>
      <div className="contentArea">
        <Container>
          <MHeader>
            <h1>{`Welcome, ${user.name}`}</h1>
            <p><span>Today&#39;s luck: </span>The best future prophet is the past.</p>
          </MHeader>
          <div className="statsArea">
            <Stat>
              <p>Recados</p>
              <StatsWrapper>
                <MenuBook />
                <span>{user.counts.recados}</span>
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Photos</p>
              <StatsWrapper>
                <PhotoCamera />
                <span>{user.counts.photos}</span>
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Videos</p>
              <StatsWrapper>
                <Videocam />
                <span>{user.counts.videos}</span>
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Fans</p>
              <StatsWrapper>
                <Star />
                <span>{user.counts.fans}</span>
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Messages</p>
              <StatsWrapper>
                <Email />
                <span>{user.counts.msgs}</span>
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Trusty</p>
              <StatsWrapper>
                <EmojiEmotions className={user.stats.trusty===0?'':'active'} />
                <EmojiEmotions className={user.stats.trusty<2?'':'active'} />
                <EmojiEmotions className={user.stats.trusty>2?'active':''} />
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Nice</p>
              <StatsWrapper>
                <Bookmark  className={user.stats.nice===0?'':'active'} />
                <Bookmark  className={user.stats.nice===0?'':'active'} />
                <Bookmark  className={user.stats.nice===0?'':'active'} />
              </StatsWrapper>
            </Stat>
            <Stat>
              <p>Sexy</p>
              <StatsWrapper>
                <Favorite className={user.stats.sexy===0?'':'active'} />
                <Favorite className={user.stats.sexy===0?'':'active'} />
                <Favorite className={user.stats.sexy===0?'':'active'} />
              </StatsWrapper>
            </Stat>
          </div>
        </Container>
        <Container>
          <Actions>
            <h3>What you wanna do?</h3>
            <div>
              <button>
                <span>Create comunity</span>
              </button>
              <button>
                <span>Write deposition</span>
              </button>
              <button>
                <span>Leave a scrap</span>
              </button>
            </div>
            <form>
              <input type="text" placeholder="What will be the community name?" />
            </form>
          </Actions>
        </Container>
      </div>
      <div className="communityArea">
        <Container>
          <section>
            <h3>Communities&nbsp;<span>&#40;{communities.length}&#41;</span></h3>
            <BoxContainer>
              {
                (communities.length>0) ? communities.map(comm=>(
                  <Box key={comm.id}>
                    <img src={comm.pic} alt={comm.title} />
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
                (friends.length>0) ? friends.map(fulano=>(
                  <Box key={fulano.name}>
                    <img src={fulano.avatar} alt={fulano.name} />
                    <span>{`@${fulano.nick}`}</span>
                  </Box>
                )) : (
                  <p>No friends yet&nbsp;&nbsp;&#59;&nbsp;&nbsp;&#95;&nbsp;&#59;&#41;</p>
                )
              }
            </BoxContainer>
          </section>
        </Container>
      </div>
    </Main>
  )
}
