export function Shoe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 21c0-1 1-3 3-5m0 0c2-2 4-3 7-3s5 1 7 3m-7-3v-4m0-2c0-2 1-4 3-5 2-1 4-1 6 0m-6 5h6m-6-5c-2-1-4-1-6 0-2 1-3 3-3 5" />
      <path d="M3 21h18" />
    </svg>
  );
}
