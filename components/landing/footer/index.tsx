import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type IconProps = {
  className?: string;
};

// X Icon
export const XIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

// Instagram Icon
export const InstagramIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Facebook Icon
export const FacebookIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
  </svg>
);

// LinkedIn Icon
export const LinkedinIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

// Exportable Social Links
export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/YOUR_USERNAME",
    icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/YOUR_USERNAME",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/YOUR_USERNAME",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/YOUR_COMPANY",
    icon: LinkedinIcon,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
                <div className="h-3.5 w-3.5 rounded-[2px] bg-black" />
              </div>

              <span className="text-sm font-medium tracking-tight text-white">
                Intellinx
              </span>
            </Link>

            <p className="max-w-sm text-sm font-light leading-6 text-zinc-500">
              AI customer support that understands your business, speaks your
              language, and knows when to bring in a human.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Intellinx on ${social.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/2 text-zinc-500 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-300">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Integration
                </Link>
              </li>

              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="#faq"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-300">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Careers
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-zinc-300">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/8 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Intellinx. All rights reserved.
          </p>

          <p className="text-xs text-zinc-600">
            Built for better customer conversations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;