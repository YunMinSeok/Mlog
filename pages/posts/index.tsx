import axios from 'axios';
//components
import PostPage from '../../components/templetes/PostsPageTemplate';
//type
import { postType } from '../../src/types/postType';

const Post = ({ postData }: { postData: postType[] }) => {
  return (
    <>
      <PostPage postData={postData} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get<postType[]>(
      'http://localhost:3000/api/posts',
    );
    const postData: postType[] = response.data;
    return {
      props: { postData },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Post;
