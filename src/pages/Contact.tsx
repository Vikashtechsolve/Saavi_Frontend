import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { content } from "@/lib/content";
import { Building2, Mail, Phone } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { Helmet } from 'react-helmet-async';

const PUBLIC_KEY = "zNdQllj7Had9NmZc4";
const SERVICE_ID = "service_lhep98x"; // Replace with your EmailJS service ID
const TEMPLATE_ID = "template_18gt3et"; // Replace with your EmailJS template ID

interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

export default function Contact() {
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;

    if (!name || !email || !phone || !message) {
      toast.error("All fields are required!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }

    const phonePattern = /^[+]?[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        toast.success("Message Sent Successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Saavi Hotel | Get in Touch With Us Today</title>
        <meta name="description" content="Reach out to Saavi Hotel for bookings, inquiries, or support. Call us, email us, or visit our location in the city center." />
        <meta name="keywords" content="Contact Saavi Hotel, hotel contact, hotel phone number, hotel address, customer support, hotel booking help" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Saavi Hotel" />
        <link rel="canonical" href="https://www.saavihotel.com/contact" />
        <meta property="og:title" content="Contact Saavi Hotel | Bookings & Inquiries" />
        <meta property="og:description" content="Need assistance? Contact Saavi Hotel via phone, email, or visit us. We're here to help 24/7." />
        <meta property="og:url" content="https://www.saavihotel.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.saavihotel.com/images/contact-og.jpg" />
      </Helmet>
      <div className="pt-24 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">545, Sector 43, Golf course Road, Gurugram, Haryana 122003</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">9999575044, 7290006773</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">{content.company.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Enter your message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={false} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />

      </div>
    </>
  );
}
