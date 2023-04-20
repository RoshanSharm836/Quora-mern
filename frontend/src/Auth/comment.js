import axios from ".";

export async function addCommentApi(postId, userID, username, content) {
  console.log("js");
  return axios.post(`/post/comment`, {
    postId,
    userID,
    username,
    content,
  });
}

export async function getCommentsByPostId(postId) {
  return axios.get(`/post/comment/${postId}`);
}
export async function addLikesByPostId(postId, userID) {
  return axios.post(`/post/like`, {
    postId,
    userID,
  });
}

export async function getLikesByPostId(postId) {
  return axios.get(`/post/like/${postId}`);
}
