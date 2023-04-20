import axios from ".";

export async function getPosts(
  page = 1,
  pageSize = 15,
  search = "",
  sortBy = "createdAt",
  sortOrder = "desc"
) {
  return axios.get("/post", {
    params: {
      page,
      pageSize,
      search,
      sortBy,
      sortOrder,
    },
  });
}

export async function addPost(title, content, username, image) {
  return axios.post("/post", {
    title,
    content,
    username,
    image,
  });
}

export async function getPostById(id) {
  return axios.get(`/posts/${id}`);
}
