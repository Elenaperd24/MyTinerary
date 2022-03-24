const Comments = require("../models/comments")

const commentsControllers = {
    cargarComments: async (req, res) => {
        let { intinerary, message, user } = req.body.dataComments;
        console.log(req.body.dataComents)
        new Comments({
            intinerary: intinerary,
            user: user,
            comments: message
        }).save()
        let comment
        try {
            comment = await Comments.find({ intinerary: intinerary }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { comment } })
    },

    obtenerComments: async (req, res) => {
        let id = req.params.id;
        let comment
        try {
            comment = await Comments.find({ intinerary: id }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { comment } })
    },

    deleteComments: async (req, res) => {
        let id = req.params.id;
        let comment
        try {
            comment = await Comments.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { comment } })
    },
    editComments: async (req, res) => {
        let id = req.params.id;
        console.log(id);
        let newComment = {comments:req.body.data }
        console.log(newComment)       
        let comment
        try {
            comment = await Comments.findOneAndUpdate( {_id:id}, newComment )
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { comment } })
    }
    
}
module.exports = commentsControllers;