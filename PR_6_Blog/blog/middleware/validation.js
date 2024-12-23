const inputValidation = async(req,res) =>{
    const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    return res.status(400).send('All fields are required');
  }

  next();
}

module.exports = { inputValidation };