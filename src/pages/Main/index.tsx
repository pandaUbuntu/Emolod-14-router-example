import { BlogCard } from "../../components/BlogCard/BlogCard";
import Layout from "../Layout";
import { blogPosts } from '../../fixtures/blog';
import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'

 const Main = () => {

  return (
    <Layout title="Головна сторінка">
         <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#16181d', minHeight: '100vh' }}>
            {blogPosts.map((item) => (
        <BlogCard key={item.id} post={item} />
        ))}
    </div>
    </Layout>   
  );
};

export default Main;
