const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    refreshToken: { type: String },
}, { timestamps: true });

// JWT AUTH LOGIC
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.matchPassword = async function (endteredPassword) {
    return bcrypt.compare(endteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);
module.exports = User;
