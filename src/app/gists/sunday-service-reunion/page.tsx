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
          
          {/* FEATURED PHOTO SECTION */}
          <div className="mb-8">
            <div className="relative h-[900px] rounded-xl overflow-hidden">
              {/* YOUR REUNION PHOTO GOES HERE */}
              <Image
                src="/images/sunday-service-reunion.jpg"
                alt="DLSO Alumni Sunday Service Reunion - Sisters in beautiful traditional attire"
                fill
                unoptimized={true}
                className="object-cover"
                priority
              />

              {/* FALLBACK: If you don't have the photo yet, uncomment this instead:
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-8xl mb-4 block">📸</span>
                  <p className="text-2xl font-semibold mb-2">Sunday Service Reunion Photo</p>
                  <p className="text-lg opacity-90">Add your reunion photo here</p>
                </div>
              </div>
              */}
            </div>
            <p className="text-center text-gray-600 mt-3 text-sm italic">
              The photo that sparked joy across our global DLSO family
            </p>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:mt-10 prose-headings:mb-6 prose-p:mb-6 prose-li:mb-2">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
              <p className="text-blue-800 font-medium italic mb-0">
                Little did she know this one picture would bring so much happiness to our DLSO family around the world!
              </p>
            </div>
            
            <h2 className="text-2xl font-bold">It All Started with a Simple Picture</h2>
            <p className="mb-6">Sister Katherine Kenny went to church on Sunday and took a photo with some sisters. She shared it on WhatsApp with the caption &ldquo;For those who have forgotten my face.&rdquo;</p>
            <p className="mb-10">Little did she know this one picture would bring so much happiness to our DLSO family around the world!</p>

            <h2 className="text-2xl font-bold">&ldquo;I Know That Face!&rdquo;</h2>
            <p className="mb-6">The moment people saw the photo, the messages started flying:</p>
            <p className="mb-6"><strong>Dr. Mojisola Hosu</strong> was the first to respond: <em>&ldquo;It is good to be home. I recognize the first sister by the left but can not remember her name. It has been ages. 😊 I also see Sister Fehintoluwa, 2nd from the right.&rdquo;</em></p>
            
            <p className="mb-4">Then everyone joined in with excitement:</p>
            <ul className="mb-10 space-y-3 pl-6">
              <li><em>&ldquo;Jeeeeeesuus! Where was I when this took place ooo 😃😃&rdquo;</em></li>
              <li><em>&ldquo;You were busy singing 😂&rdquo;</em></li>
              <li><em>&ldquo;Wow! Aunty Kehinde, Mummy Joke😂, I know two other people there but can&apos;t remember their names.&rdquo;</em></li>
            </ul>

            <h2 className="text-2xl font-bold">The Joy of Recognition</h2>
            <p className="mb-6">What made everyone happy was seeing familiar faces after so many years. Some people were in Lagos, others in Akure, some even abroad - but when they saw this photo, it felt like home.</p>
            <p className="mb-10"><strong>Sister Taye</strong> from L.A church in Ondo was so excited: <em>&ldquo;Haa egi kehinde mi, my DLSO leader... sis Taye nike abolaji is greeting ooo, a big welcome ma, i can still recognize you well ma.&rdquo;</em></p>

            <h2 className="text-2xl font-bold">Beautiful Traditional Dresses</h2>
            <p className="mb-6">The sisters looked absolutely stunning in their traditional outfits - colorful gele (head wraps), beautiful fabrics, and bright smiles. One person joked: <em>&ldquo;All those beautiful dresses don&apos;t let our DLSO sisters take all o! 😂&rdquo;</em></p>
            <p className="mb-10">Everyone was impressed by how elegant they looked.</p>

            <h2 className="text-2xl font-bold">&ldquo;Come and Visit!&rdquo;</h2>
            <p className="mb-6">The love didn&apos;t stop at just seeing faces. People immediately started making plans:</p>
            <ul className="mb-10 space-y-3 pl-6">
              <li><em>&ldquo;Please Akure isn&apos;t far, see your aburo before leaving both physically and financially&rdquo;</em></li>
              <li><em>&ldquo;I will private chat you about my coming to Akure if you will be around to check on you ma&rdquo;</em></li>
              <li><em>&ldquo;Aburo mi ti o bad! 😊&rdquo;</em> (My good sister!)</li>
            </ul>

            <h2 className="text-2xl font-bold">Laughing About Getting Older</h2>
            <p className="mb-6">There were funny moments too. When someone said they couldn&apos;t recognize people easily anymore, they joked: <em>&ldquo;It&apos;s either I&apos;m olding or olding is doing me, me I kuku could barely recognize anyone here 😂&rdquo;</em></p>
            <p className="mb-10">Everyone found this hilarious because we all feel the same way sometimes!</p>

            <h2 className="text-2xl font-bold">Why This Matters</h2>
            <p className="mb-6">This simple WhatsApp conversation shows something beautiful about our DLSO family:</p>
            
            <div className="mb-10 space-y-4">
              <p className="mb-4"><strong>We Never Forget Each Other</strong> - Even after years apart, we still recognize and love each other.</p>
              <p className="mb-4"><strong>We&apos;re Always Ready to Help</strong> - The moment someone needed something, others offered help.</p>
              <p className="mb-4"><strong>We Celebrate Together</strong> - Everyone was genuinely happy to see familiar faces looking good and doing well.</p>
              <p className="mb-6"><strong>Distance Doesn&apos;t Matter</strong> - Whether you&apos;re in Lagos, Akure, or anywhere else in the world, you&apos;re still family.</p>
            </div>

            <h2 className="text-2xl font-bold">The DLSO Spirit Lives On</h2>
            <p className="mb-6">As Sister Jumoke perfectly said: <em>&ldquo;Though we All being separated, at distances all over the globe, yet fellowshiping in the spirit on this platform, we will fulfill our purposes wherever we are IJN.&rdquo;</em></p>
            <p className="mb-10">This is what DLSO taught us - to love, support, and stay connected no matter where life takes us.</p>

            <h2 className="text-2xl font-bold">What&apos;s Next?</h2>
            <p className="mb-6">This story shows we need more of these moments! If you have photos from recent church services, family gatherings, or just hanging out with DLSO family, share them with us.</p>
            <p className="mb-10">Want to reconnect with old friends? Check out our <Link href="/alumni" className="text-blue-600 underline hover:text-blue-800 transition-colors">Alumni Directory</Link> or <Link href="/memories/new" className="text-blue-600 underline hover:text-blue-800 transition-colors">share your own story</Link>.</p>

            <hr className="my-12 border-gray-200" />
            <p className="mb-8"><strong>Special Thanks</strong>: Sister Katherine Kenny for sharing the photo that started it all, and to all our wonderful DLSO family members who made this conversation so heartwarming.</p>
            
            <blockquote className="text-center text-xl font-medium text-blue-600 mt-12 mb-8 py-8 px-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
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