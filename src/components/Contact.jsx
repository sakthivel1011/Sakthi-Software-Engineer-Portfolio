import { useState } from "react";
import { HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub size={20} />,
      color: "hover:text-slate-900 hover:border-slate-300",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin size={20} />,
      color: "hover:text-slate-900 hover:border-slate-300",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <FaTwitter size={20} />,
      color: "hover:text-slate-900 hover:border-slate-300",
    },
  ];

  return (
    <section id="contact" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="text-slate-500">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss your next project or specialized needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Info */}
          <div className="space-y-10 py-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                Let's work <span className="text-slate-500">together</span>
              </h3>
              <p className="text-slate-500 leading-relaxed text-base font-normal">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                via the form or my social handles.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 transition-all duration-300">
                  <HiMail size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-0.5 text-base">
                    Email
                  </h4>
                  <a
                    href="mailto:sakthivel.p1011@gmail.com"
                    className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
                  >
                    sakthivel.p1011@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 transition-all duration-300">
                  <HiLocationMarker size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-0.5 text-base">
                    Location
                  </h4>
                  <p className="text-slate-500 text-sm">Your City, Country</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-base">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white border border-slate-200 rounded-xl text-slate-500 ${social.color} transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-600 mb-2 ml-1 uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${
                    errors.name ? "border-red-300 bg-red-50/10" : ""
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500 ml-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-600 mb-2 ml-1 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${
                    errors.email ? "border-red-300 bg-red-50/10" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-500 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-600 mb-2 ml-1 uppercase tracking-wider"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`input-field resize-none ${
                    errors.message ? "border-red-300 bg-red-50/10" : ""
                  }`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-xs text-red-500 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center mt-2 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </span>
                ) : (
                  <>
                    Submit Form{" "}
                    <HiPaperAirplane className="rotate-90 text-sm group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="p-4 bg-slate-900 text-white rounded-xl text-xs font-medium text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
