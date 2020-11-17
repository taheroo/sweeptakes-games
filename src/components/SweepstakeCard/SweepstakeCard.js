import React from "react";
import PaymentForm from "../Payment/PaymentForm";
import swal from "@sweetalert/with-react";
import "../SweepstakeCard/swal.css";
function SweepstakeCard({ data }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={data.gameImageUrl} alt="" className="h-full w-full" />
      </div>
      <h2 className="mt-4 font-bold text-xl">{data.gameName}</h2>
      <h6 className="mt-2 text-sm font-medium">
        {data.participants} participants
      </h6>
      <p className="text-xs text-gray-500 text-center mt-3">
        {data.gameReleaseDate}
      </p>
      <ul className="flex flex-row mt-4 space-x-2">
        <li>
          <a
            onClick={() =>
              swal({
                content: <PaymentForm></PaymentForm>,
              })
            }
            href="#"
            className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            10$
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              swal({
                content: <PaymentForm></PaymentForm>,
                confirmButtonColor: "#FFFFFF",
              }).then(() => swal("Payment Completed With Success"))
            }
            href="#"
            className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            2$
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              swal({
                content: <PaymentForm></PaymentForm>,
                confirmButtonColor: "#FFFFFF",
              }).then(() => swal("Payment Completed With Success"))
            }
            href="#"
            className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            1$
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SweepstakeCard;
