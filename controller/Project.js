import Project from "../model/Project";

export const CreateProject = async (req, res, next) => {
    Project.create(req.body, (err, post) => {
        if (err) return res.status(500).json({
            success: false,
            message: "Internal server error, please try again later",
            error: err.message
        })
        return res.json({
            success: true,
            message: "Create project successfully"
        })
    })
} 