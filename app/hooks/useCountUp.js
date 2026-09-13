'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp — animates a number from 0 to `target` when the element
 * enters the viewport. Uses ease-out cubic for a natural deceleration.
 *
 * @param {number} target   — the final number to count up to
 * @param {number} duration — animation duration in ms (default 2000)
 */
export function useCountUp(target, duration = 2000) {
  const ref     = useRef(null);
  const [count, setCount]     = useState(0);
  const [started, setStarted] = useState(false);

  // Trigger when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate using requestAnimationFrame
  useEffect(() => {
    if (!started || target === 0) return;

    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target); // ensure we land exactly on target
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, duration]);

  return [ref, count];
}

/**
 * CountUpNumber — parses value strings like "9+", "500+", "100%", "₹1K"
 * and renders an animated counter.
 *
 * Supported formats:
 *   "9+"   → 0 → 9  then "+"
 *   "500+" → 0 → 500 then "+"
 *   "100%" → 0 → 100 then "%"
 *   "₹1K"  → 0 → 1  then "K" (with "₹" prefix)
 */
export function CountUpNumber({ value, style = {}, duration = 2000 }) {
  // Parse the value string into { prefix, number, suffix }
  const parsed = parseValue(value);
  const [ref, count] = useCountUp(parsed.number, duration);

  return (
    <span ref={ref} style={style}>
      {parsed.prefix}{count}{parsed.suffix}
    </span>
  );
}

function parseValue(raw) {
  // ₹1K  →  prefix "₹", number 1, suffix "K"
  const rupeeK = raw.match(/^(₹)(\d+)(K)$/);
  if (rupeeK) return { prefix: rupeeK[1], number: parseInt(rupeeK[2]), suffix: rupeeK[3] };

  // 100% or 9+ or 500+
  const standard = raw.match(/^([₹]?)(\d+)([+%]?)$/);
  if (standard) return { prefix: standard[1], number: parseInt(standard[2]), suffix: standard[3] };

  // Fallback — display as-is
  return { prefix: '', number: 0, suffix: raw };
}
