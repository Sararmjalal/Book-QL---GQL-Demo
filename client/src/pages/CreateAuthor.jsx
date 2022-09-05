import {useMutation, gql} from "@apollo/client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const CREATE_AUTHOR = gql`
    mutation CreateAuthor($name: String!) {
      createAuthor(name: $name) {
        msg
        status
      }
    }
  `;

  const [createAuthor] = useMutation(CREATE_AUTHOR);

  const create = async () => {
    const x = await createAuthor({
      variables: {
        name: authorName,
      },
    });
    setAuthorName("");
    if (!authorName) setErrorMessage("Field can not be empty!");
    if (x.data.createAuthor.status === 200)
      setSuccessMessage("Author created successfully!");
    console.log(x);
    if (successMessage == "Author created successfully!") navigate("/authors");
  };

  return (
    <div className='p-20 h-screen flex flex-col flex-wrap justify-center items-center'>
      <h1 className='text-3xl font-bold'>Create New Author</h1>
      <div className='flex flex-col items-center mt-4'>
        <label htmlFor='authorName'>Enter Author Name:</label>
        <input
          className='p-3 border-[1px] border-blue-900 focus:outline-none rounded-lg bg-blue-200 text-blue-900'
          type='text'
          id='authorName'
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
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
          Create Author
        </button>
      </div>
    </div>
  );
};

export default CreateAuthor;
