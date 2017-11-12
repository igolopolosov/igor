import { setBlogPosts } from '../../../reducers/blog';

const YANDEX_API_LINK = 'https://cloud-api.yandex.net:443/v1/disk/public/resources/download';
const PUBLIC_KEY = 'https%3A%2F%2Fyadi.sk%2Fd%2FS16MSRKVz4uRV';
const BLOG_PATH = '/blog.json';

const BLOG_URL = `${YANDEX_API_LINK}?public_key=${PUBLIC_KEY}&path=${BLOG_PATH}`;

/**
 * Load posts from Yandex blog
 */
export function loadBlog() {
    const makeJSON = r => r.json();

    return fetch(BLOG_URL, {method: 'GET'})
        .then(makeJSON)
        .then(r => {
            if (r.error) {
                throw r;
            }
            return fetch(r.href, {method: 'GET'});
        })
        .then(makeJSON)
        .then(setBlogPosts);
}
