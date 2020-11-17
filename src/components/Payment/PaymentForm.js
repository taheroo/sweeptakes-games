import React from "react";

function PaymentForm() {
  return (
    <div>
      {/*
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
*/}
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Name
                        </span>
                        <input
                          id="company_website"
                          className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="Ayadi"
                        />
                      </div>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Email
                        </span>
                        <input
                          id="company_website"
                          className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="ayadi.tahar@esprit.tn"
                        />
                      </div>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Phone
                        </span>
                        <input
                          id="company_website"
                          className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="+216 12 345 678"
                        />
                      </div>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Credit card
                        </span>
                        <input
                          id="company_website"
                          className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="Credit card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-600">
                Decide which notifications you'd like to receive.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <fieldset>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            By Email
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-5">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              SMS
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-5">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Notification
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <div className="mt-4">
                      <div className="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          type="radio"
                          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <label htmlFor="push_everything" className="ml-3">
                          <span className="block text-sm leading-5 font-medium text-gray-700">
                            Everything
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
