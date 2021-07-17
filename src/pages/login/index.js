/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import Image from 'next/image'
import { LoginScreen, Container, LogoArea, FormArea, FooterArea } from "@/styles/login";
import DevkutLogo from '@/icons/logo.svg'

export default function LoginPage() {
  const router = useRouter()
  const [ githubUser, setGithubUser ] = useState('username')

  return (
    <LoginScreen>
      <Container>
        <LogoArea>
            <Image width="" height="" src={DevkutLogo} alt="Devkut logo" />

            <p><span>Connect</span> to your friends and parentes</p>
            <p><span>Meet</span> new fiends between the friends of your friends and parent</p>
            <p><span>Share</span> your videos, nudes and passions in one place</p>
        </LogoArea>
        <FormArea className="box">
            <form onSubmit={(event)=>{
                event.preventDefault()

                if(githubUser.trim()==='') {
                    throw new Error('Err 666: Invalid user')
                }

                fetch('https://alurakut.vercel.app/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({githubUser: githubUser})
                }).then(async (res) => {
                  const { token } = await res.json()
                  
                  console.log(token)
                  
                  nookies.set(null, 'AUTH_TOKEN', token, {
                    path: '/',
                    maxAge: 3600*24*7
                  })

                  router.push('/')
                })

            }}>
                <p>Access right now with your <span>GitHu</span> username</p>
                <input
                  value={githubUser}
                  placeholder="Github username"
                  onChange={(e)=>setGithubUser(e.target.value)}
                />
                {
                    githubUser.trim()==='' ?
                    'Fill the field above' :
                    ''
                }

                <button >login</button>
            </form>
            <footer className="box">
                <p>Not a member? <br/> <a href="/login">join now</a></p>
            </footer>
        </FormArea>
        <FooterArea>
            <p>&copy; 2021 xSallus -
                &nbsp;<a href="/">About Devkut</a>
                &nbsp;<a href="/">Safety center</a>
                &nbsp;<a href="/">Policy</a>
                &nbsp;<a href="/">Terms of use</a>
                &nbsp;<a href="/">Contact us</a>
            </p>
        </FooterArea>
      </Container>
    </LoginScreen>
  );
}
