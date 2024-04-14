/* eslint-disable react/prop-types */
import { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import axios from "axios";
import { apiEndpoints } from "../../utils/endpoints";

function CommentForm({ featureId, setComments }) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(apiEndpoints.postComment(featureId), {
        body,
      });
      setComments((prev) => [
        { id: data.id, body: data.body, created_at: data.created_at },
        ...prev,
      ]);
      setLoading(false);
      setBody("");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="my-2">
      <form onSubmit={onSubmit}>
        <Textarea
          type="text"
          label="Comment"
          placeholder="Leave your comment..."
          value={body}
          onChange={onChange}
        />
        <Button
          color="primary"
          radius="sm"
          isDisabled={!body}
          isLoading={loading}
          className="my-2 ml-1"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;
