// src/app/gists/sunday-service-reunion/page.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SundayServiceReunionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Article Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/gists" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to New Gists
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            One Photo, Endless Joy: Our Sunday Service Reunion Story
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <span>📅 August 14, 2025</span>
            <span>👤 By Seyi Ogunji</span>
            <span>🏷️ Alumni Reunion</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* FEATURED PHOTO SECTION - FIXED WITH PROPER SIZING */}
          <div className="mb-8">
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src="/images/sunday-service-reunion.jpg"
                alt="DLSO Alumni Sunday Service Reunion - Sisters in beautiful traditional attire"
                width={896}
                height={504}
                className="w-full h-auto object-cover max-h-96"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
                unoptimized // This bypasses Next.js image optimization that's causing the 400 error
              />
            </div>
            <p className="text-center text-gray-600 mt-3 text-sm italic">
              The photo that sparked joy across our global DLSO family
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium italic">
                Little did she know this one picture would bring so much happiness to our DLSO family around the world!
              </p>
            </div>
            
            <h2>It All Started with a Simple Picture</h2>
            <p>Sister Katherine Kenny went to church on Sunday and took a photo with some sisters. What seemed like a regular moment turned into something extraordinary when she shared it with our DLSO alumni family.</p>

            <h2>The Ripple Effect of Joy</h2>
            <p>Within hours of the photo being shared, our WhatsApp groups were buzzing with excitement. Alumni from across the globe began recognizing faces, sharing memories, and reconnecting with old friends they hadn&apos;t spoken to in years.</p>

            <h2>Why This Matters</h2>
            <p>This beautiful moment reminds us that the bonds formed during our time at DLSO go far beyond the school walls. Whether we&apos;re in Lagos, London, New York, or anywhere else in the world, we remain connected by the shared experiences and friendships that shaped us.</p>

            <h2>Building Our Community</h2>
            <p>Stories like this inspire us to keep building our alumni network. Through our platform, we&apos;re creating spaces where these spontaneous moments of connection can happen every day.</p>
            
            <p>Want to share your own reunion story? <Link href="/memories/new" className="text-blue-600 underline">Add your memory here</Link> and help us build our collection of wonderful DLSO moments.</p>

            <p>Check out our <Link href="/alumni" className="text-blue-600 underline">Alumni Directory</Link> or <Link href="/memories/new" className="text-blue-600 underline">share your own story</Link>.</p>

            <hr className="my-8" />
            <p><strong>Special Thanks</strong>: Sister Katherine Kenny for sharing the photo that started it all, and to all our wonderful DLSO family members who made this conversation so heartwarming.</p>
            
            <blockquote className="text-center text-lg font-medium text-blue-600 mt-8">
              &ldquo;One photo, many hearts touched. That&apos;s the DLSO way!&rdquo; ❤️
            </blockquote>
          </div>

          {/* Social Sharing */}
          <div className="border-t pt-8 mt-8">
            <h3 className="text-xl font-bold mb-4">Share This Story</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                📱 WhatsApp
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                📘 Facebook
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                🐦 Twitter
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                📧 Email
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">More Alumni Stories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/alumni" className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Browse Alumni Directory</h4>
              <p className="text-gray-600">Connect with other DLSO alumni and share your updates</p>
            </Link>
            <Link href="/memories" className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Share Your Memory</h4>
              <p className="text-gray-600">Add your own story to our growing collection</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}