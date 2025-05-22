import React from 'react';

const Menu: React.FC = () => {
    const menuItems = [
        { name: 'Espresso', description: 'Rich and bold espresso shot.', price: '$3.00' },
        { name: 'Latte', description: 'Smooth espresso with steamed milk.', price: '$4.50' },
        { name: 'Cappuccino', description: 'Espresso topped with frothy milk.', price: '$4.00' },
        { name: 'Mocha', description: 'Chocolatey espresso with steamed milk.', price: '$5.00' },
        { name: 'Cold Brew', description: 'Smooth cold coffee brewed for 12 hours.', price: '$4.00' },
        { name: 'Croissant', description: 'Flaky and buttery pastry.', price: '$2.50' },
        { name: 'Muffin', description: 'Freshly baked muffin of the day.', price: '$2.00' },
        { name: 'Seasonal Special', description: 'Check our board for today\'s special!', price: 'Varies' },
    ];

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;