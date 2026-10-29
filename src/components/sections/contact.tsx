"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, MessageCircle } from "lucide-react";
import { useSite } from "@/components/site-provider";
import { SectionHeading, FadeIn } from "@/components/section-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "963968726351";
const EMAIL = "feedback.alnahda.org@gmail.com";

export function ContactSection() {
  const { t, lang } = useSite();
  const [sent, setSent] = React.useState(false);

  // Build the two direct-action links from current form values
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const composedBody = [
    `${t.contact.formName}: ${name || "—"}`,
    `${t.contact.formEmail}: ${email || "—"}`,
    `${t.contact.formSubject}: ${subject || "—"}`,
    "",
    message,
  ].join("\n");

  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject || (lang === "ar" ? "رسالة من موقع مؤسسة النهضة" : "Message from Al-Nahda website")
  )}&body=${encodeURIComponent(composedBody)}`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedBody)}`;

  // Send via Email client
  const handleSendEmail = () => {
    if (!name || !email || !subject || !message) {
      toast.error(lang === "ar" ? "يرجى ملء جميع الحقول" : "Please fill in all fields");
      return;
    }
    window.location.href = mailtoLink;
    setSent(true);
    toast.success(t.contact.formSuccess);
    setTimeout(() => setSent(false), 4000);
  };

  // Send via WhatsApp
  const handleSendWhatsApp = () => {
    if (!name || !message) {
      toast.error(lang === "ar" ? "يرجى ملء الاسم والرسالة" : "Please fill name and message");
      return;
    }
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    setSent(true);
    toast.success(
      lang === "ar" ? "جاري فتح واتساب لإرسال رسالتك" : "Opening WhatsApp to send your message"
    );
    setTimeout(() => setSent(false), 4000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: t.contact.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: "from-primary/15 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+963 968 726 351",
      href: "tel:+963968726351",
      color: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
      ltr: true,
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: "https://maps.google.com/?q=Al-Qusayr+Homs+Syria",
      color: "from-accent/30 to-accent/5",
      iconColor: "text-accent-foreground",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.contact.badge} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <c.icon className={`h-6 w-6 ${c.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        {c.label}
                      </p>
                      <p
                        className="mt-0.5 font-bold text-foreground break-all"
                        dir={c.ltr ? "ltr" : undefined}
                      >
                        {c.value}
                      </p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}

            {/* WhatsApp quick action */}
            <FadeIn delay={0.24}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 hover:shadow-lg hover:border-[#25D366]/60 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#128C7E] uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <p className="font-bold text-foreground" dir="ltr">
                    {lang === "ar" ? "تواصل مباشر عبر واتساب" : "Chat with us directly"}
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.3}>
              <div className="rounded-2xl overflow-hidden border border-border bg-card h-48 relative">
                <div className="absolute inset-0 pattern-dots opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="h-8 w-8 text-secondary mb-2" />
                  <p className="text-sm font-bold text-foreground">{t.contact.locationValue}</p>
                  <a
                    href="https://maps.google.com/?q=Al-Qusayr+Homs+Syria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-semibold text-primary hover:underline"
                  >
                    {lang === "ar" ? "عرض على الخريطة" : "View on map"}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl bg-card border border-border p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">
                  {lang === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendEmail();
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.formName}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === "ar" ? "اسمك الكامل" : "Your full name"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.formEmail}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.formSubject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={lang === "ar" ? "موضوع الرسالة" : "Subject"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.formMessage}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                  />
                </div>

                {/* Direct action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={sent}
                    className="group flex-1"
                    size="lg"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        {lang === "ar" ? "تم الإرسال" : "Sent"}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                        {lang === "ar" ? "إرسال عبر البريد" : "Send via Email"}
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSendWhatsApp}
                    variant="outline"
                    className="group flex-1 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 hover:text-[#128C7E] hover:border-[#25D366]"
                    size="lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {lang === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-1">
                  {lang === "ar"
                    ? "سيتم فتح تطبيق البريد أو واتساب لإكمال الإرسال مباشرةً"
                    : "Your email client or WhatsApp will open to complete sending directly"}
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
