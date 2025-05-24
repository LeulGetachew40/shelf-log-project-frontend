import { styled } from "styled-components";
import FormStatusButtons from "./FormStatusButtons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { BookSubmitData } from "../services/apiBooks";
import useCreateBook from "../hooks/useCreateBook";
import { useShowAddBookForm } from "../contexts/ShowAddBookContext";

const AddBookForm = () => {
  const AddBookContainer = styled.div`
    border: 1px solid var(--color-neutral-400);
    border-radius: 5px;
    margin-bottom: 2rem;
    padding: 2rem;
  `;
  const AddBookFormHeader = styled.div`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: var(--color-neutral-400);
    padding: 2rem;
  `;
  const FormContent = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: end;
    flex-direction: column;
    /* width: 70%; */
    & > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      margin-block: 1rem;
      & > input {
        padding-block: 0.5rem;
        @media (min-width: 576px) {
          & {
            width: 50%;
          }
        }
      }
      @media (min-width: 576px) {
        & {
          flex-direction: row;
        }
      }
    }
  `;

  const ActionButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 2rem;
    & > button {
      padding: 1rem;
      border: none;
      cursor: pointer;
      transition: background-color var(--transition-fast),
        transform var(--transition-fast);
      border-radius: 5px;
    }

    & > button:hover {
      transform: translateY(-2px);
    }
  `;

  const CancelButton = styled.button`
    background-color: var(--color-neutral-500);
    color: var(--color-neutral-900);
  `;
  const AddButton = styled.button`
    background-color: var(--color-primary-500);
    color: white;
  `;

  const [readStatus, setReadStatus] = useState<
    "toRead" | "reading" | "completed"
  >("toRead");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSubmitData>();

  const { createBookAsync, creatingBook } = useCreateBook();

  const { toggleShowForm } = useShowAddBookForm();

  async function onSubmit(book: BookSubmitData) {
    await createBookAsync({
      ...book,
      categories: book.categories.split(",").map((category) => category.trim()),
      readStatus,
      publishDate: book.publishDate
        ? new Date(book.publishDate).toISOString()
        : new Date().toISOString(),
    });
    toggleShowForm();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AddBookContainer>
        <AddBookFormHeader>
          <h3>Add Book</h3>
        </AddBookFormHeader>
        <FormContent>
          <div>
            <label htmlFor="title">Book Title</label>
            <input
              id="title"
              type="text"
              {...register("title", {
                required: { message: `A book must have a title`, value: true },
                maxLength: {
                  value: 50,
                  message: "A title cannot be more than 50 characters.",
                },
              })}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="author">Book Author</label>
            <input
              id="author"
              type="text"
              {...register("author", {
                required: {
                  message: `A book must have an author`,
                  value: true,
                },
                maxLength: {
                  value: 50,
                  message: "An author name cannot be more than 50 characters.",
                },
              })}
            />
            {errors.author && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="categories">
              Book Categories (Comma Separated)
            </label>
            <input
              id="categories"
              type="text"
              {...register("categories", {
                required: false,
              })}
            />
          </div>
          <div>
            <label htmlFor="description">Book Description</label>
            <textarea
              id="description"
              rows={5}
              cols={50}
              {...register("description", {
                required: false,
              })}
            />
          </div>
          <div>
            <label htmlFor="publishedDate">Publish Date (yyyy-mm-dd)</label>
            <input
              id="publishedDate"
              type="text"
              {...register("publishDate", {
                required: false,
              })}
            />
          </div>
          <div>
            <label htmlFor="readStatus">Book Read Status</label>
            <FormStatusButtons
              readStatus={readStatus}
              setStatus={setReadStatus}
            />
          </div>
        </FormContent>
        <ActionButtons>
          <CancelButton type="reset" onClick={() => toggleShowForm()}>
            Cancel
          </CancelButton>
          <AddButton disabled={creatingBook} type="submit">
            Add Book
          </AddButton>
        </ActionButtons>
      </AddBookContainer>
    </form>
  );
};

export default AddBookForm;
