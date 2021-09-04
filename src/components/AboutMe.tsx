export default function AboutMe() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', height: '100%'}}>
            <h1>
                I am a <span>software architect</span> passionate about <i>web development</i> and <i><label>frontend desgin</label></i>.
            </h1>
            <h2 style={{color: "#48484a"}}>
                Besides programming, I enjoy 📸, 🚴‍♂️, good 🍷 and outdoor 🌿.
            </h2>
            <h1 style={{marginTop: '60px'}} >
                <label>Please feel free to explore some of my creations on this page.</label>
            </h1>
        </div>
    )
}
