"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "../../../../public/asset-download/client/hooks/useCarousel";

export default function Landing() {
  const currentImage = useCarousel({ totalImages: 3 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is the courses you can enroll in . The courses when you need
            and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["/hero.jpeg", "/hero2.jpeg", "/hero3.jpeg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
