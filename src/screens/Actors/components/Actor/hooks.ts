import { useState, useEffect } from "react";
import { useApi } from "api/useApi";
import { GetActorDetailsResponse } from "api/types/endpoints/getActorDetails";

export const useFetchActor = (actorId: string) => {
  const [actor, saveActor] = useState<GetActorDetailsResponse | undefined>();
  const api = useApi();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.getActorDetails(actorId);

        saveActor(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [api, actorId]);

  return actor;
};
