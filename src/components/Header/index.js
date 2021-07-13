/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import DevkutIcon from '@/icons/logo.svg'
import { Nav, Wrapper } from '@/styles/header'
import { Search } from '@material-ui/icons'

function Header() {
    const name= "xSallus"

    return (
        <Nav>
            <Wrapper>
                <div>
                    <Image src={DevkutIcon} alt="Devkut" />
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
                <div>
                    <span>{name}</span>
                    <button>exit</button>
                    <label>
                        <button>
                            <Search />
                        </button>
                        <input type="text" placeholder="Search on Devkut" />
                    </label>
                </div>
            </Wrapper>
        </Nav>
    )
}

export { Header }