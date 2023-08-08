import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  // Using the useFetch hook to fetch data
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* Conditional rendering based on loading and error states */}
      {isLoading && <div>Loading...</div>}
      <p>{error}</p>
      {/* Render BlogList component if data is available */}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
