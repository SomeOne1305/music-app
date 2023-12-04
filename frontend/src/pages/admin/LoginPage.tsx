import React from "react";
import {BgImage} from "../../components";
import { Helmet } from "react-helmet-async";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div
      className={`w-full h-full bg-[#FBFBFB] bg-repeat flex items-center justify-center`}
      style={{backgroundImage: `url(${BgImage('#efebf5')})`}}
    >
      <Helmet>
        <title>Enter to cPanel</title>
      </Helmet>
      <div className="p-3">
        <form className="p-2 w-96" noValidate>
          <div className="w-full flex justify-center flex-col items-center">
            <img
              className="w-1/3 h-auto object-cover"
              src="https://cdn-icons-png.flaticon.com/512/2402/2402443.png"
              alt=""
            />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CPanel_logo.svg/154px-CPanel_logo.svg.png?20220727004930" alt="cpanel" className="w-auto h-auto object-cover"/>
          </div>
          <div className="p-1">
            <label className="block">
              <span className="block text-lg font-medium text-slate-700">
                Username
              </span>
              <input
                type="text"
                pattern="[a-zA-Z0-9\s]+"
                className="peer tracking-wide font-medium text-slate-600  mt-1 block w-full px-3 py-2 bg-[#edeaea] border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <p className="mt-2 hidden peer-invalid:block text-pink-600 text-sm">
                Don't use special characters.
              </p>
            </label>
          </div>
          <div className="p-1">
            <label className="block">
              <span className="block text-lg font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                className="peer tracking-wide font-medium text-slate-600  mt-1 block w-full px-3 py-2 bg-[#edeaea] border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>
          <div className="p-1">
            <button
              type="submit"
              className="w-full text-lg mt-[10%] px-2 py-1.5 text-center text-white bg-blue-800 rounded-lg cursor-pointer transition-opacity duration-500 hover:opacity-90"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
