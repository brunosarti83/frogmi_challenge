/* eslint-disable react/prop-types */
import { Divider } from "@nextui-org/react";
import { format } from "@formkit/tempo";

function FeatureComments({ comments }) {
  return (
    <div className="w-full p-2">
      <p className="font-bold text-sm">Comments:</p>
      <Divider />
      {comments?.map((comment) => (
        <div key={comment.id} className="flex flex-col font-vietnam">
          <div className="ml-2 text-sm my-2 text-sky-600">{comment.body}</div>
          <p className="text-xs ml-auto">
            {format(comment.created_at, { date: "medium", time: "short" })}
          </p>
          <Divider />
        </div>
      ))}
    </div>
  );
}

export default FeatureComments;
