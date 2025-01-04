import request from "./index";

// 获取文章列表
export async function getPostList(page = 1, page_size = 10) {
    try {
        // 确保 request 返回的是 Promise
        return await request({
          url: '/v1/posts',
          method: 'get',
          params: {
            page,
            page_size
          }
        })
    } catch (error) {
        console.error('API 请求错误:', error)
        throw error  // 抛出错误以便上层处理
    }
}

// 获取文章详情
export function getPostDetail(post_id) {
  return request({
    url: `/v1/post/${post_id}`,
    method: 'get'
  })
}

// 创建文章
export function createPost(data) {
  return request({
    url: '/posts',
    method: 'post',
    data
  })
}
