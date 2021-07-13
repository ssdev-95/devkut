/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/Container'

function ProfileContainer({ user }) {

    return (
        <Container>
          <img src={user.avatar} alt={`${user.name} picture`} />
        </Container>
    )
}

export { ProfileContainer }