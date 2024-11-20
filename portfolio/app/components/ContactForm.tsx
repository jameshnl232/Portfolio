"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

export default function ContactForm({
  image,
}: {
  image: Content.ContactSliceDefaultPrimary["image"];
}) {
  const [result, setResult] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`,
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        form.current?.reset();
      } else {
        setResult(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container relative z-30 mx-auto mb-10 w-full">
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div className="w-full max-w-md md:w-1/2">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-left">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={onSubmit} className="mx-5 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                className="h-32 w-full"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {result && (
            <span
              className={`text-center ${
                result.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </span>
          )}{" "}
        </div>
        <div className="mt-8 w-full max-w-md md:mt-0 md:w-1/2">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <PrismicNextImage field={image} fill className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
