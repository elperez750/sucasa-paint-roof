import Image from "next/image"
import Button from "../ui/button"
import Svg from "../ui/svg"
import Facebook from "../../../public/images/facebook.svg"
import Instagram from "../../../public/images/instagram.svg"
import Youtube from "../../../public/images/youtube.svg"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 font-poppins border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Image
              src="/images/sucasapaint.png"
              alt="Sucasa Paint and Roofcare Logo"
              width={140}
              height={90}
              className="object-contain max-w-[140px] mb-4"
            />
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Professional painting and roofing services with quality and care.
            </p>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-red-600/30 after:left-0 after:-bottom-1">
              Information
            </h2>
            <address className="not-italic text-sm md:text-base space-y-3 text-gray-700 mt-6">
              <div className="flex items-start">
                <div className="w-5 h-5 mr-2 text-red-600/70 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>36731 State Route 2, Sultan, WA 98294</p>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-red-600/70 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <a href="tel:425-246-5330" className="hover:text-red-600 transition-colors duration-200">
                  (425) 246-5330
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-red-600/70 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <a
                  href="mailto:perez@sucasapaintroofcare.com"
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  perez@sucasapaintroofcare.com
                </a>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-red-600/30 after:left-0 after:-bottom-1">
              Services
            </h2>
            <nav className="flex flex-col gap-3 text-sm md:text-base text-gray-700 mt-6">
              {[
                { href: "/interior", label: "Interior" },
                { href: "/exterior", label: "Exterior" },
                { href: "/roofing", label: "Roofs and Gutters" },
                { href: "/pressure-washing", label: "Pressure Washing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-red-600 transition-colors duration-200 hover:translate-x-1 transform flex items-center"
                >
                  <span className="text-red-600/70 mr-2">›</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-red-600/30 after:left-0 after:-bottom-1">
              Navigation
            </h2>
            <nav className="flex flex-col gap-3 text-sm md:text-base text-gray-700 mt-6">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Projects" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-red-600 transition-colors duration-200 hover:translate-x-1 transform flex items-center"
                >
                  <span className="text-red-600/70 mr-2">›</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials & CTA */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-red-600/30 after:left-0 after:-bottom-1">
                Connect With Us
              </h2>
              <div className="flex items-center space-x-5 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white text-red-600/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Svg svgComponent={Facebook} width={20} height={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white text-red-600/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Svg svgComponent={Instagram} width={20} height={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white text-red-600/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Svg svgComponent={Youtube} width={20} height={20} />
                </a>
              </div>
            </div>

            <div className="mt-4">
              <Button
                buttonType="primary"
                label="Get Started"
                backgroundColor="red"
                textColor="white"
                link="/contact"
                className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90 text-sm md:text-base">
            © {new Date().getFullYear()} Sucasa Paint and Roofcare. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 text-white/80 text-xs">
            <a href="/privacy" className="hover:text-white transition-colors duration-200 mr-4">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

