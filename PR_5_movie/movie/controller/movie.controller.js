const movie = require("../Models/movie.schema");

const Allmovie = async(req,res)=>{
    const movielist = await movie.find();
    res.status(201).json(movielist);
}

const movieCreate = async(req, res)=>{
    const newmovie = await movie.create(req.body);
    res.status(201).json(newmovie);
}

const movieUpdate = async(req, res)=>{
    const {id} = req.body.id;
    const moviepatch = await movie.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(moviepatch);
}

const movieDelete = async(req, res)=>{
    const {id} = req.params.id;
    const moviedel = await movie.findByIdAndDelete(id);
    res.status(204).json(moviedel);
}

const rating = async(req, res)=>{
    let {title,rating} = req.body;

    if(rating <= 0){
        return res.status(400).json({ message: 'Rating 0 to 10' });
    }

    const movie = await movie.findOne({title: title});
    if (!movie){
        return res.status(404).json({ message: 'Movie not found' });
    }
    
    movie.ratings.push(rating);
    await movie.save();
    res.status(200).json(movie);

}

const comment = async(req, res)=>{
    let {title,comment} = req.body;

    if(!comment){
        return res.status(400).json({ message: 'Please Give Comment' });
    }

    const movie = await movie.findOne({title: title});
    if (!movie){
        return res.status(404).json({ message: 'Movie not found' });
    }
    
    movie.comments.push(comment);
    await movie.save();
    res.status(200).json(movie);

}

const filter = async(req,res)=>{
    let {title, addedBy, releaseDate ,category} = req.query;

    let query = {};
    if(title){
        query.title = title;
    }
    if(addedBy){
        query.addedBy = addedBy;
    }
    if(releaseDate){
        query.releaseDate = releaseDate;
    }
    if(category){
        query.category = category;
    }
    
    const movies = await movie.find(query);
    res.status(200).json(movies);



}

module.exports = {
    Allmovie,
    movieCreate,
    movieUpdate,
    movieDelete,
    rating,
    comment,
    filter,
 };
