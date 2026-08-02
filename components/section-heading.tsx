/** Заголовок секции по центру с золотым подчёркиванием */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl xl:text-[2.75rem]">
        {children}
      </h2>
      <span
        aria-hidden
        className="mt-5 block h-[3px] w-16 rounded-full bg-gold-gradient sm:w-20"
      />
    </div>
  )
}
