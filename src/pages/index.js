import Head from 'next/head'
import SocialsBar from '../js/components/Home/SocialsBar'
import Header from '../js/components/Header'
import Hero from '../js/components/Home/Hero'
import TypingText from '../js/components/TypingText'
import About from '../js/components/Home/About'
import Skills from '../js/components/Home/Skills'
import Works from '../js/components/Home/Works'
import Contact from '../js/components/Home/Contact'
import Footer from '../js/components/Footer'
import AnimatedStars from '../js/components/AnimatedStars'
import useGetAge from '../js/hooks/useGetAge'
import {useState, useEffect} from 'react'
import Alerts from '../js/components/Alerts'
import Link from 'next/link'
import {FormattedMessage, useIntl} from 'react-intl'
import ScrollDown from '../js/components/ScrollDown'

const Home = ({ dir }) => {
    let age = useGetAge('11/22/1997')
    const [createAlert, setCreateAlert] = useState(() => {})
    const intl = useIntl()
    const heroTexts = [
        intl.formatMessage({ id: 'hero.hello', defaultMessage: ' Hello World !' }),
        intl.formatMessage({ id: 'hero.whoami', defaultMessage: 'I\'m Amina Seraoui' }),
        intl.formatMessage({
            id: 'hero.about',
            defaultMessage: "I'm a {age} year old french developer"
        }, {age}),
        intl.formatMessage({ id: 'hero.enjoy', defaultMessage: 'Enjoy your visit !' })
    ]

    const [tabs, setTabs] = useState([])
    const [works, setWorks] = useState([])
    const limit = 6

    useEffect(() => {
        fetch('/api/works?limit=' + limit)
            .then(res => res.json())
            .then(res => {
                setTabs(res.tabs)
                setWorks(res.works)
            })
            .catch(err => console.error(err))
    }, [])

    return <>
        <Head>
            <title>Amina Seraoui | Home</title>
            <meta name="description" content="Portfolio d'Amina Seraoui"/>
        </Head>
        <SocialsBar />
        <Alerts setCreateAlert={setCreateAlert}/>
        <main id="home">
            {/* première section */}
            <Hero image="/assets/img/header-moon.png">
                <AnimatedStars />
                <Header />
                <div className="container" style={{alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start'}}>
                    <h1 dir={dir}>
                        <TypingText
                            texts={heroTexts}
                            replaces={[
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /Am?i?n?a?/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /السلام/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /الله/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /أمينة/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /مطورة/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /ويب/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: / d[ée]?v?e?l?o?p?((p?e?u?s?e?)(e?r?))/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'text',
                                    action: 'replace',
                                    what: 'french',
                                    by: '<i class="em-svg em-flag-cp"></i>'
                                },
                                {
                                    type: 'text',
                                    action: 'add',
                                    what: heroTexts[3],
                                    by: ' <i class="em-svg em-rocket"></i>'
                                },
                                {
                                    type: 'text',
                                    action: 'add',
                                    what: heroTexts[0],
                                    by: ' <i class="em-svg em-wave" />'
                                },
                            ]}
                        />
                    </h1>
                    <Link href="#contact" passHref>
                        <button className="btn secondary">
                            <FormattedMessage id="btn.contact" defaultMessage="Contact me" />
                        </button>
                    </Link>
                </div>
                <ScrollDown />
            </Hero>
            {/* deuxième section */}
            <About age={age}/>
            {/* troisième section */}
            <Skills>
                {
                    [
                        {
                            label: 'SCSS',
                            value: 85
                        },
                        {
                            label: 'Symfony',
                            value: 70
                        },
                        {
                            label: 'React JS',
                            value: 75
                        }
                    ]
                }
            </Skills>
            {/* quatrième section */}
            <Works tabs={tabs} works={works}/>
            {/* cinquième section */}
            <Contact createAlert={createAlert} />
            {/* sixième section */}
            <Footer />
        </main>
    </>
}

export default Home
