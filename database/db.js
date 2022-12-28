import  mongoose from 'mongoose';


const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-nrnfwxj-shard-00-00.ln6lvii.mongodb.net:27017,ac-nrnfwxj-shard-00-01.ln6lvii.mongodb.net:27017,ac-nrnfwxj-shard-00-02.ln6lvii.mongodb.net:27017/USER-APP?ssl=true&replicaSet=atlas-bhhz59-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log('connected db');
  } catch(err){
    console.log(err);
  }
}

export default Connection;
