const EURO = 'EURO';
const REGIONAL = 'REGIONAL';

const VISITED_DESTINATIONS = [
    {
        name: EURO,
        places: [
            {
                place: 'SWITZERLAND',
                viewport_url: require('../images/europe/swiss.jpg'),
                description: 'Swiss, the dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery',
            }, {
                place: 'FRANCE',
                viewport_url: require('../images/europe/france.jpg'),
                description: 'The dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery',
            }, {
                place: 'ITALY',
                viewport_url: require('../images/europe/italy.jpg'),
                description: 'The dream place for the most of the people.When I was there, each and every moment I was Awestruck by the beautiful scenery'
            },
        ]
    }, {
        name: REGIONAL,
        places: [
            {
                place: 'ALAPUZHA',
                viewport_url: require('../images/regional/alapuzha_boat.jpg'),
                description: '"Nowhere else will you find , spread out across the centre of town, a unique crisscrossing network of canals on which that covered country boats punt along leisurely.A singularity of this land is the region called kuttanad-a land of lush paddy fields and it is the only place in the world where farming is done below sea level.',
            }, {
                place: 'OOTY',
                viewport_url: require('../images/regional/Ooty.jpg'),
                description: 'Ooty, where nature has special place, where it seems that nature wants to show what the real meaning of beauty is, where nature wants to surprise and refresh you every now and then. Look no further, have no dilemma, just be there and feel it yourself',
            }, {
                place: 'YERCAUD',
                viewport_url: require('../images/regional/yercaud.jpg'),
                description: 'Small, quaint and beautiful can best describe the place. Perfect sweater weather and most picturesque views.Should stay at yercaud amidst nature to enjoy the beauty of the weather',
            }, {
                place: 'VAGAMON',
                viewport_url: require('../images/regional/vagamon-hill.jpg'),
                description: 'A moody weather with slight touch of rain sparkled the place in green.A untouched place covered by the nature with many streams of waterfalls will make you wonder where it comes from.One of the beautiful Hill Station in South India I have visited.'
            }
        ]
    }
];


const getPlacesByCategory = (category) => {
    console.log(category);
    console.log(EURO === category);
    return VISITED_DESTINATIONS.find(destination => destination.name === category);
};

const getDisplayNameByCategory = (categoryInput) => CATEGORIES.find(category => category.name === categoryInput).displayName;

const CATEGORIES = [{
    name: EURO,
    displayName: 'Euro'
}, {
    name: REGIONAL,
    displayName: 'Regional - India',
}];


export {CATEGORIES, getPlacesByCategory, getDisplayNameByCategory};
