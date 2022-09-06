import {useMutation, useQuery, gql} from "@apollo/client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GET_AUTHORS} from "./Authors";

const CreateBook = () => {
  const [book, setBook] = useState({
    title: "",
    authorId: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const {data} = useQuery(GET_AUTHORS);
  console.log(data);

  const CREATE_BOOK = gql`
    mutation CreateBook($title: String!, $authorId: ID!) {
      createBook(title: $title, authorId: $authorId) {
        msg
        status
      }
    }
  `;

  const [createBook] = useMutation(CREATE_BOOK);

  const create = async () => {
    const findID = data.getAuthors.find(
      (author) => author._id === book.authorId
    );
    if (!findID) return setErrorMessage("Author with this ID does not exist!");
    const x = await createBook({
      variables: {
        title: book.title,
        authorId: book.authorId,
      },
    });
    console.log(x);
    setBook({...book, title: "", authorId: ""});
    if (!book.title) return setErrorMessage("Field can not be empty!");
    if (x.data.createBook.status === 200) navigate("/books");
  };

  return (
    <div className='p-20 h-screen flex flex-col flex-wrap justify-center items-center'>
      <h1 className='text-3xl font-bold'>Create New Book</h1>
      <div className='flex flex-col items-center mt-4'>
        <label htmlFor='authorName'>Enter Book Title:</label>
        <input
          className='p-3 border-[1px] border-blue-900 focus:outline-none rounded-lg bg-blue-200 text-blue-900'
          type='text'
          id='authorName'
          value={book.title}
          onChange={(e) => setBook({...book, title: e.target.value})}
          required
        />
        <label className='mt-5' htmlFor='authorName'>
          Enter Author Id:
        </label>
        <input
          className='p-3 border-[1px] border-blue-900 focus:outline-none rounded-lg bg-blue-200 text-blue-900'
          type='number'
          id='authorName'
          value={book.authorId}
          onChange={(e) => setBook({...book, authorId: e.target.value})}
          required
        />
        <p
          className={
            successMessage
              ? "text-xl mt-3 text-green-900"
              : "text-xl mt-3 text-red-900"
          }>
          {successMessage ? successMessage : errorMessage}
        </p>
        <button
          className='bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded'
          onClick={create}>
          Create Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
