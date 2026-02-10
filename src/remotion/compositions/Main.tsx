import {
  AbsoluteFill,
  Audio,
  Img,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadDisplayFont } from "@remotion/google-fonts/Outfit";
import {
  TransitionSeries,
  getPresentation,
  createTiming,
  Zoom,
  StompStream,
  PushStream,
  OutlineStream,
  TextAnimation,
  LogoReveal,
  Particles,
  Vignette,
  BrowserMockup,
} from "../library";

// Assets
const VOICEOVER_URL =
  "https://pub-e3bfc0083b0644b296a7080b21024c5f.r2.dev/audio/1770723001434_0nwrbfpgn6x_nPczCjzI_Building_your_busine.mp3";
const MUSIC_URL =
  "https://pub-e3bfc0083b0644b296a7080b21024c5f.r2.dev/music/1770723049406_0gjhm98hjts_music_Modern_uplifting_cor.mp3";
const SCREENSHOT_URL =
  "https://pub-e3bfc0083b0644b296a7080b21024c5f.r2.dev/superlinks/1770723090227_pz67odrzhos_superlinks_screenshot.png";

// Load fonts
const { fontFamily } = loadFont();
const { fontFamily: displayFont } = loadDisplayFont();

// Brand colors
const COLORS = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#22d3ee",
  success: "#10b981",
  dark: "#0f0f14",
  darker: "#080810",
  light: "#f8fafc",
  white: "#ffffff",
  red: "#ef4444",
};

// ============================================
// Scene 1: Hook - Bold Statement
// ============================================
const HookScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darker }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${30 + Math.sin(frame / 50) * 10}% ${40 + Math.cos(frame / 40) * 10}%, rgba(99, 102, 241, 0.3), transparent 50%),
                       radial-gradient(circle at ${70 + Math.cos(frame / 60) * 10}% ${60 + Math.sin(frame / 45) * 10}%, rgba(139, 92, 246, 0.2), transparent 50%)`,
        }}
      />

      <Particles
        count={30}
        type="stars"
        colors={[COLORS.primary, COLORS.accent]}
        speed={0.3}
      />

      <Zoom from={1} to={1.05}>
        <AbsoluteFill className="flex items-center justify-center">
          <StompStream
            text="Create Launch Monetize"
            wordsPerGroup={1}
            fontSize={110}
            fontWeight={800}
            color={COLORS.white}
            transitionDuration={12}
            style={{ fontFamily: displayFont }}
          />
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.4} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 2: Amplify Hook
// ============================================
const AmplifyScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.dark }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${COLORS.darker} 0%, ${COLORS.dark} 50%, rgba(99, 102, 241, 0.1) 100%)`,
        }}
      />

      <Zoom from={1.02} to={1}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-6">
          <TextAnimation
            createTimeline={({ textRef, tl, SplitText }) => {
              const split = new SplitText(textRef.current, { type: "words" });
              tl.from(split.words, {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
                duration: 0.6,
                stagger: 0.08,
                ease: "power2.out",
              });
              return tl;
            }}
          >
            <div
              className="text-6xl font-bold text-center text-balance px-20"
              style={{ fontFamily: displayFont, color: COLORS.white }}
            >
              Without writing a single line of code
            </div>
          </TextAnimation>

          <div
            style={{
              opacity: interpolate(frame, [20, 35], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-2xl mt-4"
              style={{
                fontFamily,
                color: COLORS.accent,
                textShadow: `0 0 30px ${COLORS.accent}40`,
              }}
            >
              Powered by AI
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 3: Problem Statement
// ============================================
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const icons = ["📊", "💳", "📧", "📱", "🔧", "📈"];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0f" }}>
      {icons.map((icon, i) => {
        const baseX = 15 + (i % 3) * 35;
        const baseY = 20 + Math.floor(i / 3) * 40;
        const wobbleX = Math.sin(frame / 15 + i * 2) * 8;
        const wobbleY = Math.cos(frame / 12 + i * 1.5) * 6;
        const rotation = Math.sin(frame / 20 + i) * 15;
        const opacity = interpolate(frame, [0, 15], [0, 0.4], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${baseX + wobbleX}%`,
              top: `${baseY + wobbleY}%`,
              transform: `rotate(${rotation}deg)`,
              opacity,
              filter: "grayscale(0.5)",
            }}
          >
            {icon}
          </div>
        );
      })}

      <Zoom from={1} to={1.03}>
        <AbsoluteFill className="flex flex-col items-center justify-center">
          <TextAnimation
            createTimeline={({ textRef, tl, SplitText }) => {
              const split = new SplitText(textRef.current, { type: "words" });
              tl.from(split.words, {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
              });
              return tl;
            }}
          >
            <div
              className="text-5xl font-bold text-center px-16 text-balance"
              style={{ fontFamily: displayFont, color: COLORS.white }}
            >
              Building your business shouldn't feel like solving a puzzle
            </div>
          </TextAnimation>

          <div
            style={{
              opacity: interpolate(frame, [25, 40], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-2xl mt-8 font-medium"
              style={{ fontFamily, color: COLORS.red }}
            >
              with missing pieces
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.5} color="#1a0000" />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 4: Consequence
// ============================================
const ConsequenceScene: React.FC = () => {
  const frame = useCurrentFrame();

  const painPoints = [
    { text: "Scattered tools", delay: 0 },
    { text: "Complicated tech", delay: 8 },
    { text: "Endless frustration", delay: 16 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0808" }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15), transparent 60%)`,
        }}
      />

      <Zoom from={1.02} to={1}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-8">
          {painPoints.map((point, i) => {
            const opacity = interpolate(
              frame,
              [point.delay, point.delay + 12],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const x = interpolate(
              frame,
              [point.delay, point.delay + 12],
              [-30, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              },
            );

            return (
              <div
                key={i}
                className="text-4xl font-semibold"
                style={{
                  fontFamily: displayFont,
                  color: COLORS.white,
                  opacity,
                  transform: `translateX(${x}px)`,
                }}
              >
                <span style={{ color: COLORS.red, marginRight: 16 }}>✕</span>
                {point.text}
              </div>
            );
          })}
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.5} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 5: Solution Reveal
// ============================================
const SolutionRevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.dark }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, ${interpolate(frame, [0, 20], [0, 0.4], { extrapolateRight: "clamp" })}), transparent 60%)`,
        }}
      />

      <Zoom from={0.95} to={1}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-6">
          <TextAnimation
            createTimeline={({ textRef, tl, SplitText }) => {
              const split = new SplitText(textRef.current, { type: "chars" });
              tl.from(split.chars, {
                opacity: 0,
                y: 60,
                duration: 0.5,
                stagger: 0.03,
                ease: "power3.out",
              });
              return tl;
            }}
          >
            <div
              className="text-3xl font-medium"
              style={{ fontFamily, color: COLORS.accent }}
            >
              What if everything you needed
            </div>
          </TextAnimation>

          <div
            style={{
              opacity: interpolate(frame, [15, 30], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <TextAnimation
              startFrom={15}
              createTimeline={({ textRef, tl, SplitText }) => {
                const split = new SplitText(textRef.current, { type: "chars" });
                tl.from(split.chars, {
                  opacity: 0,
                  y: -50,
                  scale: 0.5,
                  duration: 0.8,
                  stagger: 0.03,
                  ease: "elastic.out(1, 0.3)",
                });
                return tl;
              }}
            >
              <div
                className="text-6xl font-bold"
                style={{ fontFamily: displayFont, color: COLORS.white }}
              >
                was in ONE place?
              </div>
            </TextAnimation>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 6: Product Intro
// ============================================
const ProductIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${COLORS.darker} 0%, ${COLORS.dark} 50%, rgba(99, 102, 241, 0.2) 100%)`,
        }}
      />

      <Particles
        count={20}
        type="stars"
        colors={[COLORS.accent, COLORS.primary]}
        speed={0.2}
      />

      <Zoom from={1} to={1.03}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-4">
          <div
            style={{
              opacity: interpolate(frame, [0, 15], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-2xl font-medium tracking-widest uppercase"
              style={{ fontFamily, color: COLORS.accent }}
            >
              Introducing
            </div>
          </div>

          <LogoReveal
            revealStyle="glow"
            glowColor={COLORS.primary}
            duration={0.8}
            delay={0.3}
          >
            <div
              className="text-8xl font-black"
              style={{
                fontFamily: displayFont,
                background: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Superlinks
            </div>
          </LogoReveal>

          <div
            style={{
              opacity: interpolate(frame, [35, 50], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-xl mt-2"
              style={{ fontFamily, color: COLORS.white, opacity: 0.8 }}
            >
              The all-in-one AI platform for creators
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 7: Feature Demo
// ============================================
const FeatureDemoScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 30], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const rotateX = interpolate(frame, [0, 30], [15, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rotateY = interpolate(frame, [0, 30], [-10, -3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.light }}>
      <Zoom from={1} to={1.02}>
        <AbsoluteFill className="flex items-center justify-center p-16">
          <div
            style={{
              transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
              opacity,
              transformStyle: "preserve-3d",
            }}
          >
            <BrowserMockup
              browser="chrome"
              theme="light"
              url="superlinks.ai"
              tabTitle="Superlinks - Creator Platform"
              width={900}
              height={550}
              shadow
            >
              <Img
                src={SCREENSHOT_URL}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </BrowserMockup>
          </div>
        </AbsoluteFill>
      </Zoom>
    </AbsoluteFill>
  );
};

// ============================================
// Scene 8: Feature Benefits
// ============================================
const FeatureBenefitsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const features = [
    { icon: "📚", text: "Build courses & guides", color: COLORS.primary },
    { icon: "🚀", text: "AI helps you create faster", color: COLORS.secondary },
    { icon: "💰", text: "Sell smarter", color: COLORS.success },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darker }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.2), transparent 50%),
                       radial-gradient(circle at 70% 30%, rgba(34, 211, 238, 0.15), transparent 50%)`,
        }}
      />

      <Zoom from={1.02} to={1}>
        <AbsoluteFill className="flex items-center justify-center">
          <div className="flex flex-col gap-10">
            {features.map((feature, i) => {
              const delay = i * 12;
              const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const x = interpolate(frame, [delay, delay + 15], [50, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.back(1.5)),
              });
              const featureScale = interpolate(
                frame,
                [delay, delay + 15],
                [0.8, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
              );

              return (
                <div
                  key={i}
                  className="flex items-center gap-6"
                  style={{
                    opacity,
                    transform: `translateX(${x}px) scale(${featureScale})`,
                  }}
                >
                  <div
                    className="text-5xl p-4 rounded-2xl"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      boxShadow: `0 0 30px ${feature.color}30`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div
                    className="text-4xl font-semibold"
                    style={{ fontFamily: displayFont, color: COLORS.white }}
                  >
                    {feature.text}
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 9: Outcome
// ============================================
const OutcomeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.dark }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.25), transparent 60%)`,
        }}
      />

      <Particles
        count={25}
        type="stars"
        colors={[COLORS.success, COLORS.accent]}
        speed={0.4}
      />

      <Zoom from={1} to={1.04}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-4">
          <TextAnimation
            createTimeline={({ textRef, tl, SplitText }) => {
              const split = new SplitText(textRef.current, { type: "words" });
              tl.from(split.words, {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.06,
                ease: "power2.out",
              });
              return tl;
            }}
          >
            <div
              className="text-3xl font-medium"
              style={{ fontFamily, color: COLORS.accent }}
            >
              Grow effortlessly
            </div>
          </TextAnimation>

          <div
            style={{
              opacity: interpolate(frame, [15, 30], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <PushStream
              text="Products Sales Analytics Engagement"
              wordsPerGroup={1}
              fontSize={70}
              fontWeight={700}
              color={COLORS.white}
              transitionDuration={10}
              style={{ fontFamily: displayFont }}
            />
          </div>

          <div
            style={{
              opacity: interpolate(frame, [50, 65], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-2xl mt-6 font-medium"
              style={{ fontFamily, color: COLORS.success }}
            >
              All in one intelligent interface ✓
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 10: Tagline 1
// ============================================
const Tagline1Scene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${135 + Math.sin(frame / 30) * 10}deg, 
            ${COLORS.primary} 0%, 
            ${COLORS.secondary} 50%, 
            ${COLORS.accent} 100%)`,
        }}
      />

      <Zoom from={1} to={1.05}>
        <AbsoluteFill className="flex items-center justify-center">
          <OutlineStream
            text="Turn Your Knowledge Into Income"
            wordsPerGroup={2}
            fontSize={80}
            fontWeight={800}
            color={COLORS.white}
            transitionDuration={12}
            style={{
              fontFamily: displayFont,
              textAlign: "center",
              padding: "0 40px",
            }}
          />
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.2} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 11: Tagline 2
// ============================================
const Tagline2Scene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darker }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3), transparent 60%),
                       radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.2), transparent 50%)`,
        }}
      />

      <Particles
        count={40}
        type="stars"
        colors={[COLORS.accent, COLORS.primary, COLORS.white]}
        speed={0.5}
      />

      <Zoom from={0.98} to={1.02}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-6">
          <TextAnimation
            createTimeline={({ textRef, tl, SplitText }) => {
              const split = new SplitText(textRef.current, { type: "chars" });
              tl.from(split.chars, {
                opacity: 0,
                filter: "blur(10px)",
                scale: 1.2,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.out",
              });
              return tl;
            }}
          >
            <div
              className="text-7xl font-black text-center"
              style={{ fontFamily: displayFont, color: COLORS.white }}
            >
              One Platform
            </div>
          </TextAnimation>

          <div
            style={{
              opacity: interpolate(frame, [20, 35], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-5xl font-bold"
              style={{
                fontFamily: displayFont,
                background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Infinite Possibilities
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Scene 12: Logo + CTA
// ============================================
const LogoCTAScene: React.FC = () => {
  const frame = useCurrentFrame();

  const buttonPulse = 1 + Math.sin(frame / 10) * 0.03;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darker }}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.25), transparent 50%),
                       radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15), transparent 40%),
                       radial-gradient(circle at 70% 60%, rgba(34, 211, 238, 0.1), transparent 40%)`,
        }}
      />

      <Particles
        count={30}
        type="stars"
        colors={[COLORS.primary, COLORS.accent]}
        speed={0.2}
      />

      <Zoom from={1} to={1.02}>
        <AbsoluteFill className="flex flex-col items-center justify-center gap-8">
          <LogoReveal
            revealStyle="elastic"
            duration={1}
            glowColor={COLORS.primary}
          >
            <div
              className="text-8xl font-black"
              style={{
                fontFamily: displayFont,
                background: `linear-gradient(135deg, ${COLORS.white} 0%, ${COLORS.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: `drop-shadow(0 0 40px ${COLORS.primary}50)`,
              }}
            >
              Superlinks
            </div>
          </LogoReveal>

          <div
            style={{
              opacity: interpolate(frame, [25, 40], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="text-2xl font-medium tracking-wide"
              style={{ fontFamily, color: COLORS.white, opacity: 0.9 }}
            >
              Build • Launch • Monetize
            </div>
          </div>

          <div
            style={{
              opacity: interpolate(frame, [40, 55], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              className="mt-6 px-12 py-5 rounded-full text-2xl font-bold cursor-pointer"
              style={{
                fontFamily: displayFont,
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                color: COLORS.white,
                transform: `scale(${buttonPulse})`,
                boxShadow: `0 10px 40px ${COLORS.primary}50, 0 0 0 1px rgba(255,255,255,0.1) inset`,
              }}
            >
              Start Free Today →
            </div>
          </div>
        </AbsoluteFill>
      </Zoom>

      <Vignette intensity={0.3} />
    </AbsoluteFill>
  );
};

// ============================================
// Main Composition
// ============================================
export const Main: React.FC = () => {
  const TRANSITION_DURATION = 8;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darker }}>
      <Audio src={MUSIC_URL} volume={0.25} />
      <Audio src={VOICEOVER_URL} volume={1} />

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={90}>
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("whipPan")}
          timing={createTiming("snappy", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <AmplifyScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("glitch")}
          timing={createTiming("snappy", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={105}>
          <ProblemScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("slideLeft")}
          timing={createTiming("snappy", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <ConsequenceScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("zoomIn")}
          timing={createTiming("spring", 10)}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <SolutionRevealScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("flashWhite")}
          timing={createTiming("snappy", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={105}>
          <ProductIntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("slideUp")}
          timing={createTiming("smooth", 10)}
        />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeatureDemoScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("wipeRight")}
          timing={createTiming("linear", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeatureBenefitsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("blurDissolve")}
          timing={createTiming("smooth", 12)}
        />

        <TransitionSeries.Sequence durationInFrames={120}>
          <OutcomeScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("zoomOut")}
          timing={createTiming("spring", 10)}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <Tagline1Scene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("slideRight")}
          timing={createTiming("snappy", TRANSITION_DURATION)}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <Tagline2Scene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={getPresentation("morphCircle")}
          timing={createTiming("smooth", 12)}
        />

        <TransitionSeries.Sequence durationInFrames={150}>
          <LogoCTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
