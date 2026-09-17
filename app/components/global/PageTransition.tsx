"use client";

import { useLayoutEffect, useRef } from "react";
import { TransitionRouter } from "next-transition-router";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const BAR_COUNT = 5;
const projectTitles: Record<string, string> = {
    elevateai: "ElevateAI",
    moviesuggestion: "Movie Suggestion",
    "ai-content-generator": "AI Content Generator",
    "dev-spin": "Dev×Spin",
};
const projectColors: Record<string, string> = {
    elevateai: "#93c5fd",
    moviesuggestion: "#ef4444",
    "ai-content-generator": "#a855f7",
    "dev-spin": "#9ca3af",
};

function getTransitionTitle(pathname?: string) {
    if (pathname?.includes("/about")) {
        return "About";
    }

    if (pathname?.includes("/projects")) {
        const projectSlug = pathname.split("/projects/")[1]?.split(/[?#/]/)[0];

        if (projectSlug && projectTitles[projectSlug]) {
            return projectTitles[projectSlug];
        }

        return "Projects";
    }

    return "Welcome";
}

function getTransitionColor(pathname?: string) {
    const projectSlug = pathname?.split("/projects/")[1]?.split(/[?#/]/)[0];

    return (projectSlug && projectColors[projectSlug]) || "#97f3bd";
}

function PageTransition({ children }: { children: React.ReactNode }) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const barsRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const splitTextRef = useRef<SplitText | null>(null);

    useLayoutEffect(() => {
        if (!titleRef.current || !barsRef.current || !overlayRef.current) {
            return;
        }

        gsap.registerPlugin(SplitText);
        splitTextRef.current = new SplitText(titleRef.current, {
            type: "words",
            wordsClass: "page-transition__word",
        });

        gsap.set(overlayRef.current, { autoAlpha: 0 });
        gsap.set(barsRef.current.children, {
            scaleX: 0,
            transformOrigin: "left center",
        });
        gsap.set(splitTextRef.current.words, {
            yPercent: 110,
            willChange: "transform",
        });

        return () => {
            timelineRef.current?.kill();
            splitTextRef.current?.revert();
            splitTextRef.current = null;
        };
    }, []);

    const leave = (next: () => void, _from?: string, to?: string) => {
        if (!overlayRef.current || !barsRef.current || !splitTextRef.current) {
            next();
            return;
        }

        splitTextRef.current.revert();
        titleRef.current!.textContent = getTransitionTitle(to);
        overlayRef.current.style.setProperty(
            "--page-transition-color",
            getTransitionColor(to),
        );
        splitTextRef.current = new SplitText(titleRef.current!, {
            type: "words",
            wordsClass: "page-transition__word",
        });

        timelineRef.current?.kill();
        timelineRef.current = gsap.timeline({ onComplete: next });
        timelineRef.current
            .set(overlayRef.current, { autoAlpha: 1 })
            .set(barsRef.current.children, {
                scaleX: 0,
                transformOrigin: "left center",
            })
            .set(splitTextRef.current.words, { yPercent: 110 })
            .to(barsRef.current.children, {
                scaleX: 1,
                duration: 0.7,
                ease: "power3.inOut",
                stagger: 0.08,
            })
            .to(
                splitTextRef.current.words,
                {
                    yPercent: 0,
                    duration: 0.7,
                    ease: "power4.out",
                    stagger: 0.06,
                },
                "-=0.45",
            );
    };

    const enter = (next: () => void) => {
        if (!overlayRef.current || !barsRef.current) {
            next();
            return;
        }

        timelineRef.current?.kill();
        timelineRef.current = gsap.timeline({
            onComplete: () => {
                gsap.set(overlayRef.current, { autoAlpha: 0 });
                next();
            },
        });
        timelineRef.current.to(barsRef.current.children, {
            scaleX: 0,
            duration: 0.7,
            ease: "power3.inOut",
            stagger: 0.08,
            transformOrigin: "right center",
        });
    };

    return (
        <TransitionRouter leave={leave} enter={enter}>
            <div ref={overlayRef} className="page-transition" aria-hidden="true">
                <div
                    ref={barsRef}
                    className="page-transition__bars"
                    style={{ gridTemplateRows: `repeat(${BAR_COUNT}, 1fr)` }}
                >
                    {Array.from({ length: BAR_COUNT }, (_, index) => (
                        <div key={index} className="page-transition__bar" />
                    ))}
                </div>
                <h1 ref={titleRef}>Welcome</h1>
            </div>
            {children}
        </TransitionRouter>
    );
}

export default PageTransition;