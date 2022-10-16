import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    ownerUsername: {
        type: String,
    },
    name: {
        type: String,
    },
    alias: {
        type: String,
    },
    privacy: {
        type: String,
        enum: ['private', 'public', 'share'],
        default: 'private'
    },
    accessList: [
        {
            userId: String,
        }
    ],
    api: [
        {
            apiId: mongoose.Schema.ObjectId,
            name: String,
            privacy: {
                type: String,
                enum: ['private', 'public', 'share'],
                default: 'private'
            },
            alias: String
        }
    ]
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project