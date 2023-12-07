import React from "react";
import Fetcher from "../api/Fetcher";
import { useMutation } from "react-query";

type Props = {};
type FormValues = {
  name:string,
  email:string,
  comment:string
}
type IErrMessages = {
  email:string,
  name:string,
  surname:string,
  comment:string
}

const validateFormData = (formData:IErrMessages, type:"email"|"comment"|"name"|"surname") : string => {
  const { email, name, surname,comment } = formData;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; // Email format regex
  
  // Error messages
  const errorMessages :IErrMessages = {
    email: "Please enter a valid email.",
    name: "Please enter a valid name.",
    surname: "Please enter a valid surname.",
    comment:"Please do not leave comment box empty."
  };
  
  if(type === 'name'){
    if (!name || name.match(/[^a-zA-Z\s]/)) {
      return errorMessages.name
     }
  }else if(type === 'surname'){
    if (!surname || surname.match(/[^a-zA-Z\s]/)) {
     return errorMessages.surname
    }
  }else if(type === 'email'){
    if (!email || !email.match(emailRegex)) {
      return errorMessages.email
    }
  }else if (type === 'comment'){
    if(!comment){
      return errorMessages.comment
    }
  }
};

const ContactForm = (props: Props) => {
  const sendComment = useMutation({
    mutationFn:(request:FormValues)=>{
      return Fetcher.post('/contact',request)
    }
  })

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    const payload = new FormData(e.target)
    sendComment.mutate(payload)
  }
  
  return (
    <section>
      <div className="container p-2">
        <div className="p-1">
          <h1 className="text-2xl font-sans text-center font-bold dark:text-gray-200">
            Contact Us
          </h1>
        </div>
        <form onSubmit={(e:React.FormEvent)=>handleSubmit(e)} className="max-w-screen-sm mx-auto">
          <div className="w-full p-1 flex max-sm:flex-col">
            <div className="relative w-full p-1 max-sm:mr-0 mr-2">
              <input
                type="text"
                id="name"
                className="peer w-full bg-transparent border dark:focus:border-[#0ea5e9] rounded-md border-[#e2e8f0] dark:border-[#334155] p-2 placeholder:text-transparent outline-none focus:border-[2px] focus:border-[#0ea5e9]"
                placeholder="name"
                name="name"
              />
              <label
                htmlFor="name"
                className="absolute select-none left-1 ml-1 top-2.5 bg-white dark:bg-inDark px-1 text-[#94a3b8] text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-4 peer-focus:px-1 peer-focus:text-sm peer-focus:text-[#0ea5e9]"
              >
                Name
              </label>
            </div>
            <div className="relative w-full p-1">
              <input
                type="text"
                id="surname"
                className="peer bg-transparent dark:focus:border-[#0ea5e9] w-full dark:border-[#334155] border rounded-md border-[#e2e8f0] p-2 placeholder:text-transparent outline-none focus:border-[2px] focus:border-[#0ea5e9]"
                placeholder="name"
                name="surname"
              />
              <label
                htmlFor="surname"
                className="absolute select-none left-1 ml-1 top-2.5 bg-white dark:bg-inDark px-1 text-[#94a3b8] text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-4 peer-focus:px-1 peer-focus:text-sm peer-focus:text-[#0ea5e9]"
              >
                Surname
              </label>
            </div>
          </div>
          <div className="p-1 mt-2">
            <div className="relative p-1">
              <input
                type="email"
                id="email"
                className="peer bg-transparent w-full dark:focus:border-[#0ea5e9] dark:border-[#334155] border rounded-md border-[#e2e8f0] p-2 placeholder:text-transparent outline-none focus:border-[2px] focus:border-[#0ea5e9] invalid:border-pinkWarning invalid:text-pinkWarning"
                placeholder="name"
                name="email"
              />
              <label
                htmlFor="email"
                className="select-none absolute left-1 ml-1 top-3 bg-white dark:bg-inDark px-1 text-[#94a3b8] text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-4 peer-focus:px-1 peer-focus:text-sm peer-focus:text-[#0ea5e9]"
              >
                Email
              </label>
              <p className="hidden text-pinkWarning mt-2 peer-invalid:block">
                Please enter valid email.
              </p>
            </div>
          </div>
          <div className="p-1">
            <div className="relative w-full p-1">
              <textarea
                typeof="text"
                id="comment"
                className="peer w-full dark:border-[#334155] bg-transparent border rounded-md border-[#e2e8f0] p-2 placeholder:text-transparent outline-none focus:border-[2px] focus:border-[#0ea5e9] dark:focus:border-[#0ea5e9]"
                placeholder="name"
              ></textarea>
              <label
                htmlFor="comment"
                className="select-none absolute left-1 ml-1 top-2.5 bg-white dark:bg-inDark px-1 text-[#94a3b8] text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-4 peer-focus:px-1 peer-focus:text-sm peer-focus:text-[#0ea5e9]"
              >
                Comment
              </label>
            </div>
          </div>
          <div className="flex justify-end p-1">
            <button type="submit" className="px-2 py-1 text-lg transition duration-500 hover:bg-none hover:text-[#12A2E9] border-[2px] border-transparent hover:border-[#12A2E9] active:ring active:ring-[#a78bfa] bg-first text-white rounded-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
