"use client";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-16 sm:pb-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto">
            <Image
              src="/images/profile.jpg"
              alt={PERSONAL_INFO.name}
              fill
              className="rounded-full object-cover border-4 border-primary/20 shadow-xl"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {PERSONAL_INFO.title}
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">View My Work</Button>
          </Link>
          <Link href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Get In Touch</Button>
          </Link>
          <a href={PERSONAL_INFO.resumePath} download className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-accent active:bg-accent/80 transition-colors touch-manipulation"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            );
          })}
        </motion.div>

        {/* Scroll indicator - hidden on very small screens */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
