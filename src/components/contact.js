import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Map your fields to the EmailJS template variables
      // 1. Send message to you
      const result = await emailjs.send(
        "service_66ru1tl",
        "template_d2qjj2s",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "RxN0YmNiea0PGR7rF"
      );
  
      // 2. Send auto-reply to USER
    await emailjs.send(
      "service_66ru1tl",
      "template_ypebzpr", // template for sending confirmation to user
      {
        from_name: form.name,
        reply_to: form.email, // user’s email → goes into {{reply_to}}
      },
      "RxN0YmNiea0PGR7rF"
    );

      console.log("EmailJS success:", result.text);
      setSent(true);
      setForm({ name: "", email: "", message: "" }); // clear fields
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sending failed. Please try again.");
    } finally {
      setSending(false);
      // hide “sent” message after a short delay, optional
      setTimeout(() => setSent(false), 2500);
    }
  };

  const isValid =
    form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section id="contact" className="contact cert-scope bg-gradient-hero text-white py-5">
      <div className="container my-5">
       <h2 className="text-center mb-4 fw-bold">📩 Contact Me</h2>
  <div className="row justify-content-center">
    
    <div className="col-12 col-md-8 col-lg-5">
       
      <div className="form-card">

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
          <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

          <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>


          <button
                type="submit"
                className="btn btn-gradient w-100"
                disabled={!isValid || sending}
              >
                {sending ? "Sending..." : sent ? "Sent ✅" : "Send Message"}
              </button>
        </form>
      </div>
    </div>
  </div>
</div>
      <style>{`
      .contact {
  background: linear-gradient(to right, #0d6efd, #6610f2);
}
  .form-card{
    background: rgba(15,23,42,.72);                 /* deep slate glass */
    border: 1px solid rgba(148,163,184,.18);
    border-radius: 16px;
    padding: 24px;                                   /* <- perfect body padding */
    color: #fff;
    box-shadow: 0 10px 28px rgba(0,0,0,.35);
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  }

  .text-muted-200 { color: #e5e7eb; }               /* label color */

  .form-glass{
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.18);
    color: #fff;
    border-radius: 10px;
    padding: 12px 14px;                              /* input padding */
    outline: none;
  }
  .form-glass::placeholder{ color: rgba(255,255,255,.65); }
  .form-glass:focus{
    border-color: #60a5fa;                           /* sky-400 */
    box-shadow: 0 0 0 3px rgba(99,102,241,.25);      /* indigo focus ring */
  }

  .btn-gradient{
    margin-top: 14px;                                /* space after fields */
    background: linear-gradient(90deg,#22d3ee,#6366f1,#8b5cf6);
    border: 0;
    color: #fff;
    padding: 10px 14px;                              /* button padding */
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(99,102,241,.35);
  }
  .btn-gradient:hover{ filter: brightness(1.06); }
      `}</style>
    </section>
  );
}

export default Contact;
