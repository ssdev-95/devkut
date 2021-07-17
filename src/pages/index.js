/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { Menu } from '@/components/Menu'
import { ProfileContainer } from '@/components/Profile'
import { ContentContainer } from '@/components/Content'
import { CommunityContainer } from '@/components/Community'
import { Main } from '@/styles/home'

import { useDevkut } from '@/hooks'

export default function Home({githubUser}) {
  const { isOpen,retrieveUserData, retrieveCommunityData } = useDevkut()

  useEffect(()=>{
    retrieveUserData(githubUser)
    retrieveCommunityData()
  }, [])

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
  const decoded = jwt.decode(AUTH_TOKEN)
  const githubUser = decoded?.githubUser

  if (!githubUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      githubUser
    }
  }
}