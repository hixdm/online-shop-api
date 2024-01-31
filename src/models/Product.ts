import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    product_title: {
        type: Schema.Types.String,
        unique: true,
    },
    product_description: {
        type: Schema.Types.String,
    },
    product_price: {
        type: Schema.Types.String,
    },
    product_inventory: {
        type: Schema.Types.String,
    },
    numberOfSales: {
        type: Schema.Types.String,
        default:0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
    },
});

export const Product = mongoose.model("product", productSchema);
