const URL = "http://localhost:3100";

export function fetchList(search, page = 0) {
  let url = `${URL}/images?page=${page}`;
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.map((item) => {
        return {
          author: item.author,
          title: item.title,
          id: item.id,
          price: item.price,
          image: item.main_attachment.small,
          page: item.page,
          isLiked: item.liked,
          likesCount: item.likes_count,
        };
      });
    });
}

export function sendLikes(itemId) {
  const url = `${URL}/images/${itemId}/likes`;
  const body = {};

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to send likes");
    }
  });
}
