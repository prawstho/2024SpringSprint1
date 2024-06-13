const express = require('express');
const router = express.Router();

// this root is actually /meals
router.get('/', (req, res) => {
    res.write('Prepare meals');
    res.end();
});

router.get('/breakfast', (req, res) => {
    res.write('Warm drink. ');
    res.write('oatmeal, fruit, and yogurt.');
    res.end();
});

router.get('/lunch', family, (req, res) => {
    res.write('Water. ');
    res.write('Sandwich and an apple.');
    res.end();
});

router.get('/dinner', family, party, (req, res) => {
    res.write('Rice wine. ');
    res.write('Stirfry, rice, cashew chicken. ');
    res.end();
});

router.get('/supper', party, (req, res) => {
    res.write('Water. ');
    res.write('Soup and crackers.');
    res.end();
});

router.get('/party', (req, res) => {
    // array with mock data for testing and UI development
    const friends = [
        {friend_id: '1', title: 'Dr.', birth_year: '2012', rating: 'G', name: 'Lisa Wonder'},
        {friend_id: '2', title: 'Ms.', birth_year: '2006', rating: 'PG', name: 'Satnam Purewal'},
        {friend_id: '3', title: 'Mr.', birth_year: '2017', rating: 'R', name: 'Jake Forgotten'}
    ];
        res.render('party.ejs',{friends});
    });

function family(req, res, next) {
    if(req.query.weekday === 'sunday') {
        res.write('Extend invite. ');
        res.write('Set table. ');
        res.write('Chill beverages. ');
        next();
    } else {
        res.write('Simple meal. ');
        next();
    }
}

function party(req, res, next) {
    if(req.query.weekday === 'friday') {
        res.write('PARTY. ');
        next();
    } else {
        res.write('Zzzzzzzzzzzzzz ');
        next();
    }
}

module.exports = router