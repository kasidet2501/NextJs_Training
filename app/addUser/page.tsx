"use client";
import { IUser } from "@/types/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function page({}: Props) {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: IUser = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
    };
    console.log(data);

    const response = await axios.post(
      "https://663489d49bb0df2359a1cfba.mockapi.io/api/v1/users",
      data
    );
    if (response.status === 201) {
      alert("Add User sccess");
      router.push("/");
    } else {
      alert("Add User failed");
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <center>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Firstname</span>
            </div>
            <input
              name="firstName"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <br />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Lastname</span>
            </div>
            <input
              name="lastName"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <br />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone number</span>
            </div>
            <input
              name="phoneNumber"
              required
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <br />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <br />

          <button
            className="btn btn-outline btn-primary"
            type="submit"
            onClick={handleAdd}
          >
            Add User
          </button>
        </form>
      </center>
    </>
  );
}
