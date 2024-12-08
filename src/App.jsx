import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBox } from './components/SearchBox';
import { FilterBar } from './components/FilterBar';
import { SearchResults } from './components/SearchResults';
import { mockArticles } from './data/mockData';
import { searchArticles, filterByCategory, sortArticles } from './utils/searchUtils';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('latest');

  const filteredAndSortedResults = useMemo(() => {
    let results = searchArticles(mockArticles, searchQuery);
    results = filterByCategory(results, selectedCategory);
    return sortArticles(results, selectedSort);
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Header />
        <SearchBox
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />
        <SearchResults results={filteredAndSortedResults} />
      </div>
    </div>
  );
}

export default App;