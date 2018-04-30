import data from '../../../data/data.js';

export const all = (req, res) => {
    res.json(data);
}

export const post = (req, res, next) => {
    const user = req.body;
    res.json(user);
}

export const getByStars = (req, res) => {
    const stars = req.body.stars;
    const dataHotels = [];
    if (stars.includes('*')) {
        res.json(data);
    } else {
        let hotels = [];
        stars.forEach(star => {
            hotels = data.filter(hotel => hotel.stars === parseInt(star, 10));
            dataHotels.push(...hotels);
        });
        res.json(dataHotels);
    }
    
}

export const getByName = (req, res) => {
    const hotel_name = req.params.filter;
    res.json(data.filter(hotel => hotel.name.toLocaleLowerCase().includes(hotel_name.toLocaleLowerCase())));
}

export const put = (req, res, next) => {
    // const id = req.params.id;
    let update = req.body;
    res.json(update);
}

export const _delete = (req, res, next) => {
    const id = req.params.id;
    res.json({ "_id": id });
};

export { _delete as delete }
    
