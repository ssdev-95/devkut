/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/icons/logo.svg'
import { Nav, Wrapper, Burger, Rect } from '@/styles/header'
import { Search } from '@material-ui/icons'
import  { useDevkut } from '@/hooks'

function Header() {
    const  { user, isOpen, toggleMenu, handleLogout } = useDevkut()

    return (
        <Nav>
            <Wrapper>
                <div>
                    <Image width="" height="" src={Logo} alt="Devkut" />
                    <div className="to-hide" >
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/">
                            <a>Profile</a>
                        </Link>
                        <Link href="/">
                            <a>Recados</a>
                        </Link>
                        <Link href="/">
                            <a>Friends</a>
                        </Link>
                        <Link href="/">
                            <a>Communities</a>
                        </Link>
                    </div>
                </div>
                <div className="to-hide" >
                    <span>{`@${user.nick}`}</span>
                    <button onClick={handleLogout}>exit</button>
                    <label>
                        <button>
                            <Search />
                        </button>
                        <input type="text" placeholder="Search on Devkut" />
                    </label>
                </div>
                <Burger onClick={toggleMenu} >
                   <Rect className={isOpen?'active':''}>.</Rect>
                   <Rect className={isOpen?'active':''}>.</Rect>
                   <Rect className={isOpen?'active':''}>.</Rect>
                </Burger>
            </Wrapper>
        </Nav>
    )
}

export { Header }