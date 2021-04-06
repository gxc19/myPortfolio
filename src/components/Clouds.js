import React from "react";
import "../styles/Clouds.css";

const Clouds = () => {
  return (
    <div>
      <svg width="100vw" height="100vh" viewBox="0 0 100 100">
      
        <g>
          {/* white cloud - top right */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M141 5
                    a1 1, 0, 0 1, 0 -2
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-5
                    a1 1, 0, 1 0, 0 2
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-31
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        {/* <g>
          white cloud - center right
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="green"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M115 52
                    a1 1, 0, 0 1, 0 -2
                    h15
                    a1 1, 0, 0 1, 0 2
                    h-7
                    a1 1, 0, 1 0, 0 2
                    h20
                    a1 1, 0, 0 1, 0 2
                    h-15
                    a1 1, 0, 1 0, 0 2
                    h7
                    a1 1, 0, 0 1, 0 2
                    h-15
                    a1 1, 0, 0 1, 0 -2
                    h2
                    a1 1, 0, 1 0, 0 -2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g> */}
        <g>
          {/* white cloud - top left */}
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M-10 16
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 0 1, 0 2
                    h-4
                    a1 1, 0, 1 0, 0 2
                    h20
                    a1 1, 0, 0 1, 0 2
                    h-10
                    a1 1, 0, 1 0, 0 2
                    h3
                    a1 1, 0, 0 1, 0 2
                    h-17
                    a1 1, 0, 0 1, 0 -2
                    h9
                    a1 1, 0, 1 0, 0 -2
                    h-17
                    a1 1, 0, 0 1, 0 -2
                    h7
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        {/* <g>
          white cloud - center left
          <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad5)"
            strokeWidth="0.1"
            d="M-65 42
                    a1 1, 0, 0 1, 0 -2
                    h30
                    a1 1, 0, 1 0, 0 -2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h35
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 1 0, 0 2
                    h7
                    a1 1, 0, 0 1, 0 2
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
        </g> */}
        <path
        // white line cloud
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth="0.3"
            d="M75 20
                    h20                    
                    a1 1, 0, 0 1, 0 2
                    h-3
                    a1 1, 0, 1 0, 0 2
                    h35
                "
          />
          <path
        // white line cloud
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth="0.3"
            d="M-70 36
                    h25                    
                    a1 1, 0, 1 0, 0 -2
                    h-5
                    a1 1, 0, 0 1, 0 -2
                    h35
                "
          />
          <path
        // white line cloud
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth="0.3"
            d="M-37 74
                    h20                    
                    a1 1, 0, 0 1, 0 2
                    h-3
                    a1 1, 0, 1 0, 0 2
                    h35
                "
          />
        
        <g>
          {/* main cloud - top right */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10687c" stopOpacity="1" />
            <stop offset="100%" stopColor="#6baebe" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad)"
            strokeWidth="0.1"
            d="M95 8
                    a1 1, 0, 0 1, 0 -4
                    h25
                    a1 1, 0, 0 1, 0 4
                    h-12
                    a1 1, 0, 1 0, 0 4
                    h32
                    a1 1, 0, 0 1, 0 4
                    h-52
                    a1 1, 0, 0 1, 0 -4
                    h10
                    a1 1, 0, 1 0, 0 -4
                    z
                "
          />
        </g>
        <g>
          {/* main cloud - right */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10687c" stopOpacity="1" />
            <stop offset="100%" stopColor="#86c9da" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad)"
            strokeWidth="0.1"
            d="M116 32
                    a1 1, 0, 0 1, 0 -4
                    h22
                    a1 1, 0, 0 1, 0 4
                    h-10
                    a1 1, 0, 1 0, 0 3
                    h25
                    a1 1, 0, 0 1, 0 4
                    h-10
                    a1 1, 0, 1 0, 0 3
                    h5
                    a1 1, 0, 0 1, 0 4
                    h-30
                    a1 1, 0, 0 1, 0 -4
                    h16
                    a1 1, 0, 1 0, 0 -3
                    h-30
                    a1 1, 0, 0 1, 0 -4
                    h15
                    a1 1, 0, 1 0, 0 -3
                    z
              "
          />
        </g>
        <g>
          {/* main cloud - left */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10687c" stopOpacity="1" />
            <stop offset="100%" stopColor="#86c9da" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad)"
            strokeWidth="0.1"
            d="M-35 11
                    a1 1, 0, 0 1, 0 -4
                    h25
                    a1 1, 0, 0 1, 0 4
                    h-15
                    a1 1, 0, 1 0, 0 3
                    h5
                    a1 1, 0, 0 1, 0 4
                    h-10
                    a1 1, 0, 1 0, 0 3
                    h30
                    a1 1, 0, 0 1, 0 4
                    h-60
                    a1 1, 0, 0 1, 0 -4
                    h15
                    a1 1, 0, 1 0, 0 -3
                    h-5
                    a1 1, 0, 0 1, 0 -4
                    h17
                    a1 1, 0, 1 0, 0 -3
                    z
              "
          />
        </g>
        
        
        <g>
          {/* main cloud - bottom */}
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#105d8a" stopOpacity="1" />
            <stop offset="10%" stopColor="#b1f2ff" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad3)"
            strokeWidth="0.1"
            d="M-40 45
                    h25
                    a1 1, 0, 0 1, 0 25
                    h-5
                    a1 1, 0, 1 0, 0 10
                    h150
                    a1 1, 0, 1 0, 0 -10
                    h-10
                    a1 1, 0, 0 1, 0 -15
                    h825
                    v635
                    h-1890
                    v-645
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - top left */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M-9 4
                    a1 1, 0, 0 1, 0 -2
                    h12
                    a1 1, 0, 0 1, 0 2
                    h-6
                    a1 1, 0, 1 0, 0 2
                    h1
                    a1 1, 0, 0 1, 0 2
                    h-17
                    a1 1, 0, 0 1, 0 -2
                    h11
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - top left */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M-45 24
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 0 1, 0 2
                    h-4
                    a1 1, 0, 1 0, 0 2
                    h20
                    a1 1, 0, 0 1, 0 2
                    h-28
                    a1 1, 0, 0 1, 0 -2
                    h3
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - top right */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M107 15
                    a1 1, 0, 0 1, 0 -2
                    h30
                    a1 1, 0, 0 1, 0 2
                    h-5
                    a1 1, 0, 1 0, 0 2
                    h2
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h6
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - top right */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="0.3" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M106 33
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 0 1, 0 2
                    h-2
                    a1 1, 0, 1 0, 0 2
                    h8
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h1
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - center right */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c1f34" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8768c" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M128 45
            a1 1, 0, 0 1, 0 -2
                    h25
                    a1 1, 0, 0 1, 0 2
                    h-5
                    a1 1, 0, 1 0, 0 2
                    h2
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h6
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - bottom left */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M-44 60
                    a1 1, 0, 0 1, 0 -2
                    h20
                    a1 1, 0, 0 1, 0 2
                    h-12
                    a1 1, 0, 1 0, 0 2
                    h35
                    a1 1, 0, 0 1, 0 2
                    h-25
                    a1 1, 0, 1 0, 0 2
                    h12
                    a1 1, 0, 0 1, 0 2
                    h-27
                    a1 1, 0, 0 1, 0 -2
                    h3
                    a1 1, 0, 1 0, 0 -2
                    h-15
                    a1 1, 0, 0 1, 0 -2
                    h10
                    a1 1, 0, 1 0, 0 -2
                    z
                "
          />
        </g>
        <g>
          {/* red cloud - bottom left */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a15b71" stopOpacity="1" />
            <stop offset="100%" stopColor="#f8a0a6" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad2)"
            strokeWidth="0.1"
            d="M-10 89
                    a1 1, 0, 0 1, 0 -3
                    h30
                    a1 1, 0, 1 0, 0 -2
                    h-13
                    a1 1, 0, 0 1, 0 -2
                    h35
                    a1 1, 0, 0 1, 0 2
                    h-13
                    a1 1, 0, 1 0, 0 2
                    h7
                    a1 1, 0, 0 1, 0 3
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
          {/* main cloud - bottom top layer*/}
          <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#020F2E" stopOpacity="1" />
            <stop offset="100%" stopColor="#395492" stopOpacity="1" />
          </linearGradient>
          <path
            stroke="none"
            fill="url(#grad4)"
            strokeWidth="0.1"
            d="M125 75
                    h-20
                    a1 1, 0, 1 0, 0 10
                    h-65
                    a1 1, 0, 1 0, 0 40
                    h910
                    v-50
                    z
                "
          />
        </g>                 
      </svg>
    </div>
  );
};

export default Clouds;
