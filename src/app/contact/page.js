'use client'

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
          console.log(result);
      }
  }

return (
    <main className="my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      <h1 className="text-white project-name leading-[100%] font-medium text-[55px] lg:text-[80px] mb-14">Let&rsquo;s talk</h1>
      <form id="form" className="flex flex-col text-black" onSubmit={handleSubmit}>
        <input className="input text-white mb-10 py-2.5 px-2.5 bg-transparent border border-white" type="text" placeholder="Name" name="name"/>
        <input className="input text-white mb-10 py-2.5 px-2.5 bg-transparent border border-white" type="email" placeholder="Email" name="email"/>
        <textarea className="input text-white mb-10 py-2.5 px-2.5 h-[500px] bg-transparent border border-white" placeholder="Message" name="message"></textarea>
        <button className="text-white" type="submit">Submit Form</button>
      </form>
    </main>
  );
}