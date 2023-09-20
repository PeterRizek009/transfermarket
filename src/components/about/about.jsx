import React from "react";
import './about.css'


const About = () => {
    return (<>
        <h1 className="text-center mt-5 title">Abou <span> WIKI Search</span> APP</h1>
        <div className="w-100 mt-5 mx-auto container">
            <div className="about">
            <div className="item">
                    <h5 className="mx-3">About Transfer market APP</h5>
                    <p className="mx-auto pt-5">Transfers market app is a tool to display the latest 
                    football player transfer in the top European league</p>
                </div>
                <div className="item">
                    <h5 className="mx-3">Technologies used</h5>
                    <ul className="mx-4">
                        <li> React JS</li>
                        <li>HTML</li>
                        <li>Axios</li>
                        <li>CSS</li>
                        <li>Bootstrap 5</li>
                    </ul>
                </div>
                <div className="item">
                    <h5 className="mx-3">Follow me on</h5>
                    <section className="mx-auto" >
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/peter-rezik-a84408123/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/PeterRizek009" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                    </section>
                </div>
             
                <div className="item">
                <h5 className="mx-3">My portfolio</h5>
                </div>
            </div>
        </div>
    </>);
}

export default About;