"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const names = [
  "Sarah M.", "Emily R.", "Jess K.", "Ashley T.", "Amanda P.", "Mike D.", "David L.", "Chris B.",
  "Jen W.", "Lisa R.", "Rebecca D.", "Michelle H.", "Nicole S.", "Steph C.", "Rachel G.",
  "Dan F.", "Matt J.", "Andrew N.", "James W.", "Rob T.", "Lauren K.", "Megan A.", "Britt V.",
  "Sam Q.", "Christina E.", "Kevin M.", "Brian D.", "Jason R.", "Tyler B.", "Brandon S.",
];

const cities = [
  "Austin, TX", "Portland, OR", "Nashville, TN", "Denver, CO", "San Diego, CA",
  "Charlotte, NC", "Seattle, WA", "Phoenix, AZ", "Tampa, FL", "Raleigh, NC",
  "Minneapolis, MN", "Atlanta, GA", "Chicago, IL", "Miami, FL", "Dallas, TX",
  "Boston, MA", "Brooklyn, NY", "Sacramento, CA", "Orlando, FL", "Columbus, OH",
];

const products = [
  { name: "1-pack", image: "/images/gruns/product-kids-patches-v2.jpg" },
  { name: "1-pack", image: "/images/gruns/adults-pack-moss.jpg" },
  { name: "2-pack", image: "/images/gruns/product-kids-patches-v2.jpg" },
  { name: "2-pack", image: "/images/gruns/adults-pack-moss.jpg" },
  { name: "3-pack", image: "/images/gruns/kids-3pack-forest.jpg" },
  { name: "4-pack", image: "/images/gruns/product-kids-patches-v2.jpg" },
];

const timeAgo = [
  "just now", "2 min ago", "5 min ago", "11 min ago", "18 min ago",
  "24 min ago", "33 min ago", "41 min ago", "57 min ago",
];

function generateOrder() {
  return {
    name: names[Math.floor(Math.random() * names.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    product: products[Math.floor(Math.random() * products.length)],
    time: timeAgo[Math.floor(Math.random() * timeAgo.length)],
  };
}

export function LiveOrderToast() {
  const [visible, setVisible] = useState(false);
  const [order, setOrder] = useState(generateOrder);
  const showNext = useCallback(() => {
    setOrder(generateOrder());
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    // First toast after 8 seconds
    const initialTimeout = setTimeout(showNext, 5000);
    // Every 10 seconds
    const interval = setInterval(showNext, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showNext]);

  return (
    <div
      className={`fixed bottom-[95px] left-3 right-3 md:bottom-auto md:top-4 md:left-auto md:right-4 md:max-w-[340px] z-40 transition-all duration-[400ms] ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-3 opacity-0 pointer-events-none"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-black/[0.04] px-3.5 py-3 flex items-center gap-3">
        {/* Product image */}
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-[var(--gr-cream)] shrink-0">
          <Image
            src={order.product.image}
            alt=""
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] text-[var(--gr-dark)] leading-snug">
            <span className="font-semibold">{order.name}</span> from {order.city}
          </p>
          <p className="text-[12px] text-[var(--gr-sage)] mt-0.5 leading-snug">
            bought {order.product.name} · {order.time}
          </p>
        </div>
      </div>
    </div>
  );
}
