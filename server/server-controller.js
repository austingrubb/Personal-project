module.exports = {
    getUsers: (req, res, next) => {
        const database = req.app.get('db');

        database.get_users()
            .then(users => res.status(200).send(users))
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err) 
              } );
    },
    getPhotos: (req, res, next) => {
        const database = req.app.get('db');

        database.get_photos()
            .then(users => res.status(200).send(users))
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err) 
              } );
    },
    getAdmin: (req, res, next) => {
        const database = req.app.get('db');

        database.get_admin()
            .then(users => res.status(200).send(users))
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err) 
              } );
    },
    getUsersPhotos: (req, res) => {
        const database = req.app.get('db'); 
        console.log(req.session)
        database.get_users_photos(req.session.users.id)
        .then( (response) => res.status(200).send(response))
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } )
    },
    createUser: (req, res, next) => {
        const database = req.app.get('db');
        const {name, password, email, admin} = req.body
        console.log(req.body)
        database.create_user([ name, password, email, admin])
            .then(users => { 
                res.send(users)
            })
            .catch( err => {
                console.log(err)
              } );
    },
    addPhotos: (req, res, next) => {
        const database = req.app.get('db');
        const {users_id, photos_url} = req.body
        console.log(req.body)
        database.add_photos([users_id, photos_url])
            .then(users => { 
                res.send(users)
            })
            .catch( err => {
                console.log(err)
              } );
    },
    submitImages: (req, res, next) => {
        const database = req.app.get('db');
        const {id, gallery} = req.body
        console.log("This is the id", id)
        console.log("dis is de gallery", gallery)

        database.submit_images([userImages.id, userImages.gallery])
            .then(users => { 
                res.send(users)
            })
            .catch( err => {
                console.log(err)
              } );
    },
    deleteUser: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;

        database.delete_user([ id ])
          .then( (response) => res.status(200).send(response) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    },
    deletePhotos: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;

        database.delete_photos([ id ])
          .then( (response) => res.status(200).send(response) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    }
}