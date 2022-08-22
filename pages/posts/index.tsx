import { NextPage } from 'next';
import axios from 'axios';
//components
import PostPage from '../../components/templetes/PostsPageTemplate';
//type
import { postType } from '../../types/postType';

const Post: NextPage<postType> = ({ postData }) => {
  return (
    <>
      <PostPage postData={postData} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get<postType>(
      'http://localhost:3000/api/posts',
    );
    const postData = response.data;
    return {
      props: { postData: postData },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Post;
