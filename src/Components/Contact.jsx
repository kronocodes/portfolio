import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ShinyButton from "./Others/button";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_9ymic2h", form.current, {
        publicKey: "zqd-_sv9YceyVsPOq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsEmailSent(true);
          // Clear input fields
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full z-10">
      <div className="flex items-center gap-x-3 pb-14">
        <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className="text-white text-7xl md:text-8xl grad">Contact</div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-zinc-800 mx-auto via-white to-zinc-800 w-11/12 translate-y-[2px] z-40"></div>
      <div className="rounded-3xl bg-zinc-900 px-4 py-2 border-[2px] border-zinc-800 mb-32">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full mx-auto pt-10"
          >
            <div className="flex flex-col">
              <div className="py-1 font-semibold text-lg text-white opacity-80">
                [ NAME ]
              </div>
              <input
                type="text"
                name="user_name"
                className="p-3 rounded-xl bg-black border-[1px] text-zinc-300 border-zinc-800"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2 font-semibold text-lg text-white opacity-80">
                [ EMAIL ADDRESS ]
              </div>
              <input
                className="p-3 rounded-xl bg-black border-[1px] text-zinc-300 border-zinc-800"
                name="user_email"
                type="email"
                placeholder="not@fake-email.com"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2 font-semibold text-lg text-white opacity-80">
                [ SUBJECT ]
              </div>
              <input
                className="p-3 rounded-xl bg-black border-[1px] text-zinc-300 border-zinc-800"
                name="subject"
                placeholder="Attention: Important Yeti Sighting Report"
                required
              />
            </div>
            <div className="flex flex-col w-full items-center pb-6">
              <div className="flex flex-col w-full pb-8">
                <div className="py-2 font-semibold text-lg text-white opacity-80">
                  [ MESSAGE ]
                </div>
                <textarea
                  name="message"
                  className="p-3 h-36 bg-black border-[1px] text-zinc-300 border-zinc-800 rounded-xl"
                  placeholder="Example Text"
                  required
                />
              </div>
              <div className="w-[153px] h-[60px] -mt-[60px] rounded-md translate-y-[56px] fill-none border-[1px] shadow-lg shadow-black border-zinc-600"></div>
              <button type="submit" value="Send">
                <ShinyButton />
              </button>
              {isEmailSent && (
                <div className="text-white mt-2">Email sent successfully!</div>
              )}
            </div>
          </form>
      </div>
    </div>
  );
};

export default Contact;
