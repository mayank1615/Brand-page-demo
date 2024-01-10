const HeroSection = () => {
 return <div className="container">
    <main className="hero">
    <div className="hero-content">
    <h1>YOUR FEET DESERVE THE RESPECT</h1>
    <p>
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
        OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
        OUR SHOES.
    </p>
    <div className="hero-btn">
    <button>Shop Now</button>
    <button className="sec-btn">Category</button>
    </div>
    <div className="shopping">
        <p>Also Available On</p>
        <div className="brand-icons">
            <img src="amazon.png" alt="amazon" />
           <img src="flipkart.png" alt="flipkart" />
        </div>
    </div>
    </div>
    <div className="hero-img">
    <img src="shoes.png" alt="shoes" />
    </div>
    </main>
</div>
}

export default HeroSection;