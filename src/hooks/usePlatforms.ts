import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"], // Correct structure
    queryFn: () => apiClient.getAll({}), // Ensure it takes no arguments
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
