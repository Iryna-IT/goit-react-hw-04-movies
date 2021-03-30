import getTrends from '../services/getTrends';
const fetchTrends = state => {
  const { currentPage } = state.state;
  console.log('fetchTrends', currentPage);
  localStorage.setItem(`currentPage`, currentPage);
  this.setState({ isLoading: true });

  getTrends(currentPage)
    .then(trends => {
      this.setState(prevState => ({
        trends: [...prevState.trends, ...trends.results],
        totalPages: trends.total_pages,
        currentPage: prevState.currentPage + 1,
      }));
    })
    .catch(error => this.setState({ error: error }))
    .finally(() => this.setState({ isLoading: false }));
};

export default fetchTrends;
