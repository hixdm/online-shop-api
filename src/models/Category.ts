import mongoose from "mongoose";
import { Schema } from "mongoose";

const categorySchema = new Schema({
    category_title: {
        type: Schema.Types.String,
        unique: true,
    },
});

export const Category = mongoose.model("category", categorySchema);
