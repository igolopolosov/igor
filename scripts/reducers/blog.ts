import { AnyAction } from 'redux';
import { getActionCreator } from '../helpers/redux';

export interface BlogPost {
    id: string;
    title: string;
    time: string;
    text: string;
    tag?: string;
}

export const setBlogPosts = getActionCreator<BlogPost[]>('SET_BLOG_POSTS');

export const blog = (state = {posts: []}, action: AnyAction) => {
    switch (action.type) {
        case setBlogPosts.type:
            return {
                ...state,
                posts: (action.payload || [])
                    .filter(post => post.id && post.title && post.time && post.text)
            };
        default:
            return state;
    }
};
