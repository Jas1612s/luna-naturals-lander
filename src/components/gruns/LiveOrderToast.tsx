"use client";

import { useState, useEffect } from "react";
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

const productImage = "/images/gruns/luna-natural-pouch.webp";
const products = [
  { name: "1-pack", image: productImage },
  { name: "1-pack", image: productImage },
  { name: "2-pack", image: productImage },
  { name: "2-pack", image: productImage },
  { name: "3-pack", image: productImage },
  { name: "4-pack", image: productImage },
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
  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;
    let nextTimeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function showToast() {
      if (cancelled) return;
      setOrder(generateOrder());
      setVisible(true);

      // Randomize how long the toast stays visible (3.5–6s)
      const displayDuration = 3500 + Math.random() * 2500;
      hideTimeout = setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, displayDuration);
    }

    function scheduleNext() {
      if (cancelled) return;
      // Highly varied gaps: pick from short (8-15s), medium (18-35s), or long (40-70s)
      const roll = Math.random();
      let delay: number;
      if (roll < 0.4) {
        delay = 8000 + Math.random() * 7000;   // 8-15s  (40% chance)
      } else if (roll < 0.8) {
        delay = 18000 + Math.random() * 17000;  // 18-35s (40% chance)
      } else {
        delay = 40000 + Math.random() * 30000;  // 40-70s (20% chance)
      }
      nextTimeout = setTimeout(showToast, delay);
    }

    // First toast after 5-15s
    const initialDelay = 5000 + Math.random() * 10000;
    nextTimeout = setTimeout(showToast, initialDelay);

    return () => {
      cancelled = true;
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[95px] left-3 md:bottom-6 md:left-4 md:right-auto max-w-[340px] z-40 transition-all duration-[400ms] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0 pointer-events-none"
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
