import React from "react";
import "../styles/Background.css";

const Background = () => {
  return (
    <div>
      <svg className="cloudBG" width="100vw" height="100vh" viewBox="0 0 100 100">
      
        <g>
          {/* white cloud - top center */}
          <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad4)"
            strokeWidth="0.1"
            d="M5 23
                    a1 1, 0, 0 1, 0 -2
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-7
                    a1 1, 0, 1 0, 0 2
                    h 25
                    a1 1, 0, 0 1, 0 2
                    h-40
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* white cloud - top right center */}
          <linearGradient id="grad6" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad6)"
            strokeWidth="0.1"
            d="M80 5
                    h40
                    a1 1, 0, 0 1, 0 2
                    h-10
                    a1 1, 0, 1 0, 0 2
                    h3
                    a1 1, 0, 0 1, 0 2
                    h-20
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 1 0, 0 -2
                    h-33
                    a1 1, 0, 0 1, 0 -2
                    h5
                    a1 1, 0, 1 0, 0 -2
                    h-2
                    a1 1, 0, 0 1, 0 -2
                    h20
                    a1 1, 0, 0 1, 0 2
                    h-14
                    a1 1, 0, 1 0, 0 2
                    z
                "
          />
        </g>
        <g>
          {/* white cloud - middle right */}
          <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad4)"
            strokeWidth="0.1"
            d="M130 45
                    a1 1, 0, 0 1, 0 -2
                    h40
                    a1 1, 0, 0 1, 0 2
                    h-20
                    a1 1, 0, 1 0, 0 2
                    h10
                    a1 1, 0, 0 1, 0 2
                    h-20
                    a1 1, 0, 0 1, 0 -2
                    h5
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <path
        // white cloud - bottom right center
            stroke="none"
            fill="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.3"
            d="M65 70
                    a1 1, 0, 0 1, 0 -3
                    h20
                    a1 1, 0, 0 1, 0 3
                    z
                "
          />
        
          <path
        // white line cloud
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth="0.3"
            d="M120 64
                    h30                   
                    a1 1, 0, 0 1, 0 2
                    h-6
                    a1 1, 0, 1 0, 0 2
                    h25
                "
          />
          <path
        // white line cloud
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth="0.3"
            d="M20 14
                    h30                    
                    a1 1, 0, 0 1, 0 2
                    h-5
                    a1 1, 0, 1 0, 0 2
                    h25
                "
          />
          
        <g>
          {/* main cloud */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b4966" stopOpacity="1" />
            <stop offset="85%" stopColor="#c5f3ff" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad)"
            strokeWidth="0.1"
            d="M10 0.1
                    h10
                    a1 1, 0, 1 1, 0 15
                    h-30
                    a1 1, 0, 1 0, 0 15
                    h110
                    a1 1, 0, 1 1, 0 27
                    h-20
                    a1 1, 0, 1 0, 0 20
                    h400
                    a1 1, 0, 1 1, 0 60
                    h-1000
                    v-137
                    z
                "
          />
        </g>
        <g>
          {/* main cloud - right */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b4966" stopOpacity="1" />
            <stop offset="80%" stopColor="#6DA6B4" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M120 9
                    a1 1, 0, 1 0, 0 13
                    h600
                    a1 1, 0, 1 0, 0 -13
                    z
                "
          />
        </g>
        
        <g>
          {/* red cloud - top left */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M-30 13
                    a1 1, 0, 0 1, 0 -5
                    h25
                    a1 1, 0, 0 1, 0 3
                    h-10
                    a1 1, 0, 1 0, 0 2
                    h30
                    a1 1, 0, 0 1, 0 4
                    h-50
                    a1 1, 0, 0 1, 0 -2
                    h12
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - center right */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M65 57
                    a1 1, 0, 0 1, 0 -2.5
                    h30
                    a1 1, 0, 1 0, 0 -2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h35
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 1 0, 0 2
                    h7
                    a1 1, 0, 0 1, 0 2.5
                    h-23
                    a1 1, 0, 1 0, 0 2
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-30
                    a1 1, 0, 0 1, 0 -2
                    h8
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - bottom left */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M-45 60
                    a1 1, 0, 0 1, 0 -2.5
                    h20
                    a1 1, 0, 0 1, 0 2.5
                    h-12
                    a1 1, 0, 1 0, 0 2.5
                    h40
                    a1 1, 0, 0 1, 0 2.5
                    h-30
                    a1 1, 0, 1 0, 0 2.5
                    h12
                    a1 1, 0, 0 1, 0 2.5
                    h-27
                    a1 1, 0, 0 1, 0 -2.5
                    h3
                    a1 1, 0, 1 0, 0 -2.5
                    h-15
                    a1 1, 0, 0 1, 0 -2.5
                    h10
                    a1 1, 0, 1 0, 0 -2.5
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - bottom left center */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M-2 88
                    a1 1, 0, 0 1, 0 -3
                    h10
                    a1 1, 0, 1 0, 0 -2
                    h-5
                    a1 1, 0, 0 1, 0 -2
                    h15
                    a1 1, 0, 1 0, 0 -2
                    h-5
                    a1 1, 0, 0 1, 0 -2
                    h25
                    a1 1, 0, 0 1, 0 2
                    h-14
                    a1 1, 0, 1 0, 0 2
                    h5
                    a1 1, 0, 0 1, 0 2
                    h-7
                    a1 1, 0, 1 0, 0 2
                    h25
                    a1 1, 0, 0 1, 0 3
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - top right */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M133 19
                    a1 1, 0, 0 1, 0 -3
                    h20
                    a1 1, 0, 0 1, 0 3
                    h-6
                    a1 1, 0, 1 0, 0 2
                    h2
                    a1 1, 0, 0 1, 0 3
                    h-25
                    a1 1, 0, 0 1, 0 -3
                    h15
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>

        <path
        // red line cloud
            stroke="#9c1f34"
            fill="none"
            strokeWidth="0.3"
            d="M-59 23
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-2
                    a1 1, 0, 1 0, 0 2
                    h20
                "
          />
          <path
        // red line cloud
            stroke="#9c1f34"
            fill="none"
            strokeWidth="0.3"
            d="M78 79
                    h20                    
                    a1 1, 0, 0 1, 0 2
                    h-4
                    a1 1, 0, 1 0, 0 2
                    h35
                "
          />

        <g>
          {/* main cloud - bottom */}
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#020F2E" stopOpacity="1" />
            <stop offset="30%" stopColor="#c9d6f8" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad3)"
            strokeWidth="0.1"
            d="M-40 78
                    h40
                    a1 1, 0, 0 1, 0 10
                    h125
                    a1 1, 0, 1 0, 0 -8
                    h-20
                    a1 1, 0, 1 1, 0 -10
                    h600
                    v620
                    h-950
                    v-612
                    z
                "
          />
        </g>
        
        
      </svg>
    </div>
  );
};

export default Background;
