import { BlogPost, setBlogPosts } from '../../../reducers/blog';
import { ActionWithPayload } from '../../../helpers/redux';

const YANDEX_API_LINK = 'https://cloud-api.yandex.net:443/v1/disk/public/resources/download';
const PUBLIC_KEY = 'https%3A%2F%2Fyadi.sk%2Fd%2FS16MSRKVz4uRV';
const BLOG_PATH = '/blog.json';
const BLOG_URL = `${YANDEX_API_LINK}?public_key=${PUBLIC_KEY}&path=${BLOG_PATH}`;

const makeJSON = r => r.json();

/**
 * Load posts from Yandex blog
 */
export function loadBlog(): Promise<ActionWithPayload<BlogPost[]>> {
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
