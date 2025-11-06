import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  fristname: {
    type: String,
   
    },
    lastname: {
    type: String  
  },
  email: {
    type: String,
    required: true,
    unique: true,
    },
  photo: {
    type: String,
    required: true,
  },
    creditBalance: {
    type: Number,
    default: 5
 }
});

const userModel =mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;