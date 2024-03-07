'use client'

import React from "react";
import { useGetUser } from "../../hooks";

export const ListUser = ({ list }: any) => {
  const { data: newData, refetch, status  } = useGetUser({ list });

  const handleRefetch = async () => {
    console.log('Refetching...'); // Add console log here
    await refetch(); // Call refetch function
    console.log('Refetch complete!'); // Add console log here
  };

  return (
    <>
      {newData.map((item: any) => (
        <div key={Math.random()}>{item.name.title + " " + item.name.first}</div>
      ))}
      {status === "pending" && <div>Loading...</div>}
      <button onClick={handleRefetch}>get data</button>
    </>
  );
};
