import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Flag from './Flag'
import {useEffect, useState} from 'react'

const Header = () => {
    const {locales} = useRouter()
    const [scroll, setScroll] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 0) setScroll(true)
        else setScroll(false)
    }

    useEffect(() => {
        handleScroll()
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return <header>
        <nav className={'navbar' + (scroll ? ' scroll' : '')}>
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href="/" passHref>
                <a>
                    <Image
                        src="/assets/img/logo.svg"
                        alt="Logo Amina Seraoui"
                        width={42}
                        height={42}
                    />
                </a>
            </Link>
            <div className="links">
                <div className="flags">
                    {
                        locales.map(l => <Flag key={l} locale={l} />)
                    }
                </div>
                <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
            </div>
        </nav>
    </header>
}

export default Header
