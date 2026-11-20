const planetData = {
    sun: {
        name: 'Sun',
        description: 'The Sun is the star at the center of our Solar System. It accounts for about 99.86% of the total mass of the Solar System.',
        diameter: '1,392,700 km',
        type: 'G-type main-sequence star',
        temperature: '5,500°C (surface)'
    },
    mercury: {
        name: 'Mercury',
        description: 'Mercury is the smallest and innermost planet in the Solar System. Its surface is heavily cratered and resembles the Moon.',
        diameter: '4,879 km',
        distance: '57.9 million km from Sun',
        dayLength: '59 Earth days'
    },
    venus: {
        name: 'Venus',
        description: 'Venus is the second planet from the Sun and is often called Earth\'s "sister planet" due to their similar size and mass.',
        diameter: '12,104 km',
        distance: '108.2 million km from Sun',
        dayLength: '243 Earth days'
    },
    earth: {
        name: 'Earth',
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
        diameter: '12,742 km',
        distance: '149.6 million km from Sun',
        dayLength: '24 hours'
    },
    mars: {
        name: 'Mars',
        description: 'Mars is the fourth planet from the Sun, often called the "Red Planet" due to its reddish appearance caused by iron oxide on its surface.',
        diameter: '6,779 km',
        distance: '227.9 million km from Sun',
        dayLength: '24.6 hours'
    },
    jupiter: {
        name: 'Jupiter',
        description: 'Jupiter is the largest planet in our Solar System and is known for its Great Red Spot, a massive storm.',
        diameter: '139,820 km',
        distance: '778.5 million km from Sun',
        dayLength: '9.9 hours'
    },
    saturn: {
        name: 'Saturn',
        description: 'Saturn is famous for its spectacular ring system, composed of ice particles and rocky debris.',
        diameter: '116,460 km',
        distance: '1.43 billion km from Sun',
        dayLength: '10.7 hours'
    },
    uranus: {
        name: 'Uranus',
        description: 'Uranus is an ice giant with a unique feature: it rotates on its side, with an axial tilt of 98 degrees.',
        diameter: '50,724 km',
        distance: '2.87 billion km from Sun',
        dayLength: '17.2 hours'
    },
    neptune: {
        name: 'Neptune',
        description: 'Neptune is the eighth and farthest planet from the Sun. It has the strongest winds in the Solar System.',
        diameter: '49,244 km',
        distance: '4.50 billion km from Sun',
        dayLength: '16.1 hours'
    }
};

function displayPlanetInfo(planetName) {
    const data = planetData[planetName];
    const infoDiv = document.getElementById('planet-info');
    
    infoDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <ul style="margin-top: 1rem; list-style: none;">
            <li><strong>Diameter:</strong> ${data.diameter}</li>
            ${data.distance ? `<li><strong>Distance from Sun:</strong> ${data.distance}</li>` : ''}
            ${data.dayLength ? `<li><strong>Day Length:</strong> ${data.dayLength}</li>` : ''}
            ${data.type ? `<li><strong>Type:</strong> ${data.type}</li>` : ''}
            ${data.temperature ? `<li><strong>Temperature:</strong> ${data.temperature}</li>` : ''}
        </ul>
    `;
}

document.querySelectorAll('.planet, .sun').forEach(element => {
    element.addEventListener('click', function() {
        const planetClass = this.className.split(' ').find(c => planetData[c]);
        if (planetClass) {
            displayPlanetInfo(planetClass);
        }
    });
});

displayPlanetInfo('sun');
