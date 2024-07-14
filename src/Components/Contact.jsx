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
    <div className="flex flex-col justify-center bg-black">
      <div className="2xl:max-w-[1300px] mx-auto md:px-16 lg:max-w-[1000px] w-full flex flex-col px-5">
        <div className="flex items-center gap-x-3 pt-24 pb-14">
          <div class="w-3 h-3 rounded-full bg-white glow"></div>
          <div className="text-white text-7xl grad">Contact</div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-zinc-800 mx-auto via-white to-zinc-800 w-11/12 translate-y-[2px] z-50"></div>
        <div className="rounded-3xl bg-zinc-900 p-4 border-[2px] border-zinc-800">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full mx-auto pt-10"
          >
            <div className="flex flex-col">
              <div className="py-2 font-semibold text-lg text-white">
                [ NAME ]
              </div>
              <input
                type="text"
                name="user_name"
                className="p-3 rounded-xl bg-black border-[1px] border-zinc-800"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2 font-semibold text-lg text-white">
                [ EMAIL ADDRESS ]
              </div>
              <input
                className="p-3 rounded-xl bg-black border-[1px] border-zinc-800"
                name="user_email"
                type="email"
                placeholder="not@fake-email.com"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2 font-semibold text-lg text-white">
                [ SUBJECT ]
              </div>
              <input
                className="p-3 rounded-xl bg-black border-[1px] border-zinc-800"
                name="subject"
                placeholder="Attention: Important Yeti Sighting Report"
                required
              />
            </div>
            <div className="flex flex-col w-full items-center pb-6">
              <div className="flex flex-col w-full pb-8">
                <div className="py-2 font-semibold text-lg text-white">
                  [ MESSAGE ]
                </div>
                <textarea
                  name="message"
                  className="p-3 h-36 bg-black border-[1px] border-zinc-800 rounded-xl"
                  placeholder="Example Text"
                  required
                />
              </div>
              <div className="w-[153px] h-[60px] rounded-md absolute translate-y-[216px] fill-none border-[2px] border-zinc-600"></div>
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
    </div>
  );
};

export default Contact;
