export function LikedSvg({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
      <defs>
        <filter id="f1" width="200%" height="200%" x="-50%" y="-50%">
          <feDropShadow
            dx={0}
            dy={0}
            floodColor="#000"
            floodOpacity={0.5}
            stdDeviation={0.417}
          />
        </filter>
      </defs>
      <style />
      <title>Like button</title>
      <g id="item_1">
        <g id=":hover">
          <g id="likes">
            <g id="liked">
              <path
                id="Ellipse 5 copy 5"
                fillRule="evenodd"
                d="M20.5 3C30.2 3 38 10.8 38 20.5S30.2 38 20.5 38 3 30.2 3 20.5 10.8 3 20.5 3zm4 12.1c-.7-1.2-1.6-1.7-1.7-3v-1.6c-.2-.6-1.3-1.1-1.9-1.1-.7 0-1.5.6-1.5 1.3h-.1V15H13v.1c-.7 0-1 .7-1 1.4s.3 1.3 1 1.3h2.1v.9l-2.1-.1v.1c-.7 0-1 .7-1 1.4s.3 1.3 1 1.3h2.1v.7H13c-.7 0-1 .7-1 1.4s.3 1.4 1 1.4h2.1v.6h-2l-.1.2c-.7 0-1 .6-1 1.3 0 .7.3 1.3 1 1.4h12.7s.8-2.2 1.7-2.2h1.7v-8.4s-3.2-.4-4.6-2.7zm-1.7-4.6q.1.1.1.2c0-.1-.1-.3-.1-.2z"
                style={{
                  filter: "url(#f1)",
                  strokeWidth: 0.5,
                }}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
