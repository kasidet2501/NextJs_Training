"use client";
import { IUser } from "@/types/IUser";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

function page({}: Props) {
  const [data, setData] = useState<IUser[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get<IUser[]>(
      "https://663489d49bb0df2359a1cfba.mockapi.io/api/v1/users"
    );
    setData(response.data);
    console.log(response.data);
  };

  return (
    <>
      {/* <div className="overflow-x-auto"> */}
      {/* <table className="table table-zebra"> */}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/${user.id}`}>
                  <button className="btn btn-outline btn-primary">
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
}

export default page;
