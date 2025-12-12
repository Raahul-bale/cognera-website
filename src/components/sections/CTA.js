export default function CTA({ 
  primaryButtonText, 
  primaryButtonLink,
  secondaryLinkText,
  secondaryLinkHref,
  dividerText = 'or'
}) {
  return (
    <section className="cta-block mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center gap-4 sm:gap-6 px-4">
      {primaryButtonLink ? (
        <a 
          href={primaryButtonLink}
          className="cta-primary-button text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg lg:text-xl hover:shadow-lg inline-block text-center w-full sm:w-auto min-w-[200px]"
        >
          {primaryButtonText || 'Start Tracking Productivity for Free'}
        </a>
      ) : (
        <button className="cta-primary-button text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg lg:text-xl hover:shadow-lg w-full sm:w-auto min-w-[200px]">
          {primaryButtonText || 'Start Tracking Productivity for Free'}
        </button>
      )}
      {dividerText && <p className="my-2 sm:my-3 text-white/80 text-sm sm:text-base">{dividerText}</p>}
      {secondaryLinkText && secondaryLinkHref && (
        <a
          href={secondaryLinkHref}
          className="text-white font-medium transition-colors hover:text-[#7440FA] text-sm sm:text-base lg:text-lg text-center underline"
        >
          {secondaryLinkText}
        </a>
      )}
    </section>
  )
}
