
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blog";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <div className="overflow-hidden rounded-lg card-hover">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 bg-background">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} />
            <span>{post.date}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-secondary">
              {post.category}
            </span>
          </div>
          <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
