export const getNewsByTags = (newsInputs, feedback, settings) => {
    let data = {}
    data['statements'] = []
    data['urls'] = []
    data['feedback'] = feedback
    newsInputs.forEach(element => {
        if(element.tag === 'HEADLINE'){
            data['statements'].push(element['text'])
        }
        else{
            data['urls'].push(element['text'])
        }
    });

    data['num_news'] = settings['numNews']
    data['num_tweets'] = settings['numTweets']
    data['include_retweets'] = settings['includeRetweets']
    data['include_quotes'] = settings['includeQuotes']
    data['include_replies'] = settings['includeReplies']

    return data
}

const getColor = (type) => {
    if(type==="retweet"){
        return "grey"
    }
    else if(type==="tweet"){
        return "green"
    }
    else{
        return "black"
    }
}

export const buildGraphData = (graph_data) => {

    if(graph_data.length === 0) return null

    const nodes = graph_data.nodes.map((element)=>(
        {
            id: element.id? element.id : "news",
            label: " ",
            title: element.type?`${element.type} by ${element.username}` : "news",
            shape: "circle",
            size: 15,
            color: getColor(element.type)
        }
    ))
    const edges = graph_data.edges
    const metadata = graph_data.metadata
    const result = graph_data.result

    return { nodes, edges, metadata, result }
}