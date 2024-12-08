// Utility functions for search and filtering
export const searchArticles = (articles, query) => {
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  if (searchTerms.length === 0) return articles;
  
  return articles.filter(article => {
    const searchableText = `${article.title} ${article.excerpt} ${article.category} ${article.author.name}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  });
};

export const filterByCategory = (articles, category) => {
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
};

export const sortArticles = (articles, sortType) => {
  const sortedArticles = [...articles];
  
  switch (sortType) {
    case 'popular':
      return sortedArticles.sort((a, b) => b.likes - a.likes);
    case 'oldest':
      return sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    case 'latest':
    default:
      return sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};