import { useState } from 'react'
import { Image } from 'next/image'
import { Container } from '@/components/Container'
import { ProfileContainer } from '@/components/Profile'
import { Main } from '@/styles/home'

import {Favorite} from '@material-ui/icons'
import {Star} from '@material-ui/icons'
import {EmojiEmotions} from '@material-ui/icons'
import {Email} from '@material-ui/icons'
import {MenuBook} from '@material-ui/icons'
import {PhotoCamera} from '@material-ui/icons'
import {Videocam} from '@material-ui/icons'
import {Bookmark} from '@material-ui/icons'

export default function Home() {
  const user = {
    name: 'xSallus',
    avatar: 'https://github.com/xSallus.png',
    counts: {
      recados: 0,
      photos: 0,
      videos: 0,
      fans: 0,
      msgs: 0
    }
  }

  const [communities, setCommunities] = useState([])
  const [friends, setFriends] = useState([])

  return (
    <Main>
      <div className="profileArea">
        <ProfileContainer user={user} />
      </div>
      <div className="contentArea">
        <Container>
          <h1>{`Welcome, ${user.name}`}</h1>
          <p><span>Today&#39;s luck: </span>The best future prophet is the past.</p>
          <div className="statsArea">
            <div>
              <p>Recados</p>
              <div className="wrapper" >
                <span>{user.counts.recados}</span>
                <MenuBook />
              </div>
            </div>
            <div>
              <p>Photos</p>
              <div className="wrapper" >
                <span>{user.counts.photos}</span>
                <PhotoCamera />
              </div>
            </div>
            <div>
              <p>Videos</p>
              <div className="wrapper" >
                <span>{user.counts.videos}</span>
                <Videocam />
              </div>
            </div>
            <div>
              <p>Fans</p>
              <div className="wrapper" >
                <span>{user.counts.fans}</span>
                <Star />
              </div>
            </div>
            <div>
              <p>Messages</p>
              <div className="wrapper" >
                <span>{user.counts.msgs}</span>
                <Email />
              </div>
            </div>
            <div>
              <p>Trusty</p>
              <div>
                <EmojiEmotions />
                <EmojiEmotions />
                <EmojiEmotions />
              </div>
            </div>
            <div>
              <p>Nice</p>
              <div className="wrapper">
                <Bookmark />
                <Bookmark />
                <Bookmark />
              </div>
            </div>
            <div>
              <p>Sexy</p>
              <div className="wrapper">
                <Favorite />
                <Favorite />
                <Favorite />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="communityArea">
        <Container>
          <section>
            <h3>Communities</h3>
            <div>
              {
                (communities.length>0) ? communities.map(comm=>(
                  <Image key={comm.name} src={comm.pic} alt={comm.name} />
                )) : (
                  <p>No Communities yet&nbsp;&nbsp;&#59;&nbsp;&nbsp;&#95;&nbsp;&#59;&#41;</p>
                )
              }
            </div>
          </section>
        </Container>
        <Container>
          <section>
            <h3>Communities</h3>
            <div>
              {
                (friends.length>0) ? friends.map(fulano=>(
                  <Image key={fulano.name} src={fulano.pic} alt={fulano.name} />
                )) : (
                  <p>No friends yet&nbsp;&nbsp;&#59;&nbsp;&nbsp;&#95;&nbsp;&#59;&#41;</p>
                )
              }
            </div>
          </section>
        </Container>
      </div>
    </Main>
  )
}
