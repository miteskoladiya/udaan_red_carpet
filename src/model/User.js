import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    // clgId: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    isSuperAdmin:{ type: Boolean, default: false },
    isVoted:{ type: Boolean, default: false },
  });
  
  const PositionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nominees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Nominee" }],
  });
  
  const NomineeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    votes: { type: Number, default: 0 },
  });
  
  export const User = mongoose.models.User || mongoose.model("User", UserSchema);
  export const Position = mongoose.models.Position || mongoose.model("Position", PositionSchema);
  export const Nominee = mongoose.models.Nominee || mongoose.model("Nominee", NomineeSchema);