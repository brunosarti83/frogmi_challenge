/* eslint-disable react/prop-types */
import { useState } from "react";
import { format } from "@formkit/tempo";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Avatar,
} from "@nextui-org/react";
import FeatureComments from "../FeatureComments/FeatureComments";
import CommentForm from "../CommentForm/CommentForm";

function FeatureCard({ feature }) {
  const [comments, setComments] = useState(feature.comments);
  return (
    <Card>
      <CardHeader>
        <h1>{feature.attributes.title}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          {format(new Date(parseInt(feature.attributes.time)), {
            date: "long",
          })}
        </p>
        <p>{feature.attributes.place}</p>
        <p>Coordinates</p>
        <div className="ml-4">
          <p>Latitude: {feature.attributes.coordinates.latitude}</p>
          <p>Longitud: {feature.attributes.coordinates.longitude}</p>
        </div>
        <section>
          <div className="flex gap-6">
            <p className="my-auto">Magnitude: {feature.attributes.magnitude}</p>
            <div className="flex gap-2">
              <p className="my-auto">MagType:</p>
              <Avatar name={feature.attributes.mag_type} />
            </div>
          </div>
          <p>Tsunami: {String(feature.attributes.tsunami)}</p>
        </section>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="w-full">
          <FeatureComments comments={comments} />
          <CommentForm featureId={feature.id} setComments={setComments} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default FeatureCard;
