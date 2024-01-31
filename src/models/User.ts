import mongoose from "mongoose";
import { Schema } from "mongoose";

enum UserRole {
    ADMIN,
    USER,
}
const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
    email: {
        type: Schema.Types.String,
    },
    mobile_number: {
        type: Schema.Types.String,
        unique: true,
    },
    password: {
        type: Schema.Types.String,
        allowNull: false,
    },
    token: {
        type: Schema.Types.String,
    },
    national_ID: {
        type: Schema.Types.String,
    },
    address: {
        type: Schema.Types.String,
    },
    status: {
        type: Schema.Types.Boolean,
        default: true,
    },
    role: {
        type: Schema.Types.String,
        default: UserRole.USER,
    },
},{
    versionKey:false
});
userSchema.virtual("noPwd").get(function () {
    this.password = undefined;
    return this;
});
userSchema.virtual("withPwd").get(function () {
    return this;
});
export const User = mongoose.model("User", userSchema);
