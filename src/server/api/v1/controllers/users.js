

export const all = (req, res, next) => {
    res.json([
        { "_id": 1, "name": "Pedro Perez" },
        { "_id": 2, "name": "Juan Perez" }
    ]);
}

export const post = (req, res, next) => {
    let user = req.body;
    res.json(user);
}

export const get = (req, res, next) => {
    let id = req.params.id;
    res.json({ "_id": id });
}

export const put = (req, res, next) => {
    let id = req.params.id;
    let update = req.body;
    res.json(update);
}

export const _delete = (req, res, next) => {
    let id = req.params.id;
    res.json({ "_id": id });
};

export { _delete as delete }
    
