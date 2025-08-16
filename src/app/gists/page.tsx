'use client'


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NewGistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            New Gists
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
            Latest stories, reunions, and celebrations from our DLSO Alumni family worldwide
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Featured Article */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            {/* Article Image Section */}
            <div className="md:w-1/3">
              <div className="relative h-64 md:h-full min-h-[400px]">
                {/* YOUR REUNION PHOTO GOES HERE */}
                <Image
                  src="/images/sunday-service-reunion.jpg"
                  alt="DLSO Sisters at Sunday Service - Beautiful traditional attire reunion"
                  fill
                  unoptimized={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                
                {/* FALLBACK: If you don't have the photo yet, uncomment this instead:
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4 block">📸</span>
                    <p className="text-lg font-semibold">Sunday Service</p>
                    <p className="text-sm opacity-90">Add reunion photo</p>
                  </div>
                </div>
                */}
              </div>
            </div>
            
            {/* Article Content */}
            <div className="md:w-2/3 p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Alumni Reunion
                </span>
                <span className="ml-3 text-gray-500 text-sm">August 14, 2025</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                One Photo, Endless Joy: Our Sunday Service Reunion Story
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sister Katherine Kenny went to church on Sunday and took a photo with some sisters. 
                She shared it on WhatsApp with the caption &ldquo;For those who have forgotten my face.&rdquo; 
                Little did she know this one picture would bring so much happiness to our DLSO family around the world!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/gists/sunday-service-reunion" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read Full Story
                </Link>
                <button 
                  onClick={() => {
                    const text = "Check out this heartwarming DLSO reunion story: One Photo, Endless Joy";
                    const url = `${window.location.origin}/gists/sunday-service-reunion`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
                  }}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  📱 Share Story
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Submit Your Story CTA */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Have a Story to Share?</h3>
          <p className="text-lg mb-6 opacity-90">
            Your reunion stories, achievements, and DLSO memories matter to our community!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/memories/new" 
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-lg"
            >
              📝 Share Your Story
            </Link>
            <a 
              href="https://wa.me/2348056461852"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-lg border-2 border-white"
            >
              💬 Contact Admin
            </a>
            <a 
              href="mailto:dlsondoalum@gmail.com" 
              className="bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-800 transition-colors shadow-lg border-2 border-white"
            >
              📧 Email Admin
            </a>
          </div>
          
          {/* Quick Contact Info */}
          <div className="mt-6 pt-6 border-t border-orange-300/30">
            <p className="text-sm opacity-80 mb-3">Follow us on social media:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="https://www.youtube.com/@dlsondoalum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600/20 text-white px-3 py-1 rounded-lg hover:bg-red-600/40 transition-colors"
              >
                📺 YouTube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579762760906"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/20 text-white px-3 py-1 rounded-lg hover:bg-blue-600/40 transition-colors"
              >
                📘 Facebook
              </a>
              <a
                href="https://twitter.com/dlsondoalumni"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400/20 text-white px-3 py-1 rounded-lg hover:bg-blue-400/40 transition-colors"
              >
                🐦 X (Twitter)
              </a>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Explore More</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/alumni" className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <span className="text-4xl mb-3 block">👥</span>
                <h4 className="font-bold text-lg mb-2">Alumni Directory</h4>
                <p className="text-gray-600">Connect with other DLSO alumni worldwide</p>
              </div>
            </Link>
            <Link href="/memories" className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <span className="text-4xl mb-3 block">📖</span>
                <h4 className="font-bold text-lg mb-2">Memory Lane</h4>
                <p className="text-gray-600">Browse through shared memories and stories</p>
              </div>
            </Link>
            <Link href="/events" className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <span className="text-4xl mb-3 block">🎉</span>
                <h4 className="font-bold text-lg mb-2">Upcoming Events</h4>
                <p className="text-gray-600">Stay updated on reunions and gatherings</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}