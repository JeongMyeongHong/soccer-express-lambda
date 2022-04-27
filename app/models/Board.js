export default function BoardModel(mongoose) {
    mongoose.model('board', mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        contents: String
    }, {timestamps: true}))
}