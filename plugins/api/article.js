import request from '../request';

export function getArticleMenu(params = {}) {
  return request({
    url: "/api/articles/menu",
    method: 'get',
    params
  });
}

export function getArticle(id) {
  return request({
    url: `/api/articles/${id}`,
    method: 'get'
  });
}

export function getArticleTags(params = {}) {
  return request({
    url: "/api/tags",
    method: 'get',
    params
  });
}
