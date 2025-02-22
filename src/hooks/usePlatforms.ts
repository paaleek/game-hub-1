import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"], // Correct structure
    queryFn: () => apiClient.getAll({}), // Ensure it takes no arguments
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {
      count: platforms.length,
      next: null,
      results: platforms,
    } as FetchResponse<Platform>, // Ensure correct structure
  });

export default usePlatforms;
