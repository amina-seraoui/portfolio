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
import useScroll from '../js/hooks/useScroll'
import useAge from '../js/hooks/useAge'

const Home = () => {
    let age = useAge('11/22/1997')
    // useScroll()
    return <>
        <Head>
            <title>Amina Seraoui | Home</title>
            <meta name="description" content="Portfolio d'Amina Seraoui"/>
            <link rel="shortcut icon" href="/assets/img/dark-logo.svg" type="image/x-icon"/>
        </Head>
        <SocialsBar />
        <main id="home" data-scroll-container="">
            {/* première section */}
            <Hero image="header-moon.png">
                <AnimatedStars />
                <Header />
                <div className="container" data-scroll="" data-scroll-speed="5">
                    <h1 data-scroll="" data-scroll-speed="-7">
                        <TypingText
                            texts={[
                                'Hello !',
                                'I\'m Amina Seraoui',
                                'I\'m a ' + age + ' years old french developer',
                                'Enjoy your visit !'
                            ]}
                            replaces={[
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /I'?m?/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'text',
                                    action: 'replace',
                                    what: 'french',
                                    by: '<i class="em em-flag-cp"></i>'
                                },
                                {
                                    type: 'text',
                                    action: 'add',
                                    what: 'Enjoy your visit !',
                                    by: ' <i class="em em-rocket"></i>'
                                }
                            ]}
                        />
                    </h1>
                    <a href="#contact" className="btn secondary">Contact me</a>
                </div>
            </Hero>
            {/* deuxième section */}
            <About age={age}/>
            {/* troisième section */}
            <Skills>
                {
                    [
                        {
                            label: 'HTML5',
                            value: 100
                        },
                        {
                            label: 'Css3',
                            value: 100
                        },
                        {
                            label: 'Javascript',
                            value: 85
                        },
                        {
                            label: 'React',
                            value: 75
                        },
                        {
                            label: 'Figma',
                            value: 60
                        },
                        {
                            label: 'Photoshop',
                            value: 50
                        },
                        {
                            label: 'php',
                            value: 95
                        },
                        {
                            label: 'Symfony',
                            value: 75
                        }
                    ]
                }
            </Skills>
            {/* quatrième section */}
            <Works />
            {/* cinquième section */}
            <Contact />
            {/* sixième section */}
            <Footer />
        </main>
    </>
}

export default Home