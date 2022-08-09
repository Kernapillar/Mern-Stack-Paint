import { RECEIVE_POST_ERRORS, RECEIVE_NEW_POST } from '../actions/post_actions';

const _nullErrors = [];

const PostErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case RECEIVE_NEW_POST:
            return _nullErrors;
        default:
            return state;
    }
}

export default PostErrorsReducer;