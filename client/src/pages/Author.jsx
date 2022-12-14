import {useEffect} from "react";
import {useQuery, gql} from "@apollo/client";
import {useParams} from "react-router-dom";
import AuthorCard from "../components/AuthorCard";
import Loading from "../components/Loading";

const Author = () => {
  const params = useParams();
  const GET_AUTHOR = gql`
    query GetAuthor($id: ID!) {
      getAuthor(_id: $id) {
        _id
        name
        books {
          title
          _id
        }
        createdAt
      }
    }
  `;
  const {data, loading, error, refetch} = useQuery(GET_AUTHOR, {
    variables: {
      id: params.id,
    },
  });

  useEffect(() => {
    if (data) {
      refetch();
      document.title = `Book QL | ${data.getAuthor.name}`;
    }
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <h1>Something went wrong...</h1>;
  const author = data.getAuthor;
  // console.log(author);
  return (
    <div className='p-20 flex flex-wrap justify-center'>
      <AuthorCard author={author} />
    </div>
  );
};

export default Author;
