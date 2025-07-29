import React from 'react';
import { ClinicHero } from '../components/HeroSection'
import { ClinicContactForm } from '../components/ContactForm'
import { ClinicNavbar } from '../components/NavigationBar'
import { ClinicTestimonialCarousel } from '../components/TestimonialCarousel'
import { ClinicAppointmentBooking } from '../components/AppointmentBooking'
import { PricingPackages } from '../components/PricingPackages'
import { DoctorCard } from '../components/DoctorCard'
import { ProductCard } from '../components/ProductCard'
import { ProductsGrid } from '../components/ProductsGrid'
import { ProfileCard } from '../components/ProfileCard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClinicHero
        title="HealthCare Clinic"
        subtitle="Professional healthcare services for you and your family"
        ctaText="Book Appointment"
        ctaLink="#contact"
        className=""
      />
      <ClinicContactForm
        className=""
      />
      <ClinicNavbar
        logoText="HealthCare Clinic"
        links={[
        {
                "label": "Home",
                "href": "#home"
        },
        {
                "label": "Services",
                "href": "#services"
        },
        {
                "label": "About",
                "href": "#about"
        },
        {
                "label": "Contact",
                "href": "#contact"
        }
]}
        appointmentText="Book Now"
        appointmentHref="#contact"
        className=""
      />
      <ClinicTestimonialCarousel
        testimonials={[
        {
                "name": "Jane Doe",
                "text": "Great care and professional staff!"
        },
        {
                "name": "John Smith",
                "text": "Very professional and caring environment."
        },
        {
                "name": "Sarah Wilson",
                "text": "Excellent service and modern facilities."
        }
]}
        className=""
      />
      <ClinicAppointmentBooking
        className=""
      />
      <PricingPackages

      />
      <DoctorCard

      />
      <ProductCard

      />
      <ProductsGrid

      />
      <ProfileCard

      />
    </main>
  );
}