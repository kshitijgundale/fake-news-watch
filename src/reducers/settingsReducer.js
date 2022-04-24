const default_state = {
    numTweets: 5,
    numNews: 2,
    includeRetweets: false,
    includeQuotes: false,
    includeReplies: false
}

const settingsReducer = (state=default_state, action) => {
    switch(action.type){
        case "CHANGE_NUM_TWEETS":
            return {...state, numTweets: action.numTweets}
        case "CHANGE_NUM_NEWS":
            return {...state, numNews: action.numNews}
        case "CHANGE_INCLUDE_RETWEETS":
            return {...state, includeRetweets: action.includeRetweets}
        case "CHANGE_INCLUDE_QUOTES":
            return {...state, includeQuotes: action.includeQuotes}
        case "CHANGE_INCLUDE_REPLIES":
            return {...state, includeReplies: action.includeReplies}
        default:
            return state
    }
}

export default settingsReducer