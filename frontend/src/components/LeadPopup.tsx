import React, { useState } from "react";
import { X, Mail, Phone, User, MessageSquare, Send } from "lucide-react";

interface LeadPopupProps {
  onClose: () => void;
}

export default function LeadPopup({ onClose }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "abroad",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log("Lead captured:", formData);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 text-white rounded-3xl overflow-hidden shadow-2xl animate-scale-up">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-amber-400">Get Free Consultation</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Share your details and our education consultants will call you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Interested Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                  >
                    <option value="career">Career Counselling</option>
                    <option value="abroad">Study Abroad Consultation</option>
                    <option value="visa">Visa Guidance</option>
                    <option value="scholarship">Scholarship & Funding</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Your Message (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-slate-500">
                      <MessageSquare size={18} />
                    </span>
                    <textarea
                      name="message"
                      placeholder="How can we help you?"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer disabled:opacity-50 text-sm mt-2"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-slate-950" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                    </svg>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="py-8 text-center flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="28" height="28">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-slate-400 text-sm max-w-xs mx-auto mb-6">
                Your request has been received. One of our consultants will contact you shortly to plan your career path.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
