import React from "react";
import PaymentForm from "../Payment/PaymentForm";
import swal from "@sweetalert/with-react";
import "../SweepstakeCard/swal.css";
import "../GameCard/GameCard.css";

function GameCard({ data }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={data.gameImageUrl} alt="" className="h-full w-full" />
      </div>
      <h2 className="mt-4 font-bold text-xl">{data.gameName}</h2>
      <h6 className="mt-2 text-sm font-medium">{data.gameReleaseDate}</h6>

      {/* <ul className="flex flex-row mt-4 space-x-2">
        <li>
          <a
            onClick={() =>
              swal({
                content: <PaymentForm></PaymentForm>,
                confirmButtonColor: "#FFFFFF",
              }).then(() => swal("Payment Completed With Success"))
            }
            href="#"
            className="flex items-center justify-center h-8 w-8 border  text-gray-800 border-gray-800"
          >
            10$
          </a>
        </li>
      </ul> */}
      {/* style 2 */}
      <div className="style-4">
        <del>
          <span className="amount">
            €35,<sup>00</sup>
          </span>
        </del>
        <ins>
          <span className="amount">
            €32,<sup>50</sup>
          </span>
        </ins>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default GameCard;
