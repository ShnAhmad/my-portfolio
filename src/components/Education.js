"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import {
  Award,
  BookOpenText,
  Calendar,
  GraduationCap,
  MapPin,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Education() {
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

  const education = {
    degree: "Bachelor's in Software Engineering",
    school: "Comsats University Islamabad, Abbottabad Campus",
    period: "2020 - 2024",
    location: "Abbottabad, Pakistan",
    description:
      "Focused on software engineering, data structures, database systems, web technologies, and problem-solving fundamentals. Built a strong base in programming, system design, and collaborative development.",
    icon: GraduationCap,
    image: "/images/university.png",
  };

  const certifications = [
    {
      name: "Merit Certificate",
      code: "",
      status: "completed",
      icon: Award,
      color: "yellow",
      date: "Completed",
    },
    {
      name: "CCNAv7",
      code: "CCNA",
      status: "completed",
      icon: Award,
      color: "blue",
      date: "Completed",
    },
    {
      name: "Certificate of Appreciation",
      code: "",
      status: "completed",
      icon: Award,
      color: "purple",
      date: "Completed",
    },
  ];

  const certificationColors = {
    green: "bg-green-600/20 text-green-400 border-green-400/30",
    yellow: "bg-yellow-600/20 text-yellow-400 border-yellow-400/30",
    blue: "bg-blue-600/20 text-blue-400 border-blue-400/30",
    purple: "bg-purple-600/20 text-purple-400 border-purple-400/30",
    red: "bg-red-600/20 text-red-400 border-red-400/30",
  };

  return (
    <section aria-label="Education" className="relative w-full py-8 md:py-12 text-white">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              Academic Background
            </span>
            <div className="h-px w-8 bg-white/20"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Education
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            A foundation in Software Engineering and a continued focus on practical,
            modern software engineering.
          </p>
        </motion.div>

        <div ref={containerRef} className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:from-white/15 hover:to-white/10"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full min-h-80 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <img
                  src={education.image}
                  alt={education.school}
                  className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                      Education
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-white/75 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-white/60" />
                    <span className="font-medium text-white/90">{education.school}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-white/60" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white/60" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.2 },
              },
            }}
            className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-600/20">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Certifications</h3>
                <p className="text-sm text-white/70">
                  Professional credentials & achievements
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => {
                return (
                  <div
                    key={cert.name}
                    className="flex flex-col items-start justify-between p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      {cert.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                      )}

                      <div>
                        <h4 className="font-medium text-white">
                          {cert.name}
                        </h4>

                        {cert.code && (
                          <p className="text-xs text-white/60">{cert.code}</p>
                        )}
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        certificationColors[cert.color]
                      }`}
                    >
                      {cert.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
