import { useState } from "react";
import { HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import MailAnimation from "./MailAnimation";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: "Portfolio Contact Form",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send message. Please try again later or reach out via social media.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-slate-50 w-full py-16 md:py-24 px-4 sm:px-0 overflow-hidden relative"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-purple-100/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="section-container relative z-10 py-0">
        {/* Compact Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Reach out for collaborations or just to say hello. I'm always looking for interesting projects.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Details - (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-6 h-full"
          >
            {/* Info Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-6 lg:p-7 shadow-sm border border-slate-100/50 transition-all duration-300"
            >
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 font-display">
                Collaborate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed opacity-90">
                Ready to bring engineering discipline and visual elegance to your next project.
              </p>
            </motion.div>

            {/* Email Animation Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-6 lg:p-7 shadow-sm border border-slate-100/50 flex flex-col items-center justify-center transition-all duration-300 flex-1 min-h-[200px]"
            >
              <MailAnimation email="sakthivel.p1011@gmail.com" />
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-md rounded-3xl p-6 lg:p-7 shadow-sm border border-slate-100/50 transition-all duration-300"
            >
              <h4 className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em] opacity-70">
                Connect Region
              </h4>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Form - (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex"
          >
            <motion.div
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-500/5 border border-slate-100 flex-grow"
            >
              <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field rounded-2xl ${errors.name ? "border-red-200" : ""}`}
                        placeholder="Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field rounded-2xl ${errors.email ? "border-red-200" : ""}`}
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`input-field rounded-2xl resize-none ${errors.message ? "border-red-200" : ""}`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <HiPaperAirplane className="rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
