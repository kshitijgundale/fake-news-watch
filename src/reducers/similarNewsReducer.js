export const setNews = (news) => {
    return {
        type: "SET_NEWS",
        news: news
    }
}

export const labelNews = (id, label) => {
    return {
        type: "LABEL_NEWS",
        id: id,
        label: label
    }
}

const similarNewsReducer = (state=0, action) => {
    switch(action.type){
        case "SET_NEWS":
            return action.news.map((elm)=>{
                elm.label = "not-sure"
                return elm
            })
        case "LABEL_NEWS":
            return state.map((elm)=>{
                if(elm.id === action.id){ elm.label = action.label }
                return elm
            })
        default:
            return state
    }
}

export default similarNewsReducer