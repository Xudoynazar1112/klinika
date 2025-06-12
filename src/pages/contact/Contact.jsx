import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Contact = () => {
  const [t] = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Ism kiritish majburiy";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon raqam kiritish majburiy";
    } else if (!/^\+?[0-9]{12,13}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Noto'g'ri telefon raqam formati";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await axios.post("http://ec2-13-60-218-79.eu-north-1.compute.amazonaws.com:8000/api/customers/", formData);
      if (response.status === 201 || response.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Desktop version */}
      <div className="hidden md:block w-full max-w-md mx-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#00959B] mb-2">Aloqa</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Biz siz bilan bog'lanishni kutmoqdamiz
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                    {submitError}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00959B] bg-white dark:bg-gray-700 dark:text-white text-lg`}
                    placeholder="Ismingizni kiriting"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">
                    Telefon raqam
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhoneAlt className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#00959B] bg-white dark:bg-gray-700 dark:text-white text-lg`}
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#00959B] text-white py-4 rounded-lg font-medium text-xl hover:bg-[#007a7e] transition-all duration-300 transform hover:scale-[1.02] ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden w-full px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#00959B] mb-2">Aloqa</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Biz siz bilan bog'lanishni kutmoqdamiz
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                    {submitError}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name-mobile">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name-mobile"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#00959B] bg-white dark:bg-gray-700 dark:text-white`}
                    placeholder="Ismingizni kiriting"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone-mobile">
                    Telefon raqam
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhoneAlt className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone-mobile"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 px-3 py-2 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#00959B] bg-white dark:bg-gray-700 dark:text-white`}
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#00959B] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#007a7e] transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
