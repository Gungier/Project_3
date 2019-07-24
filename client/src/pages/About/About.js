import React from "react";
import "./About.css";


function About() {
    return(
        <div>

            <h1> Meet the Team</h1>

{/* Rons Bio */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./images/ron_headshot.jpg" className="img-fluid z-depth-1 rounded-circle headshot overlay"
                            lt="Responsive image" />
                    </div>
                    <div className="col ron">
                        <h2>Ron</h2>
                        <h6 className="bio">After more than three decades in the information technology field in mostly marketing, sales and management roles, Ron Seide decided that it might be time to actually work for a living. So he joined a full stack web development bootcamp to build a few sites and finally understand what software developers have been taking about for all these years. Ron is particularly interested in user experience and his portfolio and GitHub pages may be found at the links below.
                         </h6>
                        <a href="https://github.com/ronseide" target="_blank">Ron's Github</a> <br/>
                        <a href="https://www.w3schools.com/" target="_blank">Ron's Portfolio</a>
                    </div>
                </div>
            </div>
            <hr/>

            {/* Gabes Bio */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./images/gabe_headshot.jpg" className="img-fluid z-depth-1 rounded-circle headshot overlay"
                            lt="Responsive image" />
                    </div>
                    <div className="col gabe">
                        <h2>Gabe</h2>
                        <h6 className="bio">Gabriel Ungier has a background in medicine, psychology, and vision.  His interests include painting, crafting, puzzles, playing with new technology and above all software development.  He truly enjoys figuring out challenges that invariable arise with all aspects of technology.  On top of all his other pleasures he is a father of two active children and a husband to a loving and beautiful wife.  As a family we find important to drop tech for periods of time and enjoy the gifts of the real world.  </h6>
                        <a href="https://github.com/ronseide" target="_blank">Gabes's Github</a> <br/>
                        <a href="https://www.w3schools.com/" target="_blank">Gabes's Portfolio</a>
                    </div>
                </div>
            </div>
            <hr/>

            {/* Nicoles Bio */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./images/nicole_headshot.jpg" className="img-fluid z-depth-1 rounded-circle headshot overlay"
                            lt="Responsive image" />
                    </div>
                    <div className="col nicole">
                        <h2>Nicole</h2>
                        <h6 className="bio">Nicole is a graduate of Kent State University, where she received a Bachelor of Arts in Visual Communication Design and a minor in Business Advertising. After receiving her degree, she pursued her dream of software development  at Case Western Reserve University where she is currently enrolled in the Full  Stack Development Bootcamp. She strives to continue expanding her education and get involved in the software industry. 
</h6>
                        <a href="https://github.com/ronseide" target="_blank">Nicole's Github</a> <br/>
                        <a href="https://www.w3schools.com/" target="_blank">Nicole's Portfolio</a>
                    </div>
                </div>
            </div>

            <hr/>

{/* Dans Bio */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./images/dan_headshot.jpg" className="img-fluid z-depth-1 rounded-circle headshot overlay"
                            lt="Responsive image" />
                    </div>
                    <div className="col dan">
                        <h2>Dan</h2>
                        <h6 className="bio">Case Western Reserve University Full Stack Coding Bootcamp graduate.  After spending many years in a warehouse position, decide to try something different.  I had a passion for coding ever since High School, but never actually fulfilled it until now.  Very excited to start a new chapter in my life and do what I always wanted to do.  Looking to transition into web development career. Long time Lakewood, Ohio resident.  Outside of work, I enjoy spending time with my family and friends</h6>
                        <a href="https://github.com/ronseide" target="_blank">Dan's Github</a> <br/>
                        <a href="https://www.w3schools.com/" target="_blank">Dan's Portfolio</a>
                    </div>
                </div>
            </div>

            <hr/>
            {/* Russels Bio */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./images/russel_headshot.jpg" className="img-fluid z-depth-1 rounded-circle headshot overlay"
                            lt="Responsive image" />
                    </div>
                    <div className="col russel">
                        <h2>Russel</h2>
                        <h6 className="bio">Russell Stack grew up in Cleveland Heights and attended a local private school before going to Lehigh University’s Business School. He graduated with a Bachelor's Degree in Finance with a focus on financial economics, and minors in Entrepreneurship and Chinese. Russell has had a lifelong fascination with computers and programming, and has attended bootcamps for both the Python and Javascript programming languages. Cryptocurrencies and Blockchain technology have also been areas of interest for Russell as both a mining and trading participant in the Ethereum ecosystem.</h6>
                        <a href="https://github.com/ronseide" target="_blank">Russel's Github</a> <br/>
                        <a href="https://www.w3schools.com/" target="_blank">Russel's Portfolio</a>
                    </div>
                </div>
            </div>
       
    
   
       

        </div>

    );
}

export default About;