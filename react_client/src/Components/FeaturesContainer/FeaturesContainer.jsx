import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndpoints } from "../../utils/endpoints";
import FeatureCard from "../FeatureCard/FeatureCard";

function FeaturesContainer() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoints.getFeatures)
      .then(({ data }) => {
        setFeatures(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-2 mx-auto">
      {features?.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

export default FeaturesContainer;
