import request from '../request';

export function getArticleMenu(params = {}) {
  return request({
    url: "/web/article-menu",
    method: 'get',
    params
  });
}

export function getArticle(id) {
  return request({
    url: `/web/article/${id}`,
    method: 'get'
  });
}

export function getArticleType(params = {}) {
  return request({
    url: "/web/article-type",
    method: 'get',
    params
  });
}
