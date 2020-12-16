module.exports = {
  Query: {
    allArticles: (_, __, { dataSources }) =>
      Promise.all(
        Object.keys(dataSources).map((source) =>
          //so we get either hackernews or newyorktimes
          dataSources[source].getAllArticles()
        )
      ).then((result) => result.reduce((acc, data) => acc.concat(data), [])),
    articleBySource: (_, { id, source }, { dataSources }) => {
      //console.log(info);
      dataSources[source].getArticle(id, source);
      //dataSources.hackernews.getArticle(id, source);
    },
    articlesBySource: (_, { ids, source }, { dataSources }) => {
      //console.log(info);
      dataSources[source].getArticlesByIds(ids);
      //dataSources.hackernews.getArticle(id, source);
    },
    allArticlesBySource: (_, { source }, { dataSources }) =>
      dataSources[source].getAllArticles(),
  },
};
