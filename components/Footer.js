import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 px-4 text-center'>
      <div className='container mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
              Get Me A Chai ☕
            </h3>
            <p className='text-gray-400 text-sm'>
              Supporting creators, one chai at a time. A secure and simple way to support your favorite content creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-left">
            <h4 className='font-semibold mb-4 text-center'>Quick Links</h4>
            <ul className='flex flex-wrap items-center justify-center gap-4 text-gray-400'>
              <li>
                <Link href="/" className='hover:text-blue-400 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-600 mx-1">•</span>
                <Link href="/about" className='hover:text-blue-400 transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <span className="text-gray-600 mx-1">•</span>
                <Link href="/login" className='hover:text-blue-400 transition-colors'>
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='font-semibold mb-4'>Connect With Us</h4>
            <div className='flex space-x-4 items-center justify-center'>
              <a href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
          <p>© {new Date().getFullYear()} Get Me A Chai. All rights reserved.</p>
          <p className='mt-2'>
            Made with ❤️ using Next.js, NextAuth.js,  MongoDB, Tailwindcss and Razorpay
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer