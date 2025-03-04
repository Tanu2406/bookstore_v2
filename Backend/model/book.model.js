import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    image:String,
    name:String,
    category:String,
    desc:String,
    price:String,
    btn3:String
});
const Book = mongoose.model("Book",bookSchema);

export default Book;