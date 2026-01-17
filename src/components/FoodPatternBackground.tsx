const FoodPatternBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="foodPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Hamburguesa */}
            <g transform="translate(20, 20)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="20" cy="8" rx="18" ry="8" />
              <path d="M2 8 Q2 12 5 14 L35 14 Q38 12 38 8" />
              <line x1="5" y1="18" x2="35" y2="18" />
              <path d="M8 22 Q6 24 8 26 Q12 28 16 26 Q18 24 22 26 Q26 28 30 26 Q32 24 30 22" />
              <line x1="5" y1="30" x2="35" y2="30" />
              <ellipse cx="20" cy="35" rx="18" ry="6" />
            </g>

            {/* Pizza slice */}
            <g transform="translate(100, 15)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M25 5 L5 40 Q25 45 45 40 Z" />
              <circle cx="20" cy="20" r="3" />
              <circle cx="30" cy="25" r="3" />
              <circle cx="25" cy="32" r="3" />
              <path d="M10 38 Q25 42 40 38" />
            </g>

            {/* Hot dog */}
            <g transform="translate(15, 100)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="25" cy="20" rx="22" ry="12" />
              <path d="M5 15 Q3 20 5 25" />
              <path d="M45 15 Q47 20 45 25" />
              <path d="M10 18 Q18 22 25 18 Q32 14 40 18" />
              <path d="M8 12 Q25 8 42 12" />
            </g>

            {/* Patatas fritas */}
            <g transform="translate(100, 90)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 45 L15 20 L45 20 L50 45 Z" />
              <line x1="20" y1="20" x2="18" y2="5" />
              <line x1="25" y1="20" x2="26" y2="3" />
              <line x1="30" y1="20" x2="32" y2="6" />
              <line x1="35" y1="20" x2="38" y2="4" />
              <line x1="40" y1="20" x2="42" y2="7" />
              <path d="M15 32 L45 32" />
            </g>

            {/* Bebida / Refresco */}
            <g transform="translate(160, 30)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 15 L5 50 L30 50 L27 15 Z" />
              <ellipse cx="17" cy="15" rx="10" ry="4" />
              <line x1="17" y1="11" x2="17" y2="0" />
              <circle cx="17" cy="0" r="3" />
              <path d="M10 30 Q17 35 25 30" />
            </g>

            {/* Donut */}
            <g transform="translate(55, 65)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="16" />
              <circle cx="18" cy="18" r="6" />
              <path d="M8 10 Q10 8 14 9" />
              <path d="M22 8 Q26 9 28 12" />
              <path d="M30 18 Q28 22 26 24" />
            </g>

            {/* Helado */}
            <g transform="translate(160, 110)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 25 L20 55 L30 25" />
              <circle cx="20" cy="18" r="12" />
              <circle cx="12" cy="12" r="8" />
              <circle cx="28" cy="12" r="8" />
              <circle cx="20" cy="5" r="6" />
            </g>

            {/* Taco */}
            <g transform="translate(55, 150)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 30 Q20 10 35 30" />
              <path d="M5 30 Q20 35 35 30" />
              <path d="M10 25 Q15 20 20 25 Q25 20 30 25" />
              <circle cx="15" cy="22" r="2" />
              <circle cx="25" cy="22" r="2" />
            </g>

            {/* Estrellitas decorativas */}
            <g stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M180 5 L182 10 L187 10 L183 14 L185 19 L180 16 L175 19 L177 14 L173 10 L178 10 Z" />
              <path d="M5 180 L7 185 L12 185 L8 189 L10 194 L5 191 L0 194 L2 189 L-2 185 L3 185 Z" />
              <circle cx="90" cy="175" r="3" />
              <circle cx="140" cy="180" r="2" />
              <circle cx="175" cy="170" r="2.5" />
            </g>

            {/* Kebab / Pincho */}
            <g transform="translate(120, 150)" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="20" y1="5" x2="20" y2="45" />
              <circle cx="20" cy="12" r="6" />
              <rect x="14" y="20" width="12" height="8" rx="2" />
              <circle cx="20" cy="35" r="5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#foodPattern)" className="text-foreground" />
      </svg>
    </div>
  );
};

export default FoodPatternBackground;
