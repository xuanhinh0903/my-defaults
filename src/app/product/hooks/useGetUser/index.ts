import { api } from "@/lib/configApi";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  list: any;
}

export const useGetUser = ({ list }: Props) => {
  const [product, setProduct] = useState(list);
  const { mutate, status } = useMutation({
    mutationFn: async () =>
      await api.get({
        url: "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",
      }),
    onSuccess: (responseData: any) => {
      setProduct((prev: any) => [...prev, ...responseData.results]);
    },
  });

  return { data: product, refetch: mutate, status };
};
