import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Youtube, Linkedin, ChevronDown } from 'lucide-react'
import './App.css'

// Import only available hero images
import hero1 from './assets/16903308_423425738005701_5404214275287918541_o(1).jpg'
import hero2 from './assets/16905076_423422581339350_4787090444456436716_o(1).jpg'
import hero3 from './assets/20171214_135546.jpg'

// Import available gallery images
import img1 from './assets/10408521_786274938079399_8431841836899585770_n.jpg'
import img2 from './assets/10443450_786274714746088_290152497581393663_n.jpg'
import img3 from './assets/10653381_844365338937025_5868747043718652767_n.jpg'
import img4 from './assets/11222913_174523472895930_6750542838353781333_n.jpg'
import img5 from './assets/1393420_652892058084355_1372495335_n.jpg'
import img6 from './assets/1558383_754679671238926_19404376960586844_n.jpg'
import img7 from './assets/16903308_423425738005701_5404214275287918541_o(1)(1).jpg'
import img8 from './assets/16903308_423425738005701_5404214275287918541_o(1).jpg'
import img9 from './assets/16905076_423422581339350_4787090444456436716_o(1).jpg'
import img10 from './assets/2015426141331.jpg'
import img11 from './assets/20170607_121118.jpg'
import img12 from './assets/20171005_124451.jpg'
import img13 from './assets/20171005_124537.jpg'
import img14 from './assets/20171016_101509.jpg'
import img15 from './assets/20171016_124130.jpg'
import img16 from './assets/20171017_115818.jpg'
import img17 from './assets/20171017_120359.jpg'
import img18 from './assets/20171108-122.jpg'
import img19 from './assets/20171108-163.jpg'
import img20 from './assets/20171108-197.jpg'
import img21 from './assets/20171108-198.jpg'
import img22 from './assets/20171108-199.jpg'
import img23 from './assets/20171108-203.jpg'
import img24 from './assets/20171214_135546.jpg'
import img25 from './assets/20180901_122151.jpg'
import img26 from './assets/20180902_190555.jpg'
import img27 from './assets/20230125_115516.jpg'
import img28 from './assets/91Is2ZjA7BuMpvKEEanQHBc20xotbVsugLz-g_Pv4hU.jpg'
import img29 from './assets/BUYsL-1KsiD-VVemladaLLsfDRLCCkUskWEFydsnn1U.jpg'
import img30 from './assets/FB_IMG_1468432447465.jpg'
import img31 from './assets/IMG-20160422-WA0001.jpg'
import img32 from './assets/IMG_20130603_142853.jpg'
import img33 from './assets/IMG_20130603_142857.jpg'
import img34 from './assets/IMG_20130607_130219.jpg'
import img35 from './assets/IMG_20130927_122446.jpg'
import img36 from './assets/IMG_20130927_123122.jpg'
import img37 from './assets/WhatsAppImage2025-09-30at20.16.46.jpeg'
import img38 from './assets/temp_hero1.jpg'
import img39 from './assets/temp_hero2.jpg'
import img40 from './assets/temp_hero3.jpg'
import img41 from './assets/temp_hero4.jpg'
import img42 from './assets/temp_hero5.jpg'


const heroImages = [hero1, hero2, hero3]

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42]

const youtubeVideos = [
  "EdeIr_0cGzs",
  "5PJKxAqrP5c",
  "k4x3JZnpaFQ",
  "gjBDafwyIP4",
  "qggN8xsROw8",
  "cDR8BD7I_x8",
  "SpPgrI4Dyys",
  "66nHIV3FzwA",
  "G5dshRpmxGA",
  "ifdNcNZKIIE"
]

const experiences = [
  {
    title: "Co-Founder of ST Thomas University New York",
    organization: "ST Thomas University New York",
    link: "https://blog.uniecampus.it/2025/01/31/universita-ecampus-acquisisce-americana-st-thomas-university/"
  },
  {
    title: "Education and Smart Cities Specialist: Public Relations",
    organization: "Self-employed"
  },
  {
    title: "Chair in Smart Cities Council and Member of International Collaboration Team",
    organization: "Amnick Social Enterprise",
    link: "https://youtu.be/cDR8BD7I_x8"
  },
  {
    title: "Member of Boards of Directors - Director - SSML Adriano Macagno - Cuneo -Italy",
    organization: "SSML Adriano Macagno"
  },
  {
    title: "University Professor: International Relations",
    organization: "University of Central Europe"
  },
  {
    title: "Executive Director",
    organization: "EDUWORLD HOLDING Ltd"
  },
  {
    title: "Director Of International Development",
    organization: "La Scuola Superiore per Mediatori Linguistici \"Adriano Macagno\" di Cuneo"
  },
  {
    title: "Member of the Board of Directors",
    organization: "Università degli Studi Gabriele d'Annunzio -Leonardo Davinci"
  },
  {
    title: "Member of the Board of Directors",
    organization: "University Central Europe"
  },
  {
    title: "President of Aspim Europa France and French Speaking Countries",
    organization: "ASPIM EUROPA"
  }
]

export default function App() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
        <img 
          src={heroImages[currentHeroIndex]} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dr. h. c. Mkades Abdul MA, MBA
          </motion.h2>
          <motion.p 
            className="text-xl md:text-3xl mb-2 text-blue-200 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Executive Director
          </motion.p>
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-purple-200 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Professor of International Relations | Expert in Smart Cities
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-3">{exp.organization}</p>
              {exp.link && (
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Learn More →
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* LinkedIn Link */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a 
            href="https://www.linkedin.com/in/abdel-mkades-3731a9196/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((videoId, idx) => (
              <motion.div
                key={idx}
                className="aspect-video bg-black rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Photo Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover rounded-lg" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="modal"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <img src={selectedImage} alt="Full view" className="max-w-4xl max-h-screen object-contain" />
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Dr. h. c. Mkades Abdul MA, MBA. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.linkedin.com/in/abdel-mkades-3731a9196/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} />
          </a>
        </div>
      </footer>
    </div>
  )
}
