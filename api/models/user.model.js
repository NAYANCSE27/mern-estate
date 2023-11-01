import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Gfp0lwE6h7139625a-r3aAHaHa%26pid%3DApi&f=1&ipt=b929a824dab69a810c0fff042537a4128f940f345f8b7398e4c77e1da6ed931b&ipo=images",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
