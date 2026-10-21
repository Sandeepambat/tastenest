export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-center text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px] ${className}`}>
      {children}
      <span className="mx-auto mt-2 block h-1.5 w-20 rounded-full bg-sun" />
    </h2>
  );
}
