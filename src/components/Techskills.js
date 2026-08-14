"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  Award,
  Cloud,
  Server,
  Monitor,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TechSkills() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("frontend");
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

  const skillCategories = {
    frontend: {
      title: "Frontend & Mobile",
      icon: Monitor,
      color: "blue",
      skills: [
        { name: "React.js", level: 95, Icon: "logos:react" },
        { name: "Next.js", level: 90, icon: "logos:nextjs-icon" },
        { name: "TypeScript", level: 90, icon: "logos:typescript-icon" },
        { name: "React Native", level: 85, icon: "logos:react" },
        { name: "Electron.js", level: 85, icon: "logos:electron" },
        { name: "Redux Toolkit", level: 85, icon: "logos:redux" },
        {
          name: "Tailwind CSS",
          level: 85,
          icon: "vscode-icons:file-type-tailwind",
        },
        { name: "Material UI", level: 85, icon: "logos:material-ui" },
        { name: "Flutter", level: 70, icon: "logos:flutter" },
        { name: "GraphQL / Apollo", level: 75, icon: "logos:graphql" },
        {
          name: "React Hook Form",
          level: 75,
          icon: "simple-icons:reacthookform",
        },
        { name: "SCSS / SASS", level: 75, icon: "logos:sass" },
      ],
    },
    backend: {
      title: "Backend",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", level: 85, icon: "logos:nodejs-icon" },
        { name: "Express.js", level: 80, icon: "simple-icons:express" },
        { name: "REST APIs", level: 90, icon: "mdi:api" },
        { name: "GraphQL", level: 80, icon: "logos:graphql" },
        { name: "PostgreSQL", level: 80, icon: "logos:postgresql" },
        { name: "MongoDB", level: 75, icon: "logos:mongodb-icon" },
        { name: "SQLite", level: 80, icon: "vscode-icons:file-type-sqlite" },
        { name: "Supabase", level: 75, icon: "logos:supabase-icon" },
        { name: "Firebase", level: 70, icon: "logos:firebase" },
        { name: "WebSockets", level: 75, icon: "mdi:access-point-network" },
      ],
    },
    devops: {
      title: "DevOps / Cloud",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "AWS", level: 75, icon: "logos:aws" },
        { name: "Amazon S3", level: 80, icon: "logos:aws-s3" },
        { name: "Vercel", level: 85, icon: "logos:vercel-icon" },
        { name: "Git", level: 90, icon: "logos:git-icon" },
        { name: "GitHub", level: 90, icon: "logos:github-icon" },
        { name: "GitLab", level: 75, icon: "logos:gitlab" },
        { name: "CI/CD", level: 70, icon: "mdi:infinity" },
        { name: "Postman", level: 85, icon: "logos:postman-icon" },
        { name: "Jira", level: 80, icon: "logos:jira" },
      ],
    },
  };

  const colorStyles = {
    blue: {
      tabClass:
        "bg-blue-600/20 text-blue-400 border border-blue-400/30",
      valueClass: "text-blue-400",
      gradientClass: "from-blue-500 to-blue-400",
    },
    green: {
      tabClass:
        "bg-green-600/20 text-green-400 border border-green-400/30",
      valueClass: "text-green-400",
      gradientClass: "from-green-500 to-green-400",
    },
    purple: {
      tabClass:
        "bg-purple-600/20 text-purple-400 border border-purple-400/30",
      valueClass: "text-purple-400",
      gradientClass: "from-purple-500 to-purple-400",
    },
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: Monitor, color: "blue" },
    { id: "backend", label: "Backend", icon: Server, color: "green" },
    { id: "devops", label: "DevOps/Cloud", icon: Cloud, color: "purple" },
  ];

  return (
    <section
      aria-label="Technical Skills"
      className="relative w-full py-8 md:py-12 text-white"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              Technical Expertise
            </span>
            <div className="h-px w-8 bg-white/20"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tech Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70">
            A comprehensive overview of my technical skills, certifications, and
            specialized expertise across various technologies and platforms.
          </p>
        </motion.div>

        <div ref={containerRef} className="mx-auto max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 md:mb-12 px-2">
            <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 sm:gap-0 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md w-full sm:w-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base ${
                      isActive
                        ? colorStyles[tab.color].tabClass
                        : "text-white/70 hover:text-white/90 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split("/")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {skillCategories[activeTab].skills.map((skill) => {
                const skillIcon = skill.icon ?? skill.Icon;
                const activeColor = colorStyles[skillCategories[activeTab].color];

                return (
                  <div
                    key={skill.name}
                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Icon icon={skillIcon} className="h-7 w-7 text-white/90" />
                        <div>
                          <h3 className="font-semibold text-white">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-white/60">Proficiency</p>
                        </div>
                      </div>
                      <div className={`text-sm font-bold ${activeColor.valueClass}`}>
                        {skill.level}%
                      </div>
                    </div>

                    <div className="relative">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${activeColor.gradientClass}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
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
