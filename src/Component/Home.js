import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
        {error && <div>could not fetch the data for the resource!</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;