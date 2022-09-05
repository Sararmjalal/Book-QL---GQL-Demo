import {useQuery, gql} from "@apollo/client";
import {useParams} from "react-router-dom";
import AuthorCard from "../components/AuthorCard";

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
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  const author = data.getAuthor;
  // console.log(author);
  return (
    <div>
      <AuthorCard author={author} />
    </div>
  );
};

export default Author;
