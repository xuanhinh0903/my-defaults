import { ListUser } from "./components";
import React from "react";
import { api } from "@/lib/configApi";

const Product = async() => {
  
  const data = await getData();
  
  return (
    <div>
      <h1>Test</h1>
      <ListUser list={data} />
    </div>
  );
};

export default Product;

async function getData() {
  const data = await api.get({ url: "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo" });
  return data.results;
}
