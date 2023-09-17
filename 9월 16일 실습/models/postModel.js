const db = require('../config/db.js');

module.exports = {
    getPost: async (postId) => {
        const query = 'SELECT * FROM Posts WHERE post_id=?';
        const post = await db.query(query, [postId]);
        return post[0][0];
    },
    createNewPost: async (newPost) => {
        const query = 'INSERT INTO Posts(title, content) VALUES(?, ?);';
        const createdNewPost = await db.query(query, [newPost.title, newPost.content]);

        return createdNewPost[0];
    },
    deletePost: async (postId) => {
        const query = 'DELETE FROM Posts WHERE post_id=?;';
        await db.query(query, [postId]);
    },
    updatePost: async (postId, newPostData) => {
        const query = 'UPDATE Posts SET title=?, content=? WHERE post_id=?';
        await db.query(query, [newPostData.title, n])
        await db.query(query, [newPostData.title, newPostData.content, postId]);
    }
}