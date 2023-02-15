const About = () => {

    return (
        <footer data-testid='about' className="about">
            <hr />
            <h1>About</h1>
            <div className="row justify-content-between align-items-center mt-5">
                <div className="col-4 text-start">
                    <p data-testid='disclaimer-personal'>This site is a project for personal usage and part of my CV. This is not commercial product. Any interest and inquiries can be conveyed over my <a href="https://github.com/ReimaLuoma" alt="link to github profile of Reima Luoma">Github</a> page.</p>
                    <p data-testid='copyright'>&#169; Copyright by Reima Luoma 2022-2023</p>
                </div>
                <div className="col-8 d-flex flex-column align-items-end">
                    <div className="col-6 pb-5">
                        <a href="https://www.themoviedb.org/">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="themoviedb.org"></img>
                        </a>
                    </div>
                        
                    <p data-testid='disclaimer-tmdb'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                </div>
            </div>
        </footer>
    )
    
};

export default About;