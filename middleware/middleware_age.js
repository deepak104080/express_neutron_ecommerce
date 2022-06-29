const reqFilterAge = (req, res, next) => {
    console.log('middleware hit....');
    const age = req.query.age;
    console.log(age);
    if(age == undefined) {
        res.send('<h2>Plz enter age.</h2>')
    }
    else {
        if(age<18) {
            res.send('<h2>Not allowed...</h2>')
        }
        else {
            next();
        }
    }
    
}

module.exports = reqFilterAge;