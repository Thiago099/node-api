module.exports = ({app, connection}) => {
    // route that gets test by id
    app.get('/:id', (req, res) => {
        connection.query(
            'SELECT * FROM teste WHERE id = ?',
            [req.params.id],
            (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.json(results);
            }
        );
    });
    app.get('/', (req, res) => {
        //get the data from table teste
        connection.query('SELECT * FROM teste', (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            res.json(results);
        });
    });
    app.post('/', (req, res) => {
        connection.query(
            'INSERT INTO teste SET ?',
            req.body,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
        res.send('OK')
    });
}