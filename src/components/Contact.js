"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

export default function Contact() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2,
    initial: false,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const contactLinks = [
    {
      name: "Email",
      value: "shanahmad.dev@gmail.com",
      icon: "mdi:email-outline",
      href: "mailto:shanahmad.dev@gmail.com",
      color: "from-gray-500/20 to-gray-600/20",
      textColor: "text-red-400",
      borderColor: "border-red-400/30",
    },
    {
      name: "GitHub",
      value: "github.com/ShnAhmad",
      icon: "mdi:github",
      href: "https://github.com/ShnAhmad",
      color: "from-gray-500/20 to-gray-600/20",
      textColor: "text-gray-400",
      borderColor: "border-gray-400/30",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/zeeshan-ahmad2",
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/zeeshan-ahmad2/",
      color: "from-gray-500/20 to-gray-600/20",
      textColor: "text-blue-400",
      borderColor: "border-blue-400/30",
    },
  ];

  return (
    <section
      aria-label="Contact"
      className="relative w-full py-8 text-white md:py-12"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-white/20" />

            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              Get in Touch
            </span>

            <div className="h-px w-8 bg-white/20" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Let's connect and discuss opportunities, collaborations, or just
            say hello.
          </p>
        </motion.div>

        <div ref={containerRef} className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: index * 0.1,
                    },
                  },
                }}
                className={`group rounded-2xl border ${contact.borderColor} bg-gradient-to-br ${contact.color} p-6 backdrop-blur-md transition-all duration-300 hover:border-opacity-100 hover:shadow-current hover:bg-white/10`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    icon={contact.icon}
                    className={`h-10 w-10 ${contact.textColor}`}
                  />
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {contact.name}
                </h3>

                <p className="mb-4 text-sm text-white/75">
                  {contact.value}
                </p>

                <div className="flex items-center space-x-2 text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                  <span>Connect</span>

                  <Icon
                    icon="mdi:open-in-new"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}