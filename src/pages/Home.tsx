import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Brewed Awakenings!</h1>
            <p>Your favorite place for the finest coffee and delightful pastries.</p>
            <img src="/images/coffee-shop.jpg" alt="Brewed Awakenings Coffee Shop" />
            <p>At Brewed Awakenings, we believe in serving high-quality coffee sourced from the best beans around the world. Our mission is to create a warm and inviting atmosphere where you can relax, work, or catch up with friends.</p>
            <img src="/images/coffee-beans.jpg" alt="Coffee Beans" />
            <p>Join us for a cup of coffee and experience the difference!</p>
        </div>
    );
};

export default Home;