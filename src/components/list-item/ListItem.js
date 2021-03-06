import { useDispatch } from "react-redux";
import Loader from "../loader/loader";
import { useState } from "react";
import { deleteTask, handleImportant } from "./../../redux/action";
import Edit from "./edit";

const ListIt = ({ id, text, important }) => {
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const deleteItem = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(deleteTask(id));
    }, 1000);
  };
  const editItem = () => {
    setEdit(true);
  };
  const setImportant = () => {
    dispatch(handleImportant(id, important));
    /// dispatch set important
  };
  return (
    <p>
      {loader ? (
        <Loader />
      ) : (
        <>
          {edit ? (
            <Edit text={text} id={id} setEdit={setEdit} />
          ) : (
            <>
              <button onClick={setImportant}>
                {important ? "importnat" : "not important"}
              </button>
              {text}
              <button className="redButton" onClick={deleteItem}>
                Delete
              </button>
              <button className="redButton" onClick={editItem}>
                edit
              </button>
            </>
          )}
        </>
      )}
    </p>
  );
};
export default ListIt;
