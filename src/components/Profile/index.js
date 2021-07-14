/* eslint-disable @next/next/no-img-element */
import { useDevkut } from "@/hooks";
import { Container } from "@/components/Container";

import { Avatar, User, UserInfos, Wrapper } from "@/styles/profile";

import { Email } from "@material-ui/icons";
import { MenuBook } from "@material-ui/icons";
import { PhotoCamera } from "@material-ui/icons";
import { ViewList } from '@material-ui/icons';
import { Settings } from '@material-ui/icons';
import { DynamicFeed } from '@material-ui/icons';
import { Videocam } from "@material-ui/icons";
import { Bookmark } from "@material-ui/icons";
import { Queue } from "@material-ui/icons";

function ProfileContainer() {
  const { user } = useDevkut();

  return (
    <Container>
      <Avatar src={user.avatar} alt={`${user.name} picture`} />
      <User>
        <h3>{`@${user.nick}`}</h3>
        <p>{user.gender}</p>
        <p>{user.civil}</p>
        <p>{user.from}</p>
      </User>
      <UserInfos>
        <Wrapper>
          <Bookmark />
          <span>Profile</span>
        </Wrapper>
        <Wrapper>
          <Email />
          <span>Messages</span>
        </Wrapper>
        <Wrapper>
          <PhotoCamera />
          <span>Photos</span>
        </Wrapper>
        <Wrapper>
          <Videocam />
          <span>Videos</span>
        </Wrapper>
        <Wrapper>
          <MenuBook />
          <span>Depositions</span>
        </Wrapper>
      </UserInfos>
      <UserInfos>
        <h3>Apps</h3>
        <Wrapper className="reset">
          <Queue />
          <span>Add apps</span>
        </Wrapper>
      </UserInfos>
      <UserInfos>
        <Wrapper>
          <ViewList />
          <span>Lists</span>
        </Wrapper>
        <Wrapper>
          <DynamicFeed />
          <span>Updates</span>
        </Wrapper>
        <Wrapper>
          <Settings />
          <span>Settings</span>
        </Wrapper>
      </UserInfos>
    </Container>
  );
}

export { ProfileContainer };
