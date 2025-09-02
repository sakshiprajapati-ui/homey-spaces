"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Camera, BellRing, Lock, FileCheck, Users, MapPin, PhoneCall } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Fallback shimmer if Magic UI not installed
function Shimmer({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex overflow-hidden rounded-2xl">
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      {children}
    </span>
  );
}

// Spotlight background fallback
function SpotlightBG() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/10 blur-3xl" />
      <div className="absolute right-[10%] bottom-[-10%] h-[40vh] w-[40vh] rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-400/10 blur-3xl" />
      <div className="absolute left-[5%] top-[30%] h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
    </div>
  );
}

const features = [
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every PG/Hostel/Apartment is identity-checked and manually reviewed." },
  { icon: Camera, title: "CCTV & Access Logs", desc: "Listings highlight on-premise cameras and gated entries where available." },
  { icon: BellRing, title: "Emergency Support", desc: "Quick-contact for guards/wardens and in-app SOS links." },
  { icon: Lock, title: "Secure Payments", desc: "PCI-compliant checkout with refundable deposits tracked in-app." },
  { icon: FileCheck, title: "Digital Agreements", desc: "E-sign rental terms with timestamped audit trails." },
  { icon: Users, title: "Background Checks", desc: "Optional KYC for tenants and hosts to build trust." },
];

const checklist = [
  "Owner & Property ID Verification",
  "Fire Safety & First-Aid Availability",
  "24/7 Caretaker / Warden Details",
  "Gender-Specific / Family-Only Policies",
  "Neighborhood Safety Score & Map",
  "Secure Visitor Management",
];

export default function SafetySecuritySection({ variant = "default" }: { variant?: "pg" | "hostel" | "apartment" | "default" }) {
  const variantText = {
    pg: "Our PGs are checked for warden availability, food hygiene, and sharing facilities.",
    hostel: "Hostels are reviewed for student safety, curfew policies, and study environments.",
    apartment: "Apartments highlight gated communities, family-friendly spaces, and maintenance.",
    default: "We combine verification, on-ground checks, and secure technology to make your PG/Hostel/Apartment search stress-free.",
  };

  return (
    <section className="relative mx-auto max-w-7xl scroll-mt-24 rounded-3xl border border-blue-500/10 bg-gradient-to-b from-white to-blue-50/40 p-6 shadow-sm md:p-10">
      <SpotlightBG />

      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-3 md:mb-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3 rounded-full bg-blue-100 text-blue-700">
            Safety & Security
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Live safer with verified homes & trusted hosts
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            {variantText[variant]}
          </p>
        </div>

        <div className="flex gap-2">
          <Shimmer>
            <Button asChild className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
              <Link href="/safety-policy">View Safety Policy</Link>
            </Button>
          </Shimmer>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/contact"><PhoneCall className="mr-2 h-4 w-4" /> 24/7 Helpline</Link>
          </Button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="mb-10 grid grid-cols-2 gap-3 rounded-2xl border bg-white/60 p-4 backdrop-blur md:grid-cols-4">
        {[{ label: "Verified Homes", value: "12k+" }, { label: "Host Checks", value: "8k+" }, { label: "Cities", value: "140+" }, { label: "Avg. Rating", value: "4.7/5" }].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-xl font-bold md:text-2xl text-blue-600">{item.value}</div>
            <div className="text-xs text-muted-foreground md:text-sm">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Card className="group h-full rounded-2xl border-blue-500/10 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-xl border bg-blue-50 p-2 text-blue-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base md:text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Checklist & Map */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-blue-600" /> Our safety checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" /> Neighborhood insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-56 w-full overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1234567!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f1b7c3%3A0x1234567890abcdef!2sBengaluru%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore commute options, lighting, and crowd density. We score areas from 1–100 based on public data & community feedback.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mt-10 rounded-2xl border bg-white/70 p-4 md:p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you verify listings and hosts?</AccordionTrigger>
            <AccordionContent>
              We collect government IDs, property proofs, and contact verification. Risk signals trigger manual moderation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
            <AccordionContent>
              Yes. We use tokenized payments with bank-grade encryption. Deposits are held in escrow where applicable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens in an emergency?</AccordionTrigger>
            <AccordionContent>
              Each property highlights local helplines and on-site contacts. Use the in-app SOS to alert support and your emergency contacts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white md:flex-row">
        <div>
          <h3 className="text-lg font-semibold md:text-xl">Stay informed. Stay secure.</h3>
          <p className="text-sm opacity-90">Read our full safety playbook and see what we check before you move in.</p>
        </div>
        <Shimmer>
          <Button asChild variant="secondary" className="rounded-2xl bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/playbook">View Safety Playbook</Link>
          </Button>
        </Shimmer>
      </div>
    </section>
  );
}
