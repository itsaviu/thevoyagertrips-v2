const VISITED_PLACES = {
    EURO: [
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
            visits: [
                    {
                    name: 'Lauterbrunnen',
                    url: require('../images/europe/swiss/lauterbrunnen.jpg')
                },
                {
                    name: 'Murren',
                    url: require('../images/europe/swiss/murren.jpg')
                }, {
                    name: 'Lucernne',
                    url: require('../images/europe/swiss/lucerne.jpg')
                },
                {
                    name: 'Montruex',
                    url: require('../images/europe/swiss/montreux.jpg')
                }
                , {
                    name: 'Wengen',
                    url: require('../images/europe/swiss/wengen.jpg')
                }
            ]
        }
    ]
};


const CATEGORY = ['EURO', 'ASIA', 'REGIONAL'];


export {VISITED_PLACES, CATEGORY};
