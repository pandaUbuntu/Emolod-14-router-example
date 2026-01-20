import "./BlogCard.css";
import type { IBlogPost } from "../../types/blog";

type Props = {
  post: IBlogPost;
};

export const BlogCard = ({ post }: Props) => {
  const { title, date, text, link } = post;

  return (
    <div className="blog-card">
      <h2 className="blog-title">{title}</h2>
      <div className="blog-date">{date}</div>
      <p className="blog-text">{text}</p>
      <a href={link} className="blog-link">
        Read more
      </a>
    </div>
  );
};