import { setBlogPosts } from '../../../reducers/blog';
import { data } from './articles';

/**
 * Load posts from local file
 */
export function loadBlog() {
    return setBlogPosts(data);
}
