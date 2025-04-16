
import { useEffect, useRef, useState } from "react";
import { Brain, ChevronDown, CircuitBoard, Cpu, Dna, Globe, LayoutGrid, Lightbulb, Link, Network, Orbit, Sparkles, Zap, Activity, Atom } from "lucide-react";
import * as THREE from "three";
import { gsap } from "gsap";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("capabilities");
  const [selectedFeature, setSelectedFeature] = useState<string>("accuracy");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // Interactive model data
  const modelFeatures = {
    accuracy: {
      title: "99.8% Accuracy",
      description: "Unmatched precision across diverse tasks with constant self-improvement algorithms",
      icon: <Activity className="h-8 w-8 text-indigo-400" />,
      stats: [
        { name: "Factual Precision", value: "99.8%" },
        { name: "Logic Coherence", value: "99.6%" },
        { name: "Context Retention", value: "128K tokens" }
      ]
    },
    reasoning: {
      title: "Quantum Reasoning",
      description: "Multi-dimensional logical frameworks processing complex relationships in microseconds",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      stats: [
        { name: "Logical Connections", value: "15.8T/sec" },
        { name: "Causal Analysis", value: "99.2%" },
        { name: "Problem Solving", value: "8.4x faster" }
      ]
    },
    knowledge: {
      title: "Synthetic Knowledge",
      description: "Real-time data integration and synthesis across all scientific and cultural domains",
      icon: <Dna className="h-8 w-8 text-purple-400" />,
      stats: [
        { name: "Data Ingestion", value: "58 PB/day" },
        { name: "Knowledge Graph", value: "12.7T nodes" },
        { name: "Information Recall", value: "<2ms" }
      ]
    },
    speed: {
      title: "Hyper Processing",
      description: "Revolutionary parallel computation with quantum-inspired algorithms",
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      stats: [
        { name: "Token Processing", value: "580K tokens/sec" },
        { name: "Response Time", value: "<50ms" },
        { name: "Concurrent Processes", value: "8.3M" }
      ]
    }
  };

  // Use cases with examples
  const useCases = [
    {
      id: "research",
      title: "Scientific Research",
      description: "Breakthrough acceleration in medical research by synthesizing cross-domain knowledge",
      icon: <Atom className="h-6 w-6" />,
      example: "Identified 17 novel protein interactions for cancer treatment by analyzing biochemical literature across 3.8 million papers in 2.7 seconds."
    },
    {
      id: "engineering",
      title: "Advanced Engineering",
      description: "Complex system modeling and optimization with quantum-level precision",
      icon: <CircuitBoard className="h-6 w-6" />,
      example: "Optimized airplane wing design reducing drag by 23% while maintaining structural integrity, saving 1.2M gallons of fuel per aircraft annually."
    },
    {
      id: "language",
      title: "Language Mastery",
      description: "Perfect natural language understanding with cultural and contextual awareness",
      icon: <Globe className="h-6 w-6" />,
      example: "Translated ancient manuscripts with 99.8% accuracy, preserving nuanced cultural references and discovering previously missed historical connections."
    },
    {
      id: "creative",
      title: "Creative Partnership",
      description: "Novel idea generation and artistic collaboration with human creators",
      icon: <Lightbulb className="h-6 w-6" />,
      example: "Collaborated with architects to generate sustainable building designs that reduce energy consumption by 47% while enhancing aesthetic appeal."
    }
  ];
  
  // Holographic scene setup
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x9b87f5, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x0EA5E9, 2);
    pointLight.position.set(-1, -1, 2);
    scene.add(pointLight);
    
    // Create floating brain mesh
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x7E69AB,
      wireframe: true,
      emissive: 0x9b87f5,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Create neural connections
    const neuralConnections = new THREE.Group();
    scene.add(neuralConnections);
    
    // Create 50 random neural connections
    for (let i = 0; i < 50; i++) {
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      );
      
      const endPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      );
      
      const points = [];
      points.push(startPoint);
      points.push(endPoint);
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x1EAEDB, 
        transparent: true, 
        opacity: Math.random() * 0.5 + 0.5 
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      neuralConnections.add(line);
    }
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xD6BCFA,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 5;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.y += 0.005;
      neuralConnections.rotation.y += 0.002;
      particlesMesh.rotation.y -= 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Handle scroll for parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (sphere) {
        sphere.rotation.x = scrollY * 0.001;
        neuralConnections.rotation.x = scrollY * 0.0005;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initialize hover animations for UI elements
    const initHoverAnimations = () => {
      const cards = document.querySelectorAll('.feature-card');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 15px 30px rgba(155, 135, 245, 0.3)",
            duration: 0.3
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 5px 15px rgba(155, 135, 245, 0.1)",
            duration: 0.3
          });
        });
      });
    };
    
    setTimeout(initHoverAnimations, 500);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // Handle navigation scroll
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0614] to-[#1A1A2E] text-white relative overflow-hidden">
      {/* Holographic overlay effect */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
      
      {/* Hologram canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-70 pointer-events-none"
      ></canvas>
      
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Orbit className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                DeepSeek 3.1
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('capabilities')}
                className={`text-sm font-medium tracking-wide hover:text-blue-400 transition-colors ${activeSection === 'capabilities' ? 'text-blue-400' : 'text-white/70'}`}
              >
                CAPABILITIES
              </button>
              <button 
                onClick={() => scrollToSection('applications')}
                className={`text-sm font-medium tracking-wide hover:text-blue-400 transition-colors ${activeSection === 'applications' ? 'text-blue-400' : 'text-white/70'}`}
              >
                APPLICATIONS
              </button>
              <button 
                onClick={() => scrollToSection('architecture')}
                className={`text-sm font-medium tracking-wide hover:text-blue-400 transition-colors ${activeSection === 'architecture' ? 'text-blue-400' : 'text-white/70'}`}
              >
                ARCHITECTURE
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className={`text-sm font-medium tracking-wide hover:text-blue-400 transition-colors ${activeSection === 'demo' ? 'text-blue-400' : 'text-white/70'}`}
              >
                DEMO
              </button>
            </div>
            
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <div className="flex flex-col space-y-3 bg-black/40 backdrop-blur-lg rounded-xl p-4">
                <button 
                  onClick={() => {
                    scrollToSection('capabilities');
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium tracking-wide py-2 hover:text-blue-400 transition-colors ${activeSection === 'capabilities' ? 'text-blue-400' : 'text-white/70'}`}
                >
                  CAPABILITIES
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('applications');
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium tracking-wide py-2 hover:text-blue-400 transition-colors ${activeSection === 'applications' ? 'text-blue-400' : 'text-white/70'}`}
                >
                  APPLICATIONS
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('architecture');
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium tracking-wide py-2 hover:text-blue-400 transition-colors ${activeSection === 'architecture' ? 'text-blue-400' : 'text-white/70'}`}
                >
                  ARCHITECTURE
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('demo');
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-medium tracking-wide py-2 hover:text-blue-400 transition-colors ${activeSection === 'demo' ? 'text-blue-400' : 'text-white/70'}`}
                >
                  DEMO
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-32">
          <div ref={containerRef} className="container mx-auto text-center relative">
            <div className="mb-6 inline-block">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></span>
                <span className="relative inline-block bg-black/30 px-4 py-1 rounded-full text-sm font-medium tracking-wider text-blue-300 border border-blue-500/20">
                  NEXT GENERATION AI
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                DeepSeek 3.1
              </span>
              <span className="block mt-2 text-white text-3xl md:text-5xl">
                Holographic Intelligence
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              The world's first multi-dimensional AI with quantum reasoning capabilities and 
              holographic data processing for unprecedented understanding and creativity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('capabilities')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition-transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Explore Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="px-8 py-3 rounded-lg bg-black/30 text-blue-400 font-medium border border-blue-500/30 transition-all hover:bg-blue-900/20 hover:border-blue-400"
              >
                Interactive Demo
              </button>
            </div>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20">
              <button 
                onClick={() => scrollToSection('capabilities')} 
                className="flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm mb-2 opacity-70">Discover More</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
              </button>
            </div>
          </div>
        </section>
        
        {/* Capabilities section */}
        <section id="capabilities" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Quantum-Scale Capabilities
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                DeepSeek 3.1 represents a paradigm shift in artificial intelligence, combining quantum processing techniques
                with holographic data representation for unparalleled performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {Object.entries(modelFeatures).map(([key, feature]) => (
                <div 
                  key={key}
                  onClick={() => setSelectedFeature(key)}
                  className={`feature-card relative rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                    selectedFeature === key 
                      ? 'bg-gradient-to-b from-indigo-900/40 to-blue-900/40 border border-indigo-500/30' 
                      : 'bg-black/30 border border-white/5 hover:border-indigo-500/20'
                  }`}
                >
                  {selectedFeature === key && (
                    <div className="absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-20 glow"></div>
                  )}
                  <div className={`mb-4 ${selectedFeature === key ? 'text-blue-400' : 'text-gray-400'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Selected feature details */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    {modelFeatures[selectedFeature as keyof typeof modelFeatures].icon}
                    <h3 className="text-2xl font-bold ml-3">
                      {modelFeatures[selectedFeature as keyof typeof modelFeatures].title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {modelFeatures[selectedFeature as keyof typeof modelFeatures].description}
                  </p>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {modelFeatures[selectedFeature as keyof typeof modelFeatures].stats.map((stat, index) => (
                      <div key={index} className="bg-indigo-900/20 rounded-lg p-4 border border-indigo-500/20">
                        <p className="text-sm text-gray-400 mb-1">{stat.name}</p>
                        <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Applications section */}
        <section id="applications" className="py-20 md:py-32 bg-black/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  Revolutionary Applications
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the transformative potential of DeepSeek 3.1 across multiple domains,
                solving previously impossible challenges with unprecedented efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="bg-gradient-to-br from-black/60 to-indigo-950/30 rounded-xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-900/30 text-blue-400">
                        {useCase.icon}
                      </div>
                      <h3 className="text-xl font-bold ml-3">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="bg-black/30 rounded-lg p-4 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                      <p className="text-sm text-gray-400 mb-2">Example:</p>
                      <p className="text-blue-300 italic">{useCase.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Architecture section */}
        <section id="architecture" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">
                  Holographic Architecture
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                DeepSeek 3.1 utilizes a revolutionary multi-dimensional neural architecture
                with quantum-inspired processing and holographic data representation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 bg-gradient-to-b from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Network className="h-6 w-6 mr-2 text-purple-400" />
                  Neural Framework
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs mt-0.5 mr-2">1</span>
                    <span className="text-gray-300">Multi-dimensional tensor networks with 12.8 trillion parameters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs mt-0.5 mr-2">2</span>
                    <span className="text-gray-300">Quantum-inspired sparse attention mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs mt-0.5 mr-2">3</span>
                    <span className="text-gray-300">Self-modifying neural pathways for continuous learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs mt-0.5 mr-2">4</span>
                    <span className="text-gray-300">Dynamic topology adaptation for emergent capabilities</span>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-1 bg-gradient-to-b from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-blue-400" />
                  Processing Systems
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs mt-0.5 mr-2">1</span>
                    <span className="text-gray-300">Distributed quantum-approximate computing units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs mt-0.5 mr-2">2</span>
                    <span className="text-gray-300">Parallel processing across 8.3M concurrent pathways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs mt-0.5 mr-2">3</span>
                    <span className="text-gray-300">Hyper-efficient tensor operations with custom ASICs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs mt-0.5 mr-2">4</span>
                    <span className="text-gray-300">Molecular-scale logic gates for minimal energy usage</span>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-1 bg-gradient-to-b from-emerald-900/30 to-green-900/30 rounded-xl p-6 border border-emerald-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LayoutGrid className="h-6 w-6 mr-2 text-emerald-400" />
                  Data Representation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs mt-0.5 mr-2">1</span>
                    <span className="text-gray-300">Holographic encoding for 100x compression efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs mt-0.5 mr-2">2</span>
                    <span className="text-gray-300">Hyperdimensional vectors for concept representation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs mt-0.5 mr-2">3</span>
                    <span className="text-gray-300">Dynamic knowledge graphs with 12.7T nodes and edges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs mt-0.5 mr-2">4</span>
                    <span className="text-gray-300">Self-organizing semantic embeddings across domains</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-black/30 rounded-2xl p-8 border border-indigo-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2 text-yellow-400" />
                  DeepSeek 3.1 Performance Matrix
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Parameters</p>
                    <p className="text-2xl font-bold text-blue-300">12.8 Trillion</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Context Length</p>
                    <p className="text-2xl font-bold text-blue-300">128K Tokens</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Inference Speed</p>
                    <p className="text-2xl font-bold text-blue-300">580K Tokens/s</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-400 mb-1">Energy Efficiency</p>
                    <p className="text-2xl font-bold text-blue-300">0.03 W/TFLOP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Demo section */}
        <section id="demo" className="py-20 md:py-32 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Interactive Experience
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Engage with a simulated version of DeepSeek 3.1 and experience the future of
                artificial intelligence firsthand.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-2xl p-6 border border-blue-500/30">
              <div className="bg-black/60 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-blue-300">DeepSeek 3.1 Terminal</h3>
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <p><span className="text-blue-400">&gt;</span> Initialize DeepSeek 3.1 holographic interface</p>
                  <p><span className="text-green-400">system:</span> Quantum processor online. Holographic systems active.</p>
                  <p><span className="text-green-400">system:</span> Neural matrix configured. Ready for input.</p>
                  <p className="mt-4"><span className="text-blue-400">&gt;</span> What makes you different from other AI models?</p>
                  <p><span className="text-yellow-400">DeepSeek 3.1:</span> Unlike traditional AI systems, I utilize a holographic neural architecture that enables multi-dimensional reasoning across 12.8 trillion parameters. My quantum-approximate processing allows me to explore solution spaces simultaneously rather than sequentially.</p>
                  <p className="mt-1"><span className="text-yellow-400">DeepSeek 3.1:</span> While conventional models struggle with complex reasoning chains beyond a few steps, my architecture enables maintaining coherence across thousands of logical steps. Additionally, my holographic data representation allows me to compress and manipulate information with unprecedented efficiency.</p>
                  <p className="mt-4"><span className="text-blue-400">&gt;</span> <span className="inline-block animate-pulse">_</span></p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="font-bold text-lg mb-4 flex items-center">
                    <Link className="h-5 w-5 mr-2 text-blue-400" />
                    Try These Prompts
                  </h4>
                  <ul className="space-y-3">
                    <li className="p-2 rounded bg-blue-900/20 text-blue-300 cursor-pointer hover:bg-blue-900/30 transition-colors">Explain quantum entanglement to a 5-year-old</li>
                    <li className="p-2 rounded bg-blue-900/20 text-blue-300 cursor-pointer hover:bg-blue-900/30 transition-colors">Design a sustainable city infrastructure</li>
                    <li className="p-2 rounded bg-blue-900/20 text-blue-300 cursor-pointer hover:bg-blue-900/30 transition-colors">Create a fusion reactor maintenance protocol</li>
                    <li className="p-2 rounded bg-blue-900/20 text-blue-300 cursor-pointer hover:bg-blue-900/30 transition-colors">Optimize this neural network architecture</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="font-bold text-lg mb-4 flex items-center">
                    <CircuitBoard className="h-5 w-5 mr-2 text-blue-400" />
                    System Status
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Neural Load</span>
                        <span className="text-sm text-blue-300">37%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "37%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Memory Allocation</span>
                        <span className="text-sm text-blue-300">58%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Quantum Coherence</span>
                        <span className="text-sm text-blue-300">99.8%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.8%" }}></div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-sm text-gray-400">Active Processing Cores: <span className="text-blue-300">8,192</span></p>
                      <p className="text-sm text-gray-400">Response Latency: <span className="text-blue-300">12ms</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black/50 border-t border-indigo-500/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Orbit className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                DeepSeek 3.1
              </h2>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 my-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Research Papers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Responsible AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Ethics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Developer Forum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Events</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">&copy; 2025 DeepSeek Industries. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-2">DeepSeek 3.1 is pushing the boundaries of artificial intelligence with holographic neural processing.</p>
          </div>
        </div>
      </footer>
      
      {/* Custom CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(155, 135, 245, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .glow {
          box-shadow: 0 0 15px 5px rgba(155, 135, 245, 0.2);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.2;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        `
      }} />
    </div>
  );
};

export default Index;
