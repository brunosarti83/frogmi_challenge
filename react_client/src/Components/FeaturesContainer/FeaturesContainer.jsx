/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndpoints } from "../../utils/endpoints";
import FeatureCard from "../FeatureCard/FeatureCard";
import { Pagination } from "@nextui-org/react";

function FeaturesContainer({ selected }) {
  const [page, setPage] = useState(1);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const magTypes = Array.from(selected);
    const magType = magTypes.length ? `${magTypes.join(",")}` : "";
    axios
      .get(apiEndpoints.getFeatures({ magType, page }))
      .then(({ data }) => {
        setFeatures(data);
        setPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selected]);

  useEffect(() => {
    const magTypes = Array.from(selected);
    const magType = magTypes.length ? `${magTypes.join(",")}` : "";
    axios
      .get(apiEndpoints.getFeatures({ magType, page }))
      .then(({ data }) => {
        setFeatures(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="w-full h-full flex flex-col space-y-4 p-2 mx-auto px-10 pb-4">
      {features.data?.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
      <div className="w-full flex justify-center">
        <Pagination
          isCompact
          showControls
          total={Math.floor(
            features?.pagination?.total / features?.pagination?.per_page
          )}
          page={page}
          onChange={setPage}
        />
      </div>
    </div>
  );
}

export default FeaturesContainer;
