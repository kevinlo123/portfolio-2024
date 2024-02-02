'use client'

import Link from 'next/link'

export default function Contact() {

  async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "b7d6772d-7c43-4c44-8091-8fa4c5998269");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });

      const result = await response.json();

      if (result.success) {
          document.getElementById("form").reset();
          document.getElementById("form").style.display = 'none';
          document.getElementsByClassName("thank-you")[0].style.display = 'block';
      }
  }

return (
    <main className="contact my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      <section className="section-contact lg:flex">
        <div className="section-contact__inner lg:w-8/12">
          <h1 className="uppercase font-bold project-name leading-[100%] text-[40px] lg:text-[100px] mb-10">Contact</h1>
          <p className="mb-10 lg:w-[600px]">Have a question or a project in mind? Let&rsquo;s chat! Drop me a message below , and let&rsquo;s kick off a conversation. Whether it&rsquo;s a collaboration opportunity or just to say hello, your message is always welcome.</p>
          <h2 className="thank-you hidden font-bold text-[40px] lg:text-[50px] mt-10">Message received! I&rsquo;ll get back to you soon. Check out my portfolio in the meantime!</h2>
          <form id="form" className="flex flex-col text-black" onSubmit={handleSubmit}>
            <input className="rounded-none input mb-10 py-2.5 px-2.5 bg-transparent border" type="text" placeholder="Name" name="name" required/>
            <input className="rounded-none	input mb-10 py-2.5 px-2.5 bg-transparent border" type="email" placeholder="Email" name="email" required/>
            <textarea className="rounded-none	input mb-10 py-2.5 px-2.5 h-[500px] bg-transparent border" placeholder="Message" name="message" required></textarea>
            <button className="flex justify-center bg-white hover:bg-black hover:text-white transition-colors get-in-touch block text-center text-black text-[16px] rounded-full px-[4rem] w-[100px] center-text py-2 border hover:border-white" type="submit">Send</button>
          </form>
        </div>
        <div className="section-contact__inner-two mt-10 lg:mt-[15.75rem] lg:ml-auto">
          <div className="border py-9 px-9 mb-10 bg-white text-black max-w-[265px]">
            <h3 className="uppercase font-bold">Direct Inquiry:</h3>
            <p>lopezkevin175@gmail.com</p>
            <p>857-326-1512</p>
          </div>
          <div className="border px-9 py-9 text-black bg-white max-w-[265px]">
            <h3 className="uppercase font-bold">Location:</h3>
            <p>Boston, Ma</p>
            <p>United States</p>
          </div>
        </div>
      </section>
      <Link className="flex items-center justify-center gap-4 mt-[100px]" href="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        Go back to home page
      </Link>
    </main>
  );
}