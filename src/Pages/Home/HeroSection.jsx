export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey there<span class="wave-hand">👋🏻</span>,I'm Ankit</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">FrontEnd</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <div>  
                   <dotlottie-player src="https://lottie.host/e3442b41-eb3e-405f-9e55-04e71db31cd0/l2LiPRsDx5.json" background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
                </div>
            </div>
        </section>
    )
}