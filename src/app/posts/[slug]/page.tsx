import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h2>
        <a href="/">Joaquin Metayer</a>
      </h2>
      <p>
        {post.data.date}
        {' - '}
        {post.data.title}
      </p>
      <hr/>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;