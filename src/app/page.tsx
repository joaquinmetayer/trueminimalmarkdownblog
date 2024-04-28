import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const Hero = (
    <div>
      <h2>
        <a href="/">Joaquin Metayer</a>
      </h2>
      <p>Software engineer building on the internet</p>
      <hr/>
    </div>
  )

  return (
    <>
      {Hero}
      {postPreviews}
    </>
  );
}
