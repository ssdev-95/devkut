import { Menu } from '@/components/Menu'
import { ProfileContainer } from '@/components/Profile'
import { ContentContainer } from '@/components/Content'
import { CommunityContainer } from '@/components/Community'
import { Main } from '@/styles/home'

import { useDevkut } from '@/hooks'

export default function Home() {
  const { isOpen } = useDevkut()

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
