import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import hero from './Images/hero.png';
import about from './Images/about.png';
import decor from './Images/spark.svg'
import useStyles from './style'

const Home = () => {
    const classes = useStyles();
    return (
        <div className="container">
            {/* hero section */}
            <div className="row">
                <div className="col" >
                    <div className={classes.title}>
                        <p>Find your next</p>
                        <TypeWriterEffect
                            textStyle={{ color: "#C996CC", fontSize: "60px", fontWeight: "bold" }}
                            startDelay={0}
                            cursorColor="#C996CC"
                            multiText={['CODE!!_', 'GUIDANCE!!_', 'BIG IDEA!!_', 'PROJECT!!_',]}
                            multiTextDelay={1000}
                            typeSpeed={50}
                        />
                    </div>
                    <div className={classes.content}>
                        Hackathons are a great place to learn, build, discover new ideas and make new friends. Dive right in ;)
                    </div>
                </div>
                <div className="col">
                    <img alt="" src={hero} />
                </div>
            </div>
            <br />
            <div className={classes.start}>
                <img alt="" style={{ width: "50pc" }} src={decor} />
                <p>We go and grow together😉</p>
            </div>
            <br />
            {/* ABOUT SECTION */}
            <div className="row">
                <div className="col">
                    <img alt="" style={{ width: "500px" }} src={about} />
                </div>
                <div className="col">
                    <div className={classes.about}>
                        <p>All in one....
                            <span style={{ color: "#FFA0A0" }}>
                                {/* <Typewriter
                        words={[' What?', ' When?', ' How?', ' Where?']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /> */}
                            </span>
                        </p>
                    </div>
                    <p className={classes.content2}>
                        This is a place where you can find previous hackerthons project ideas , code , hackerthon details , main source of idea , suggestions, guidance for your projects and many more ...
                        What are you waiting for start interacting with our hackers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
