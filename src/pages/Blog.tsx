import React from 'react';

const Blog: React.FC = () => {
    return (
        <div>
            <h1>Brewed Awakenings Blog</h1>
            <p>Welcome to our blog! Here you'll find articles about coffee culture, brewing tips, and updates on our shop events.</p>
            <article>
                <h2>The Art of Brewing Coffee</h2>
                <p>Discover the different brewing methods and how they affect the flavor of your coffee. From French press to pour-over, each technique brings out unique characteristics.</p>
            </article>
            <article>
                <h2>Seasonal Coffee Specials</h2>
                <p>Check out our seasonal specials that highlight unique flavors and ingredients. Stay tuned for our upcoming fall pumpkin spice latte!</p>
            </article>
            <article>
                <h2>Community Events</h2>
                <p>Join us for our monthly coffee tasting events where you can explore various coffee beans and learn from our expert baristas.</p>
            </article>
        </div>
    );
};

export default Blog;