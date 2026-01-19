"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { ContactFormData } from "@/lib/types";
import emailjs from "@emailjs/browser";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJS configuration - set these in your Vercel environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration missing");
        setSubmitStatus("error");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Archit",
        },
        publicKey
      );

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            I'm currently looking for software engineering opportunities. Whether
            you have a question or just want to say hi, feel free to reach out!
          </p>
        </ScrollAnimation>

        {/* Contact Info Cards - Horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          <ScrollAnimation delay={0.1}>
            <Card className="text-center">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="text-center">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Contact Form - Full Width */}
        <ScrollAnimation delay={0.3}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Failed to send message. Please try again or email me directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
