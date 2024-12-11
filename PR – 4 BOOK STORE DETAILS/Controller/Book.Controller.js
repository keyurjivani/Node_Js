const BookModel = require("../Model/Book.Model");

const getStore = async(req,res)=>{
    res.send("welcome to the book store")
}

const GetBook = async(req,res)=>{
    try {
        let Book_Data = await BookModel.find();
        res.send(Book_Data);
    } catch (error) {
        console.log("Error getting book", error);
    }
}

const GetBookById = async(req,res)=>{
    try {
        let id = req.params.id;
        let Book_Data = await BookModel.findById(id);
        if (!Book_Data) return res.status(404).json({ message: "Book not found" });
        res.send(Book_Data);
    } catch (error) {
        console.log("Error getting book", error);
    }
}

const AddBook = async(req,res)=>{
    try {
        let Book_Data = await BookModel.create(req.body)
        res.send(Book_Data);
    } catch (error) {
        console.log("Error creating book", error);
    }
}

const UpdateBook = async(req,res)=>{
    try {
        let id = req.params.id;
        let updated_Book_Data = await BookModel.findByIdAndUpdate(id, req.body, {new: true});
        res.send(updated_Book_Data);
    } catch (error) {
        console.log("Error updating book", error);
    }
}

const DeleteBook = async(req,res)=>{
    try {
        let id = req.params.id;
        let deleted_Book_Data = await BookModel.findByIdAndDelete(id);
        res.send(deleted_Book_Data);
    } catch (error) {
        console.log("Error deleting book", error);
    }
}

module.exports = { getStore, GetBook, GetBookById, AddBook, UpdateBook, DeleteBook }