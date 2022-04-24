export const changePage = (page) => {
    return {
        type: "CHANGE_PAGE",
        page: page
    }
}

const currentPageReducer = (state="NewsForm", action) => {
    switch(action.type){
        case "CHANGE_PAGE":
            return action.page
        case "RESET":
            return 'NewsForm'
        default:
            return state
    }
}

export default currentPageReducer