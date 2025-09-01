"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Home,
  Users,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

// shadcn/ui imports
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

// Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  rentalType: z.enum(["PG", "Apartment", "Hostel"]),
  moveIn: z.string().min(1, "Pick a date"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please add more details (10+ chars)"),
  whatsapp: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { whatsapp: true } as any,
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1000)); // fake API
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-white text-slate-800 pt-20 sm:pt-24">
  <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:py-24">
        {/* Hero */}
        <div className="mb-12 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl"
            >
              Get in touch about your next stay
            </motion.h1>
            <p className="mt-3 max-w-prose text-slate-600 sm:text-base">
              Tell us what you’re looking for —{" "}
              <span className="font-semibold text-blue-600">PG</span>,
              <span className="font-semibold text-blue-600"> Apartment</span>, or{" "}
              <span className="font-semibold text-blue-600">Hostel</span> — and
              we’ll help you find the perfect rental.
            </p>

            {/* Quick Contacts */}
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
              <a
                href="mailto:hello@yourrentals.com"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition hover:bg-blue-50"
              >
                <Mail className="h-4 w-4 text-blue-600" />
                hello@yourrentals.com
              </a>
              <a
                href="tel:+919999999999"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition hover:bg-blue-50"
              >
                <Phone className="h-4 w-4 text-blue-600" />
                +91 99999 99999
              </a>
              <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <MapPin className="h-4 w-4 text-blue-600" /> Bengaluru, India
              </span>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Ideal for students</p>
                  <p className="text-sm font-medium">PG & Hostel options</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Building2 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Verified listings</p>
                  <p className="text-sm font-medium">Apartments across the city</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Home className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">Hassle-free move-in</p>
                  <p className="text-sm font-medium">Flexible terms available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="mx-auto max-w-4xl border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-600">
              Share your requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="rounded-lg border border-green-300 bg-green-50 p-4 text-sm">
                <p className="font-medium text-green-700">
                  Thanks! We’ve received your request.
                </p>
                <p className="mt-1 text-slate-600">
                  Our team will reach out within 24 hours with the best matches.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Full name</Label>
                    <Input
                      id="fullName"
                      placeholder="Aarav Sharma"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98xxxxxxx"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label>Rental type</Label>
                    <Select
                      onValueChange={(v) => setValue("rentalType", v as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PG">PG</SelectItem>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="Hostel">Hostel</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.rentalType && (
                      <p className="text-xs text-red-500">
                        {errors.rentalType.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="moveIn">Preferred move-in</Label>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input id="moveIn" type="date" {...register("moveIn")} />
                    </div>
                    {errors.moveIn && (
                      <p className="text-xs text-red-500">
                        {errors.moveIn.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="budget">Monthly budget (₹)</Label>
                    <div className="relative">
                      <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="budget"
                        placeholder="e.g., 12000"
                        className="pl-9"
                        {...register("budget")}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Anything else?</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Share locality, sharing preference, furnishings, etc."
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <Switch
                      defaultChecked
                      onCheckedChange={(v) => setValue("whatsapp", v)}
                    />
                    Contact me on WhatsApp
                  </label>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-90"
                  >
                    {submitting ? "Sending..." : "Send request"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Footer strip */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
            Typically responds within 1 hour
          </div>
          <div>Business hours: Mon–Sat 9:00–18:00 IST</div>
        </div>
      </div>
    </div>
  );
}
