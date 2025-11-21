import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/AddNote.css";

const AddNote = ({ userId, token, onSuccess }) => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add("animate-in");
      }
    }, 10);
    
    return () => clearTimeout(timeout);
  }, []);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BACKEND_URL}api/notes/${userId}/add`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Note added successfully!");
      setContent("");

      if (onSuccess) {
        onSuccess();
      }

    } catch (err) {
      console.error("Error adding note:", err);
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="add-note-container">
      <h3>Add New Note</h3>
      <form onSubmit={handleSubmit} className="add-note-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          required
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </button>

        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner" />
            <p>Please wait...</p>
          </div>
        )}

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddNote;
