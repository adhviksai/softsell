import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    customLicenseType: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.company) errors.company = "Company is required";
    if (!formData.licenseType) errors.licenseType = "Select a license type";
    if (!formData.message) errors.message = "Message is required";
    if (formData.licenseType === "other" && !formData.customLicenseType) {
      errors.customLicenseType = "Please enter the license type";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Form submitted!");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>SoftSell | Turn Unused Software Licenses into Profit</title>
        <meta
          name="description"
          content="SoftSell helps you evaluate and resell unused software licenses in minutes — fast, easy, and secure."
        />
        <meta
          name="keywords"
          content="software license resale, software license management, license valuation, unused licenses, software asset management"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:title"
          content="SoftSell | Turn Unused Software Licenses into Profit"
        />
        <meta
          property="og:description"
          content="SoftSell helps you evaluate and resell unused software licenses in minutes — fast, easy, and secure."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/softsell-og-image.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/" />
        <meta
          property="twitter:title"
          content="SoftSell | Turn Unused Software Licenses into Profit"
        />
        <meta
          property="twitter:description"
          content="SoftSell helps you evaluate and resell unused software licenses in minutes — fast, easy, and secure."
        />
        <meta
          property="twitter:image"
          content="https://yourdomain.com/softsell-twitter-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="SoftSell" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        } font-sans`}
      >
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className={`${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600 to-indigo-700"
              : "bg-gradient-to-r from-blue-500 to-blue-600"
          } text-center py-16 px-6 relative mb-2`}
        >
          <div className="max-w-screen-lg mx-auto">
            <motion.h1
              variants={fadeInVariants}
              className="text-5xl md:text-6xl font-extrabold mb-6 text-white"
            >
              SoftSell
            </motion.h1>
            <motion.h2
              variants={fadeInVariants}
              className="text-2xl md:text-3xl font-semibold mb-8 text-white/90"
            >
              Turn Unused Software Licenses into Profit
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto"
            >
              SoftSell helps you evaluate and resell unused software licenses in
              minutes — fast, easy, and secure.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`font-semibold px-6 py-3 rounded transition-all duration-300 ease-in-out border ${
                isDarkMode
                  ? "bg-gray-100 text-blue-700 hover:bg-indigo-700 hover:text-white border-white"
                  : "bg-gray-100 text-blue-700 hover:bg-blue-600 hover:text-white border-white"
              }`}
            >
              Sell My Licenses
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ease-in-out ${
              isDarkMode
                ? "bg-gray-600 text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {isDarkMode ? "🌙" : "🌞"}
          </motion.button>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16 px-6 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            {[
              { title: "Upload License", icon: "🧾" },
              { title: "Get Valuation", icon: "💰" },
              { title: "Get Paid", icon: "🏦" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded transition transform hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-gray-800 shadow-md hover:shadow-lg"
                    : "bg-gray-100 shadow-md hover:shadow-2xl"
                }`}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 * idx, duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WHY CHOOSE US */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerVariants}
          className="py-16 px-6 text-center"
        >
          <motion.h2
            variants={fadeInVariants}
            className="text-3xl font-bold mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Fast Process",
                desc: "Sell licenses in minutes.",
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "Your data stays safe with us.",
              },
              {
                icon: "💼",
                title: "Business Friendly",
                desc: "We work with all company sizes.",
              },
              {
                icon: "📊",
                title: "Transparent Valuation",
                desc: "Know exactly what you're getting.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded transition transform hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-gray-800 shadow-md hover:shadow-lg"
                    : "bg-gray-100 shadow-md hover:shadow-2xl"
                }`}
              >
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  className="text-4xl mb-3"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-gray-300" : "text-sm text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16 px-6 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-12"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Jane Doe",
                role: "IT Manager",
                company: "TechCorp",
                quote:
                  "SoftSell helped us recover value from unused licenses. Highly recommended!",
              },
              {
                name: "John Smith",
                role: "Procurement Lead",
                company: "InnovaSoft",
                quote:
                  "A seamless and secure process. We turned shelfware into cash.",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded transition transform hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-gray-800 shadow-md hover:shadow-lg"
                    : "bg-gray-100 shadow-md hover:shadow-2xl"
                }`}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                  className="italic mb-4"
                >
                  "{t.quote}"
                </motion.p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-400">
                  {t.role}, {t.company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/*Get In Touch*/}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16 px-6 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-10"
          >
            Get In Touch
          </motion.h2>
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto grid gap-6 text-left"
          >
            <motion.div
              className="grid md:grid-cols-3 gap-4"
              variants={fadeInVariants}
            >
              {["name", "email", "company"].map((field) => (
                <motion.div
                  key={field}
                  className={`relative overflow-hidden border-b-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  } pb-1 group`}
                >
                  <motion.label
                    htmlFor={field}
                    className={`absolute left-1 transform transition-all duration-300 text-sm ${
                      formData[field]
                        ? "-translate-y-5 text-xs opacity-70"
                        : "translate-y-0"
                    } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </motion.label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className={`w-full bg-transparent pt-6 outline-none ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  />
                  <motion.div
                    className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                      isDarkMode ? "bg-blue-500" : "bg-blue-600"
                    }`}
                  />
                  {formErrors[field] && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-xs mt-1 absolute right-0 top-0"
                    >
                      {formErrors[field]}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className={`relative border-b-2 ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } pb-1 group mt-8`}
            >
              <motion.label
                htmlFor="licenseType"
                className={`absolute left-1 transform transition-all duration-300 text-sm ${
                  formData.licenseType
                    ? "-translate-y-5 text-xs opacity-70"
                    : "translate-y-0"
                } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                License Type
              </motion.label>
              <motion.select
                whileFocus={{ scale: 1.05 }}
                whileHover={{ scale: 1.02 }}
                id="licenseType"
                value={formData.licenseType}
                onChange={(e) =>
                  setFormData({ ...formData, licenseType: e.target.value })
                }
                className={`w-full bg-transparent pt-6 pb-2 outline-none appearance-none ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } pl-4 pr-4`} // Added padding on both sides to ensure alignment
              >
                <option
                  value=""
                  disabled
                  className={`py-2 px-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  Select a license
                </option>
                <option
                  value="windows"
                  className={`py-2 px-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  Windows
                </option>
                <option
                  value="office"
                  className={`py-2 px-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  Microsoft Office
                </option>
                <option
                  value="adobe"
                  className={`py-2 px-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  Adobe Suite
                </option>
                <option
                  value="other"
                  className={`py-2 px-4 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  Other
                </option>
              </motion.select>

              <motion.div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                }`}
              />
              {formErrors.licenseType && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1 absolute right-0 top-0"
                >
                  {formErrors.licenseType}
                </motion.p>
              )}
            </motion.div>

            {formData.licenseType === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={`relative border-b-2 ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                } pb-1 group`}
              >
                <motion.label
                  htmlFor="customLicenseType"
                  className={`absolute left-1 transform transition-all duration-300 text-sm ${
                    formData.customLicenseType
                      ? "-translate-y-5 text-xs opacity-70"
                      : "translate-y-0"
                  } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Enter License Type
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="customLicenseType"
                  value={formData.customLicenseType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      customLicenseType: e.target.value,
                    })
                  }
                  className={`w-full bg-transparent pt-6 outline-none ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                />
                <motion.div
                  className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-600"
                  }`}
                />
                {formErrors.customLicenseType && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-xs mt-1 absolute right-0 top-0"
                  >
                    {formErrors.customLicenseType}
                  </motion.p>
                )}
              </motion.div>
            )}

            <motion.div
              variants={fadeInVariants}
              className={`relative border-b-2 ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } pb-1 group mt-8`}
            >
              <motion.label
                htmlFor="message"
                className={`absolute left-1 transform transition-all duration-300 text-sm ${
                  formData.message
                    ? "-translate-y-5 text-xs opacity-70"
                    : "translate-y-0"
                } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Message
              </motion.label>
              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                id="message"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full bg-transparent pt-6 outline-none resize-none ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
              <motion.div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                }`}
              />
              {formErrors.message && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-xs mt-1 absolute right-0 top-0"
                >
                  {formErrors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="flex justify-end mt-8"
              variants={fadeInVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`relative overflow-hidden px-8 py-3 rounded-full transition group ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                }`}
              >
                <span className="relative z-10">Submit</span>
                <motion.span
                  className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  whileHover={{ scale: 1.5, opacity: 0.2 }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className={`w-full py-6 text-center text-sm ${
            isDarkMode
              ? "bg-gray-800 text-gray-400"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          }`}
        >
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </motion.footer>
      </motion.main>
    </>
  );
}

export default App;
