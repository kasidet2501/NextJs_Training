"use client";

import { useParams } from "next/navigation";
import { IUser } from "@/types/IUser";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

type Props = {};

export default function page({}: Props) {
  const param = useParams<{ id: string }>();
  const [dataById, setDataById] = useState<IUser | null>(null);

  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    const response = await axios.get(
      `https://663489d49bb0df2359a1cfba.mockapi.io/api/v1/users/${param.id}`
    );
    setDataById(response.data);
    console.log(response.data);
  };
  return (
    <>
      <div style={{ margin: "10px" }}>
        <h2>Detail</h2>
        <label>First name :</label> {dataById?.first_name} <br />
        <label>Last name :</label> {dataById?.last_name} <br />
        <label>Phone number :</label> {dataById?.phone_number} <br />
        <label>Email :</label> {dataById?.email} <br />
      </div>
    </>
  );
}
