import mongoose from "mongoose";
import { Schema } from "mongoose";

enum CartStatus {
    PENDING,
    SUCCESS,
    EMPTY,
}

const cartSchema = new Schema({
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "product",
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    status: {
        type: Schema.Types.Number,
        default: CartStatus.EMPTY,
    },
});
export const Cart = mongoose.model("product", cartSchema);
