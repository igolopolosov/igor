import React from 'react'
import moment from 'moment'

const YANDEX_API_LINK = 'https://cloud-api.yandex.net:443/v1/disk/public/resources/download'
const PUBLIC_KEY = 'https%3A%2F%2Fyadi.sk%2Fd%2FS16MSRKVz4uRV'
const BLOG_PATH = '/blog.json'

export class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    let json = r => r.json()

    fetch(`${YANDEX_API_LINK}?public_key=${PUBLIC_KEY}&path=${BLOG_PATH}`, { method:'GET' })
    .then(json)
    .then(r => {
      if (r.error) throw r
      return fetch(r.href, { method:'GET' })
    })
    .then(json)
    .then(r => {
      this.loadBlog(r)
    }).catch(e => {
      console.warn(e.message, e)
    });
  }

  loadBlog(posts) {
    if (posts) {
      this.setState({
        posts: posts.filter(post => post.id && post.title && post.time && post.text)
      })
    }
  }

  render() {
    return (
      <div>
        {
          (this.state.posts || []).map(post =>
            <div key={post.id}> 
              <h2>{post.title}</h2>
              <h3>{moment.unix(post.time).format('LL')}</h3>
              <p>{post.text}</p>       
            </div>
          )
        }
      </div>
    )
  }

}
