import {useEffect} from "react";
import useDocTitle from "../config/customHooks";
import {useQuery, gql} from "@apollo/client";
import AuthorCard from "../components/AuthorCard";
import Loading from "../components/Loading";

export const GET_AUTHORS = gql`
  query GetAuthors {
    getAuthors {
      _id
      name
      createdAt
    }
  }
`;

const Authors = () => {
  useDocTitle("Book QL | Authors");
  const {data, loading, error, refetch} = useQuery(GET_AUTHORS);

  useEffect(() => {
    if (data) refetch();
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1>Something went wrong....</h1>;
  const authors = data.getAuthors;
  // console.log(authors);
  return (
    <>
      {authors.length == 0 ? (
        "There are no authors yet!"
      ) : (
        <div className='p-20 flex flex-wrap justify-center'>
          {authors.map((author) => {
            return <AuthorCard author={author} id={author._id} refetch={refetch} />;
          })}
        </div>
      )}
    </>
  );
};

export default Authors;
