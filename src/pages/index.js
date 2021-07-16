/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from 'react'
// import  { useRouter } from 'next/router'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { Menu } from '@/components/Menu'
import { ProfileContainer } from '@/components/Profile'
import { ContentContainer } from '@/components/Content'
import { CommunityContainer } from '@/components/Community'
import { Main } from '@/styles/home'

import { useDevkut } from '@/hooks'

export default function Home(props) {
  const { isOpen } = useDevkut()
  // const router = useRouter()

  return (
    <Main>
      {
        isOpen ?
        (<Menu />) :
        (
          <>
            <div className="profileArea">
              <ProfileContainer />
            </div>
            <div className="contentArea">
              <ContentContainer />
            </div>
            <div className="communityArea">
              <CommunityContainer />
            </div>
          </>
        )
      }
    </Main>
  )
}

export async function getServerSideProps(ctx) {
  const {AUTH_TOKEN} = nookies.get(ctx, 'AUTH_TOKEN')
  const {githubuser} = jwt.decode(AUTH_TOKEN)
  console.log('token: ',githubuser)

  return {
    props: { }
  }
}