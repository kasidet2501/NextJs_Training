import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.kapook.com/image/pet/golden_3.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mikey!</h2>
            <p>Kasidet Boonyasakdanon</p>
            <p>boon.kasidet@gmail.com</p>
            <p>0909975160</p>
            {/* <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </center>
    </>
  );
}
