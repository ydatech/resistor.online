import React from 'react'

const SvgComponent = ({ openModal, ...props }) => (
  <svg
    style={{
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0
    }}
    version="1.1"
    viewBox="0 0 500 500"
    preserveAspectRatio="xMinYMin meet"
    {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h506v189H-1z" />
    <g>
      <title>{'Resistor Calculator 4 Color Bands'}</title>
      <path fill="#666" d="M12.325 81.756h480v26.487h-480z" />
      <path
        fill="#d9bb7a"
        d="M120.375 12.112c-12.457 0-21.647 2.337-28.689 6.156-.03.016-.06.038-.09.055-10.466 5.24-15.866 13.238-19.664 21.82-8.415 16.177-12.824 34.444-32.367 40.272-.762.227-1.52.435-2.284.656v26.939c.764.22 1.521.446 2.284.674 37.549 11.197 7.503 68.303 80.81 68.303.426 0 .886-.02 1.34-.036.829.017 1.664.036 2.52.036 17.522 0 59.795-14.936 76.08-14.936h107.432c16.286 0 58.558 14.936 76.08 14.936.857 0 1.692-.02 2.52-.036.455.017.914.036 1.34.036 73.308 0 43.262-57.106 80.81-68.303.763-.228 1.52-.453 2.284-.674V81.07c-.763-.22-1.521-.428-2.283-.655-19.544-5.828-23.952-24.095-32.368-40.272-3.798-8.582-9.197-16.58-19.663-21.82-.03-.017-.06-.038-.09-.055-7.043-3.82-16.233-6.156-28.69-6.156-.419 0-.86.02-1.304.036-.84-.017-1.687-.036-2.555-.036-17.523 0-59.795 14.935-76.08 14.935H200.314c-16.285 0-58.558-14.935-76.08-14.935-.869 0-1.716.02-2.555.036-.445-.017-.886-.036-1.305-.036z"
      />
      <path
        onClick={openModal(1)}
        fill="#fdca01"
        d="M126.586 12.124c-1.718 0-3.352.064-4.918.2v165.064c1.572.096 3.208.146 4.918.146.34 0 .705-.02 1.068-.036.658.017 1.323.036 2.005.036 5.6 0 14.388-2.425 23.727-5.317V17.44c-9.34-2.892-18.127-5.317-23.727-5.317-.692 0-1.366.02-2.034.036-.354-.017-.705-.036-1.039-.036z"
      />
      <path
        onClick={openModal(2)}
        fill="#9e0097"
        d="M180.494 23.766V165.23c6.533-1.902 12.31-3.276 16.199-3.276h15.282V27.043h-15.282c-3.89 0-9.666-1.375-16.199-3.277z"
      />
      <path
        onClick={openModal(3)}
        fill="#f44800" d="M240.074 27.06v134.625h31.323V27.06h-31.323z" />
      <path
        onClick={openModal(4)}
        fill="#c68401"
        d="M385.155 11.18c-2.961 0-6.82.711-11.182 1.804v162.945c4.362 1.092 8.22 1.803 11.182 1.803.674 0 1.331-.02 1.983-.037.358.018.72.037 1.055.037 6.758 0 12.389-.793 17.13-2.208V14.382c-4.65-2.025-10.253-3.201-17.13-3.201-.33 0-.677.02-1.027.037-.66-.017-1.327-.037-2.01-.037z"
      />
    </g>
  </svg>
)

export default SvgComponent
