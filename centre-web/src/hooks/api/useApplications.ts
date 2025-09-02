import { centreRequest } from "@/utils/axiosUtils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./constants";
import { EpicApp, RequestAccessCatalog } from "@/models/EpicApp";

const getApplications = () => {
  return centreRequest<EpicApp[]>({
    url: `applications`,
  });
};

export const useGetApplications = () => {
  return useQuery({
    queryKey: [QUERY_KEY.APPLICATIONS],
    queryFn: getApplications,
  });
};

const getRequestCatalogApplications = () => {
  return centreRequest<RequestAccessCatalog[]>({
    url: `applications/request-catalog`,
  });
};

export const useGetRequestCatalogApplications = () => {
  return useQuery({
    queryKey: [QUERY_KEY.REQUEST_CATALOG],
    queryFn: getRequestCatalogApplications,
  });
};

const createAccessRequest = (appId: number) => {
  return centreRequest({
    url: `applications/${appId}/access_request`,
    method: "POST",
  });
};

export const useCreateAccessRequest = () => {
  return useMutation({
    mutationFn: createAccessRequest,
  });
};
