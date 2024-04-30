import "./CircleProgressBar.css"

export default function CircleProgressBar({percentage,circleWidth, size}) {
    const radius = 85
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - ((dashArray * percentage) / 100)
  return (
    <div>
        <svg 
            width={circleWidth/size} 
            height={circleWidth/size}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
            <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(30)">
                    <stop offset="5%" stopColor="#08F71B"/>
                    <stop offset="45%" stopColor="#448E4A"/>
                </linearGradient>
            </defs>
            <circle 
            cx={circleWidth/2} 
            cy={circleWidth/2} 
            strokeWidth="15px" 
            r={radius}
            className='circle-background'
            />
            
            <circle 
            cx={circleWidth/2} 
            cy={circleWidth/2} 
            strokeWidth="16px" 
            r={radius}
            className='circle-progress'
            style = {{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset
            }}
            transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
            stroke="url(#gradient)"
            />
            <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className='circle-text' fill='white'>
            {percentage ? `${percentage}%`: "NR"}
            </text>
        </svg>
    </div>
  )
}
