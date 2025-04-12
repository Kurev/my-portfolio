import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { ContainerState } from '../Home';

type Props = {
  handleCloseModal: (containerName: keyof ContainerState) => void;
};

const GmailForms = ({ handleCloseModal }: Props) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "696bc2f3-1bcd-46f6-a00c-e4e6c6a860be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className='w-full flex flex-col gap-4 text-white items-center justify-center'>
        <div className="w-full flex justify-end text-[2rem] px-[7%] text-[#f64343] hover:text-[#f6434399] duration-500 cursor-pointer">
          <FaWindowClose onClick={() => handleCloseModal("gmailForm")} />
        </div>
        
        <h1 className='text-[2.5rem] uppercase font-bold text-[#6f3ef4] font-mono'>Contact Us</h1>

        <div className='flex flex-col gap-2 w-[70%]'>
          <label>Your Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            className="bg-white rounded-lg text-black p-3 w-full" 
          />
        </div>

        <div className='flex flex-col gap-2 w-[70%]'>
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your mobile number" 
            required 
            className="bg-white rounded-lg text-black p-3" 
          />
        </div>

        <div className='flex flex-col gap-2 w-[70%]'>
          <label>Write your message here</label>
          <textarea 
            name="message" 
            placeholder="Enter your message" 
            required 
            className="bg-white rounded-lg text-black p-3"
          />
        </div>

        <button 
          type="submit" 
          className='bg-[#492F9E] mt-3 text-white rounded-xl p-3 items-center gap-2 w-[70%] flex justify-center hover:bg-[#6f3ef4] duration-300'
        >
          Submit now 
        </button>

        <p>{result}</p>
      </form>
    </>
  );
}

export default GmailForms;
