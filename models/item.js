const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    size: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    brand: { type: Schema.Types.ObjectId, ref: "Brand"},
    image: { type: String },
});

ItemSchema.virtual("url").get(function () {
    return `/inventory/item/${this._id}`;
});

module.exports = mongoose.model("Item", ItemSchema);