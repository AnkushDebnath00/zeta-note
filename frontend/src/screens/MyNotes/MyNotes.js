import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function MyNotes({ history, search }) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div style={{ color: "#f3f3f3" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          letterSpacing: "14px",
        }}
      >
        <p style={{ fontSize: "50px", textAlign: "center" }}>
          {`Welcome ${userInfo && userInfo.name}`.toUpperCase()}
        </p>
      </div>
      {console.log(notes)}
      <Link to="/createnote">
        <button
          className="registerbutton"
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
        >
          Create
        </button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {notes &&
        notes
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((note) => (
            <Accordion>
              <Card
                style={{
                  margin: 10,
                  backgroundColor: "#222222",
                  color: "white",
                }}
                key={note._id}
              >
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button
                      className="smallbuttons1"
                      href={`/note/${note._id}`}
                    >
                      EDIT
                    </Button>
                    <Button
                      variant="danger"
                      className="mx-2 smallbuttons2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      DELETE
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="light" style={{ fontWeight: "light" }}>
                        {`${note.category}`.toUpperCase()}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown
                        style={{ fontFamily: "segoe-ui !important" }}
                      >
                        {note.content}
                      </ReactMarkdown>
                      <footer className="blockquote-footer">
                        Updated on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </div>
  );
}

export default MyNotes;
