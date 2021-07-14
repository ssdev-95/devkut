/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/icons/logo.svg'
import { Nav, Wrapper } from '@/styles/header'
import { Search } from '@material-ui/icons'
import  { useDevkut } from '@/hooks'

function Header() {
    const  { user, isOpen, setIsOpen } = useDevkut()

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
                    <button>exit</button>
                    <label>
                        <button>
                            <Search />
                        </button>
                        <input type="text" placeholder="Search on Devkut" />
                    </label>
                </div>
                <div onClick={()=>setIsOpen(!isOpen)} className="to-show">
                   <span className={isOpen?'active box':'box'}>.</span>
                   <span className={isOpen?'active box':'box'}>.</span>
                   <span className={isOpen?'active box':'box'}>.</span>
                </div>
            </Wrapper>
        </Nav>
    )
}

export { Header }