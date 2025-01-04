"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { Span } from "next/dist/trace";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton__hero">
        <Skeleton className="landing-skeleton__title" />
        <Skeleton className="landing-skeleton__subtitle" />
        <Skeleton className="landing-skeleton__subtitle-secondary" />
        <Skeleton className="landing-skeleton__button" />
        <Skeleton className="landing-skeleton__hero-image" />
      </div>

      <div className="landing-skeleton__featured">
        <Skeleton className="landing-skeleton__featured-title" />
        <Skeleton className="landing-skeleton__featured-description" />

        <div className="landing-skeleton__tags">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__tag" />
          ))}
        </div>

        <div className="landing-skeleton__courses">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__course-card" />
          ))}
        </div>
      </div>
    </div>
  );
};
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
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,33vw"
              className={`landing__hero-image ${
                index === currentImage ? "landing__hero-image--active" : ""
              }`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          From beginner to andvance we haec all the courseas Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nihil, tempora repellat! Veniam
          nam iste deserunt delectus, ratione quibusdam provident ullam soluta
          unde quo fuga quisquam repellendus? Omnis minima ipsum ea!
        </p>
        <div className="landing__tags">
          {[
            "web development",
            "enterprise",
            "react nextjs",
            "web development",
            "enterprise IT",
          ].map((tag, index) => (
            <span key={index} className="landing__tag capitalize">
              {tag}
            </span>
          ))}
        </div>

        <div className="landing__courses">{/* courses dispaly */}</div>
      </motion.div>
    </motion.div>
  );
}
