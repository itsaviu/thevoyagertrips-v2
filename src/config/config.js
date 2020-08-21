const EURO = 'EURO';
const ASIA = 'ASIA';
const REGIONAL = 'REGIONAL';

const VISITED_DESTINATIONS = [
    {
        name: EURO,
        places: [
            {
                place: 'ITALY',
                viewport_url: require('../images/europe/italy.jpg'),
                description: 'The dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery'
            }, {
                place: 'FRANCE',
                viewport_url: require('../images/europe/france.jpg'),
                description: 'The dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery',
            }, {
                place: 'SWITZERLAND',
                viewport_url: require('../images/europe/swiss.jpg'),
                description: 'Swiss, the dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery',
                // visits: [
                //     {
                //         name: 'Murren',
                //         url: require('../images/europe/swiss/murren.jpg')
                //     }, {
                //         name: 'Lauterbrunnen',
                //         url: require('../images/europe/swiss/lauterbrunnen.jpg')
                //     }, {
                //         name: 'Lucernne',
                //         url: require('../images/europe/swiss/lucerne.jpg')
                //     },
                //     {
                //         name: 'Montruex',
                //         url: require('../images/europe/swiss/montreux.jpg')
                //     }
                //     , {
                //         name: 'Wengen',
                //         url: require('../images/europe/swiss/wengen.jpg')
                //     }
                // ]
            }
        ]
    }, {
        name: REGIONAL,
        places: [
            {
                place: 'VAGAMON',
                viewport_url: require('../images/regional/vagamon-hill.jpg'),
                description: 'A moody weather with slight touch of rain sparkled the place in green.A untouched place covered by the nature with many streams of waterfalls will make you wonder where it comes from.One of the beautiful Hill Station in South India I have visited.'
            }, {
                place: 'YERCAUD',
                viewport_url: require('../images/regional/yercaud.jpg'),
                description: 'Small, quaint and beautiful can best describe the place. Perfect sweater weather and most picturesque views.Should stay at yercaud amidst nature to enjoy the beauty of the weather',
            }, {
                place: 'OOTY',
                viewport_url: require('../images/regional/Ooty.jpg'),
                description: 'Ooty, where nature has special place, where it seems that nature wants to show what the real meaning of beauty is, where nature wants to surprise and refresh you every now and then. Look no further, have no dilemma, just be there and feel it yourself',
            }, {
                place: 'ALAPUZHA',
                viewport_url: require('../images/regional/alapuzha_boat.jpg'),
                description: '"Nowhere else will you find , spread out across the centre of town, a unique crisscrossing network of canals on which that covered country boats punt along leisurely.A singularity of this land is the region called kuttanad-a land of lush paddy fields and it is the only place in the world where farming is done below sea level.',
            }
        ]
    }
];


const getPlacesByCategory = (category) => VISITED_DESTINATIONS.find(destination => destination.name === category);

const CATEGORIES = [{
    name: EURO,
    displayName: 'Euro',
    // image: require('../images/destinations/euro.jpg')
}, {
    name: REGIONAL,
    displayName: 'Regional - India',
    // image: require('../images/destinations/india.jpg')
}];


export {CATEGORIES, getPlacesByCategory};
