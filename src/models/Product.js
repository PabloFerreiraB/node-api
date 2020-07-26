const moogose = require("mongoose");
const moogosePaginate = require("mongoose-paginate");

const ProductSchema = new moogose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(moogosePaginate);

moogose.model("Product", ProductSchema);