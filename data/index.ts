import mongoose from 'npm:mongoose@6.7';

await mongoose.connect('mongodb://127.0.0.1:27017');

console.log(mongoose.connection.readyState);
