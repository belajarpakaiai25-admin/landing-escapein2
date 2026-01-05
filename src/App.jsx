import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Camera, 
  Wallet, 
  MessageCircle, 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  Facebook 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('lokal');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = {
    lokal: [
      {
        id: 1,
        name: "Nusa Penida, Bali",
        price: "1.200K",
        image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1000&auto=format&fit=crop",
        tag: "Best Seller",
        rating: 4.9
      },
      {
        id: 2,
        name: "Labuan Bajo, NTT",
        price: "2.500K",
        image: "https://images.unsplash.com/photo-1596423736746-836791e2b027?q=80&w=1000&auto=format&fit=crop",
        tag: "Gen-Z Fav",
        rating: 5.0
      },
      {
        id: 3,
        name: "Bromo Sunrise",
        price: "850K",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9e6d8c27c?q=80&w=1000&auto=format&fit=crop",
        tag: "Healing",
        rating: 4.8
      }
    ],
    internasional: [
      {
        id: 4,
        name: "Kyoto, Japan",
        price: "12.500K",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
        tag: "Bucket List",
        rating: 5.0
      },
      {
        id: 5,
        name: "Bangkok, Thailand",
        price: "3.200K",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop",
        tag: "Budget Asik",
        rating: 4.7
      },
      {
        id: 6,
        name: "Seoul, South Korea",
        price: "9.800K",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1000&auto=format&fit=crop",
        tag: "K-Vibes",
        rating: 4.9
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah A.",
      role: "College Student",
      text: "Gila sih, Labuan Bajo under 3jt tapi fasilitasnya mewah banget! Adminnya juga gercep parah. Fix bakal repeat order!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Raka D.",
      role: "Freelancer",
      text: "Healing tanpa bikin dompet boncos. Trip ke Bromo kemarin vibe-nya asik banget, tour guidenya pinter cari spot foto.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-lime-400 selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">E</div>
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-teal-900' : 'text-white'}`}>
              ESCAPE<span className="text-lime-400">-in</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Why Us', 'Destinations', 'Testimoni'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`font-medium hover:text-lime-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-lime-400 hover:bg-lime-500 text-teal-900 font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-2xl z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="text-slate-800" /> : <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40 animate-fade-in-down">
            {['Home', 'Why Us', 'Destinations', 'Testimoni'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-800 hover:text-teal-600"
              >
                {item}
              </a>
            ))}
            <button className="bg-teal-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg shadow-teal-600/30">
              Chat Admin Now
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Beach" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-black/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-lime-300 text-sm font-semibold mb-6 animate-fade-in">
            ✨ #1 Budget Travel Choice for Gen-Z
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Healing Tanpa <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-200">Bikin Pusing.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Liburan estetik dengan harga jujur. Temukan hidden gem lokal & internasional yang pas di kantong dan feed Instagram kamu.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="w-full md:w-auto bg-lime-400 hover:bg-lime-500 text-teal-950 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2">
              Cari Destinasi <ArrowRight size={20} />
            </button>
            <button className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all">
              Lihat Promo
            </button>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section id="why-us" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Wallet className="w-8 h-8 text-lime-600" />, 
                title: "Budget Friendly", 
                desc: "Harga jujur, All-in. Nggak ada drama hidden cost pas bayar." 
              },
              { 
                icon: <Camera className="w-8 h-8 text-lime-600" />, 
                title: "Curated Aesthetic Spots", 
                desc: "Kita pilihin spot yang beneran bagus, bukan cuma bagus di foto doang." 
              },
              { 
                icon: <MessageCircle className="w-8 h-8 text-lime-600" />, 
                title: "Easy Booking", 
                desc: "Males ribet? Chat admin di WA, konsul santai, langsung berangkat." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED DESTINATIONS --- */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Pilihan <span className="text-teal-600">Travelers</span>
            </h2>
            <p className="text-slate-500">Destinasi viral yang wajib masuk bucket list tahun ini.</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex">
              {['lokal', 'internasional'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-bold text-sm md:text-base capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-teal-600 shadow-md' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations[activeTab].map((item) => (
              <div key={item.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* Image Area */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-teal-800 text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                    {item.tag}
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <span className="text-lime-300 font-medium flex items-center gap-1">
                      <Star size={16} fill="currentColor" /> {item.rating}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Start From</p>
                      <p className="text-lg font-extrabold text-teal-600">IDR {item.price}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-lime-400 group-hover:text-teal-900 transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-teal-600 font-bold border-b-2 border-teal-600 pb-1 hover:text-teal-800 hover:border-teal-800 transition-colors">
              Lihat Semua Destinasi
            </button>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section id="testimoni" className="py-20 bg-teal-900 text-white overflow-hidden relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Kata Mereka <br/>
                <span className="text-lime-400">Tentang Trip Ini.</span>
              </h2>
              <p className="text-teal-100 text-lg mb-8">
                Jangan percaya kita, percaya mereka aja. Ratusan traveler Gen-Z udah buktiin serunya liburan bareng ESCAPE-in.
              </p>
              <div className="flex gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-teal-900 bg-slate-300 overflow-hidden">
                      <img src={`https://source.unsplash.com/random/100x100?face&sig=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-white">500+ Travelers</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
                  <p className="text-lg italic text-teal-50 mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-teal-200">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-teal-900 font-bold">E</div>
                <span className="text-2xl font-bold text-white">ESCAPE-in</span>
              </div>
              <p className="text-sm max-w-xs">
                Travel agency kekinian buat kamu yang butuh healing tapi tetap hemat.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-lime-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-lime-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-lime-400 transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; 2024 ESCAPE-in Travel. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- STICKY CTA --- */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/40 transition-all transform hover:scale-110 flex items-center gap-2 group"
      >
        <MessageCircle size={28} fill="white" className="text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          Chat Admin
        </span>
      </a>

    </div>
  );
};

export default App;

