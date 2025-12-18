import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { useIsMobile } from '../../hooks/useMobile';

export interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 0
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const isMobile = useIsMobile();

  const scale = isMobile ? 0.7 : 1;

  const finalSizes = useMemo(
    () => sizes.map(s => s * scale),
    [sizes, scale]
  );

  const finalInnerSizes = useMemo(
    () => innerSizes.map(s => s * scale),
    [innerSizes, scale]
  );

  const finalTrailCount = useMemo(
    () => (isMobile ? Math.min(trailCount, 2) : trailCount),
    [trailCount, isMobile]
  );

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const handleWindowMove = (e: MouseEvent | TouchEvent) => {
      const { left, top } = updateOffset();
      const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const y = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    };

    window.addEventListener("mousemove", handleWindowMove);
    window.addEventListener("touchmove", handleWindowMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      window.removeEventListener("touchmove", handleWindowMove);
    };
  }, [updateOffset, fastDuration, slowDuration, fastEase, slowEase]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="pointer-events-none select-none relative top-0 left-0 w-full h-full opacity-60 -z-10"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="pointer-events-none select-none absolute w-0 h-0 transition-color-300 -z-10">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden transition-color-300 -z-10"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: finalTrailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => {
              blobsRef.current[i] = el;
            }}
            className="pointer-events-none select-none absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2 transition-color-300 -z-10"
            style={{
              width: finalSizes[i],
              height: finalSizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`
            }}
          >
            <div
              className="pointer-events-none select-none absolute transition-color-300 -z-10"
              style={{
                width: finalInnerSizes[i],
                height: finalInnerSizes[i],
                top: (finalSizes[i] - finalInnerSizes[i]) / 2,
                left: (finalSizes[i] - finalInnerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
