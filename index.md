<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuro Code | Neurociência Aplicada à Marca</title>
    <meta name="description" content="Códigos da neurociência aplicados à sua marca. Transforme seu negócio com estratégias baseadas em ciência.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    <!-- Swiper.js -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Tailwind Custom Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'neuro-dark': '#0a0a0a',
                        'neuro-gray': '#1a1a1a',
                        'neuro-light': '#f8f9fa',
                        'neuro-accent': '#2d3748'
                    },
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'gradient': 'gradient 8s ease infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        gradient: {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-white text-neuro-dark font-sans antialiased">
    
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 navbar-blur" x-data="{ open: false }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <a href="#home" class="text-2xl font-bold text-gradient">
                        Neuro Code
                    </a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#home" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#ceo" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">CEO</a>
                        <a href="#missao" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Missão</a>
                        <a href="#metodologia" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Metodologia</a>
                        <a href="#mentoria" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Mentoria</a>
                        <a href="#portfolio" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                        <a href="#planos" class="text-neuro-dark hover:text-neuro-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Planos</a>
                        <a href="#contato" class="bg-neuro-dark text-white hover:bg-neuro-accent transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium">Contato</a>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button @click="open = !open" class="text-neuro-dark hover:text-neuro-accent focus:outline-none focus:text-neuro-accent">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div :class="{'block': open, 'hidden': !open}" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="#home" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="#ceo" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">CEO</a>
                <a href="#missao" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Missão</a>
                <a href="#metodologia" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Metodologia</a>
                <a href="#mentoria" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Mentoria</a>
                <a href="#portfolio" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
                <a href="#planos" class="text-neuro-dark hover:text-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Planos</a>
                <a href="#contato" class="bg-neuro-dark text-white hover:bg-neuro-accent block px-3 py-2 rounded-md text-base font-medium">Contato</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient particles-bg section-reveal">
        <!-- Enhanced Floating Shapes -->
        <div class="floating-shape shape-1 floating-element"></div>
        <div class="floating-shape shape-2 floating-element"></div>
        <div class="floating-shape shape-3 floating-element"></div>
        <div class="floating-shape shape-4 floating-element"></div>
        
        <!-- Background Grid -->
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                
                <!-- Left Content -->
                <div class="text-center lg:text-left space-y-8">
                    <div class="space-y-4">
                        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight hero-title">
                            <span class="block text-gradient">Neuro</span>
                            <span class="block text-neuro-dark">Code</span>
                        </h1>
                        <p class="text-xl sm:text-2xl text-neuro-accent font-light hero-subtitle">
                            Neurociência aplicada ao branding
                        </p>
                    </div>
                    
                    <p class="text-lg text-gray-600 max-w-2xl leading-relaxed hero-subtitle">
                        Decodificamos como o cérebro humano percebe, se conecta e decide. 
                        Transformamos marcas através da união entre <strong>Ciência</strong>, <strong>Comportamento</strong> e <strong>Essência</strong>.
                    </p>
                    
                    <!-- Three Pillars Preview -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 hero-cta">
                        <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white transition-all duration-300 micro-pulse">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-sm text-neuro-dark">CIÊNCIA</h3>
                            <p class="text-xs text-gray-600">Como o cérebro decide</p>
                        </div>
                        
                        <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white transition-all duration-300 micro-pulse">
                            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-sm text-neuro-dark">COMPORTAMENTO</h3>
                            <p class="text-xs text-gray-600">O que desperta nas pessoas</p>
                        </div>
                        
                        <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white transition-all duration-300 micro-pulse">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-sm text-neuro-dark">ESSÊNCIA</h3>
                            <p class="text-xs text-gray-600">Quem a marca realmente é</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-cta">
                        <a href="#metodologia" 
                           class="group bg-neuro-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-neuro-accent hover:scale-105 hover:shadow-xl inline-flex items-center justify-center micro-bounce">
                            Descobrir Método
                            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                        <a href="#mentoria" 
                           class="group border-2 border-neuro-dark text-neuro-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-neuro-dark hover:text-white hover:scale-105 hover:shadow-xl inline-flex items-center justify-center">
                            Mentoria Exclusiva
                            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-8 pt-8">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-neuro-dark">500+</div>
                            <div class="text-sm text-gray-600 mt-1">Marcas Transformadas</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-neuro-dark">95%</div>
                            <div class="text-sm text-gray-600 mt-1">Taxa de Sucesso</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-neuro-dark">10+</div>
                            <div class="text-sm text-gray-600 mt-1">Anos de Experiência</div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Content - 3D Visual Element -->
                <div class="flex justify-center lg:justify-end">
                    <div class="hero-3d">
                        <div class="hero-card relative w-96 h-96 glass-effect rounded-3xl p-8 shadow-2xl">
                            <!-- Brain/Network Visualization -->
                            <div class="absolute inset-4 rounded-2xl bg-gradient-to-br from-white to-gray-100 overflow-hidden">
                                <div class="relative w-full h-full flex items-center justify-center">
                                    <!-- Central Node -->
                                    <div class="absolute w-16 h-16 bg-neuro-dark rounded-full pulse-slow flex items-center justify-center">
                                        <div class="w-8 h-8 bg-white rounded-full"></div>
                                    </div>
                                    
                                    <!-- Connecting Lines and Nodes -->
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                        <!-- Lines -->
                                        <line x1="50" y1="50" x2="20" y2="20" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        <line x1="50" y1="50" x2="80" y2="20" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        <line x1="50" y1="50" x2="20" y2="80" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        <line x1="50" y1="50" x2="80" y2="80" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        <line x1="50" y1="50" x2="15" y2="50" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        <line x1="50" y1="50" x2="85" y2="50" stroke="#1a1a1a" stroke-width="0.5" opacity="0.6" class="animate-pulse" />
                                        
                                        <!-- Outer Nodes -->
                                        <circle cx="20" cy="20" r="3" fill="#4a5568" class="animate-pulse" />
                                        <circle cx="80" cy="20" r="3" fill="#4a5568" class="animate-pulse" />
                                        <circle cx="20" cy="80" r="3" fill="#4a5568" class="animate-pulse" />
                                        <circle cx="80" cy="80" r="3" fill="#4a5568" class="animate-pulse" />
                                        <circle cx="15" cy="50" r="3" fill="#4a5568" class="animate-pulse" />
                                        <circle cx="85" cy="50" r="3" fill="#4a5568" class="animate-pulse" />
                                    </svg>
                                    
                                    <!-- Floating Elements -->
                                    <div class="absolute top-4 right-4 w-6 h-6 bg-gray-300 rounded-full animate-float"></div>
                                    <div class="absolute bottom-4 left-4 w-4 h-4 bg-gray-400 rounded-full animate-float" style="animation-delay: 1s;"></div>
                                    <div class="absolute top-1/2 right-2 w-3 h-3 bg-gray-300 rounded-full animate-float" style="animation-delay: 2s;"></div>
                                </div>
                            </div>
                            
                            <!-- Card Content -->
                            <div class="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-neuro-dark mb-2">Neurociência</h3>
                                    <p class="text-sm text-gray-600">Aplicada ao Marketing</p>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 bg-neuro-dark rounded-full animate-pulse"></div>
                                        <span class="text-xs text-gray-600">Análise Comportamental</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 bg-neuro-accent rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
                                        <span class="text-xs text-gray-600">Estratégias Cognitivas</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                                        <span class="text-xs text-gray-600">Conexões Autênticas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-neuro-dark rounded-full flex justify-center">
                <div class="w-1 h-3 bg-neuro-dark rounded-full mt-2 animate-pulse"></div>
            </div>
        </div>
    </section>

    <!-- CEO Section -->
    <section id="ceo" class="py-20 section-gradient-1">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                
                <!-- CEO Image -->
                <div class="relative order-2 lg:order-1">
                    <div class="relative">
                        <!-- Main Image Container -->
                        <div class="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-2xl">
                            <div class="w-full h-full bg-gradient-to-br from-neuro-gray to-neuro-accent opacity-10 flex items-center justify-center">
                                <!-- Placeholder for CEO image -->
                                <div class="w-32 h-32 bg-neuro-dark rounded-full flex items-center justify-center">
                                    <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Floating Elements -->
                        <div class="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-neuro-dark">10+</div>
                                <div class="text-xs text-gray-600">Anos</div>
                            </div>
                        </div>
                        
                        <div class="absolute -bottom-4 -left-4 w-32 h-20 bg-neuro-dark rounded-2xl shadow-xl flex items-center justify-center">
                            <div class="text-center text-white">
                                <div class="text-lg font-bold">Neurociência</div>
                                <div class="text-xs opacity-80">Especialista</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- CEO Content -->
                <div class="order-1 lg:order-2 space-y-8">
                    <div class="space-y-4">
                        <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark leading-tight">
                            Conheça o <span class="text-gradient">CEO</span>
                        </h2>
                        <p class="text-xl text-neuro-accent font-medium">
                            Dr. Marcus Silva, Ph.D em Neurociência Comportamental
                        </p>
                    </div>
                    
                    <div class="space-y-6 text-gray-600 leading-relaxed">
                        <p class="text-lg">
                            Com mais de uma década dedicada ao estudo do cérebro humano e comportamento do consumidor, 
                            Dr. Marcus é pioneiro na aplicação de princípios neurocientíficos ao mundo dos negócios.
                        </p>
                        
                        <p>
                            Formado pela Universidade de Stanford e Harvard Business School, ele desenvolveu metodologias 
                            únicas que revolucionaram como marcas se conectam com seus públicos através de estratégias 
                            baseadas em evidências científicas.
                        </p>
                        
                        <p>
                            Autor de 3 livros bestsellers sobre neuromarketing e palestrante internacional, 
                            Dr. Marcus já transformou mais de 500 empresas ao redor do mundo.
                        </p>
                    </div>
                    
                    <!-- Achievements -->
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-neuro-dark rounded-full"></div>
                                <span class="font-semibold text-neuro-dark">Ph.D Stanford</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-neuro-accent rounded-full"></div>
                                <span class="font-semibold text-neuro-dark">Harvard Business</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                                <span class="font-semibold text-neuro-dark">500+ Empresas</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-neuro-dark rounded-full"></div>
                                <span class="font-semibold text-neuro-dark">3 Bestsellers</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pt-4">
                        <a href="#contato" class="inline-flex items-center bg-neuro-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-neuro-accent transition-all duration-300 hover:scale-105">
                            Conversar com Dr. Marcus
                            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Nossa Missão Section -->
    <section id="missao" class="py-20 section-gradient-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Nossa <span class="text-gradient">Missão</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Transformar a relação entre marcas e consumidores através da aplicação estratégica 
                    dos códigos da neurociência, criando conexões autênticas e resultados mensuráveis.
                </p>
            </div>
            
            <!-- Mission Content -->
            <div class="grid lg:grid-cols-3 gap-12 mb-16">
                
                <!-- Card 1: Ciência -->
                <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="w-16 h-16 bg-neuro-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-neuro-dark mb-4">Baseado em Ciência</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Utilizamos descobertas da neurociência cognitiva e comportamental para criar 
                        estratégias que realmente funcionam, não apenas teorias de marketing.
                    </p>
                </div>
                
                <!-- Card 2: Conexão -->
                <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="w-16 h-16 bg-neuro-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-neuro-dark mb-4">Conexões Autênticas</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Criamos vínculos emocionais genuínos entre sua marca e seus clientes, 
                        baseados em como o cérebro humano processa informações e toma decisões.
                    </p>
                </div>
                
                <!-- Card 3: Resultados -->
                <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-neuro-dark mb-4">Resultados Mensuráveis</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Não trabalhamos com achismos. Cada estratégia é testada, medida e otimizada 
                        para garantir o máximo retorno sobre investimento.
                    </p>
                </div>
            </div>
            
            <!-- Process Steps -->
            <div class="relative">
                <h3 class="text-3xl font-bold text-center text-neuro-dark mb-12">Como Aplicamos</h3>
                
                <div class="grid md:grid-cols-4 gap-8">
                    <!-- Step 1 -->
                    <div class="text-center relative">
                        <div class="w-20 h-20 bg-neuro-dark rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-white">1</span>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Análise Neural</h4>
                        <p class="text-sm text-gray-600">Mapeamos como seu público processa informações da sua marca</p>
                        
                        <!-- Connector Line -->
                        <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                    </div>
                    
                    <!-- Step 2 -->
                    <div class="text-center relative">
                        <div class="w-20 h-20 bg-neuro-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-white">2</span>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Estratégia Cognitiva</h4>
                        <p class="text-sm text-gray-600">Desenvolvemos mensagens que ativam as áreas certas do cérebro</p>
                        
                        <!-- Connector Line -->
                        <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                    </div>
                    
                    <!-- Step 3 -->
                    <div class="text-center relative">
                        <div class="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-white">3</span>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Implementação</h4>
                        <p class="text-sm text-gray-600">Aplicamos as descobertas em campanhas e touchpoints</p>
                        
                        <!-- Connector Line -->
                        <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                    </div>
                    
                    <!-- Step 4 -->
                    <div class="text-center">
                        <div class="w-20 h-20 bg-neuro-dark rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-white">4</span>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Otimização</h4>
                        <p class="text-sm text-gray-600">Mensuramos resultados e refinamos continuamente</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Metodologia Section -->
    <section id="metodologia" class="py-20 mesh-bg particles-bg section-reveal">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-20">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Metodologia <span class="text-gradient">NeuroCode</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    O método que une três dimensões fundamentais para decodificar 
                    e potencializar a conexão entre marca e consumidor.
                </p>
            </div>
            
            <!-- Three Pillars -->
            <div class="grid lg:grid-cols-3 gap-12 mb-16 card-stagger">
                
                <!-- CIÊNCIA -->
                <div class="card-item methodology-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-gray-900 text-center mb-4">CIÊNCIA</h3>
                    <p class="text-gray-700 font-medium text-center mb-6">Neurociência aplicada ao branding</p>
                    
                    <div class="space-y-4 mb-8">
                        <p class="text-gray-700 leading-relaxed">
                            Entender <strong>como o cérebro humano percebe, se conecta e decide</strong> é a base de tudo.
                        </p>
                        
                        <div class="bg-white/90 rounded-xl p-4 border-l-4 border-gray-700">
                            <p class="text-gray-900 font-semibold text-sm">PERGUNTA CENTRAL:</p>
                            <p class="text-gray-700 italic">"Por que certas marcas geram desejo e outras são esquecidas?"</p>
                        </div>
                    </div>
                    
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Neuroplasticidade e formação de memórias</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Processos de tomada de decisão</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Padrões neurais de reconhecimento</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Atenção e engagement neural</span>
                        </li>
                    </ul>
                </div>
                
                <!-- COMPORTAMENTO -->
                <div class="card-item methodology-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-purple-900 text-center mb-4">COMPORTAMENTO</h3>
                    <p class="text-purple-800 font-medium text-center mb-6">Psicologia e emoção</p>
                    
                    <div class="space-y-4 mb-8">
                        <p class="text-gray-700 leading-relaxed">
                            <strong>Traduzir o comportamento do público</strong> e o campo simbólico da marca para criar conexões emocionais profundas.
                        </p>
                        
                        <div class="bg-white/70 rounded-xl p-4 border-l-4 border-purple-600">
                            <p class="text-purple-900 font-semibold text-sm">PERGUNTA CENTRAL:</p>
                            <p class="text-gray-700 italic">"O que essa marca desperta nas pessoas?"</p>
                        </div>
                    </div>
                    
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Mapeamento psicográfico avançado</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Análise de gatilhos emocionais</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Padrões comportamentais do público</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Campo simbólico e significados</span>
                        </li>
                    </ul>
                </div>
                
                <!-- ESSÊNCIA -->
                <div class="card-item methodology-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <div class="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-green-900 text-center mb-4">ESSÊNCIA</h3>
                    <p class="text-green-800 font-medium text-center mb-6">Identidade e propósito</p>
                    
                    <div class="space-y-4 mb-8">
                        <p class="text-gray-700 leading-relaxed">
                            <strong>Trazer à consciência quem a marca realmente é</strong>, conectando propósito autêntico com expressão genuína.
                        </p>
                        
                        <div class="bg-white/70 rounded-xl p-4 border-l-4 border-green-600">
                            <p class="text-green-900 font-semibold text-sm">PERGUNTA CENTRAL:</p>
                            <p class="text-gray-700 italic">"O que ela representa, o que comunica e o que faz sentir?"</p>
                        </div>
                    </div>
                    
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Arqueologia da identidade da marca</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Definição de propósito autêntico</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Valores e personalidade da marca</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Expressão visual e verbal coerente</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Integration Section -->
            <div class="section-gradient-dark rounded-3xl p-12 text-white text-center">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-3xl font-bold mb-6">A União das Três Dimensões</h3>
                    <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                        Quando <span class="text-gray-300 font-semibold">Ciência</span>, 
                        <span class="text-gray-300 font-semibold">Comportamento</span> e 
                        <span class="text-gray-300 font-semibold">Essência</span> 
                        se conectam, nasce uma marca que não apenas vende, mas que 
                        <strong>ressoa profundamente</strong> com seu público.
                    </p>
                    
                    <div class="grid md:grid-cols-3 gap-8 mt-12">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-white mb-2">300%</div>
                            <p class="text-gray-300">Aumento médio no engagement neural</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-white mb-2">85%</div>
                            <p class="text-gray-300">Melhoria na conexão emocional</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-white mb-2">250%</div>
                            <p class="text-gray-300">Aumento no recall de marca</p>
                        </div>
                    </div>
                    
                    <div class="mt-12">
                        <a href="#planos" class="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 group">
                            Aplicar Metodologia na Sua Marca
                            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Nossa <span class="text-gradient">Metodologia</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Uma metodologia revolucionária que combina neurociência, psicologia comportamental 
                    e estratégia de marca para criar conexões que convertem.
                </p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
                
                <!-- Product Visual -->
                <div class="relative">
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl">
                        <!-- Main Product Visualization -->
                        <div class="relative">
                            <!-- Central Brain Icon -->
                            <div class="flex justify-center mb-8">
                                <div class="w-24 h-24 bg-neuro-dark rounded-full flex items-center justify-center">
                                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <!-- Connecting Elements -->
                            <div class="grid grid-cols-3 gap-4 mb-8">
                                <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                                    <div class="w-12 h-12 bg-neuro-accent rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div class="text-xs font-semibold text-neuro-dark">Análise</div>
                                </div>
                                
                                <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                                    <div class="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div class="text-xs font-semibold text-neuro-dark">Estratégia</div>
                                </div>
                                
                                <div class="bg-white rounded-xl p-4 shadow-lg text-center">
                                    <div class="w-12 h-12 bg-neuro-dark rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </div>
                                    <div class="text-xs font-semibold text-neuro-dark">Resultados</div>
                                </div>
                            </div>
                            
                            <!-- Bottom Stats -->
                            <div class="bg-neuro-dark rounded-2xl p-6 text-white text-center">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <div class="text-2xl font-bold">87%</div>
                                        <div class="text-xs opacity-80">Aumento Conversão</div>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-bold">3.2x</div>
                                        <div class="text-xs opacity-80">ROI Médio</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Product Content -->
                <div class="space-y-8">
                    <div>
                        <h3 class="text-3xl font-bold text-neuro-dark mb-4">NeuroCode Methodology™</h3>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            Nossa metodologia proprietária que decodifica os padrões neurais por trás 
                            das decisões de compra, criando estratégias que falam diretamente com o 
                            subconsciente do seu público.
                        </p>
                    </div>
                    
                    <!-- Features List -->
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-neuro-dark rounded-full flex items-center justify-center mt-1">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Análise Neurocognitiva</h4>
                                <p class="text-gray-600">Mapeamento completo de como seu público processa sua marca</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-neuro-accent rounded-full flex items-center justify-center mt-1">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Design de Mensagens</h4>
                                <p class="text-gray-600">Criação de conteúdo que ativa os gatilhos neurais corretos</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mt-1">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Implementação Estratégica</h4>
                                <p class="text-gray-600">Aplicação prática em todos os touchpoints da jornada do cliente</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-6 h-6 bg-neuro-dark rounded-full flex items-center justify-center mt-1">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Mensuração Contínua</h4>
                                <p class="text-gray-600">Dashboard em tempo real com métricas neurais e comerciais</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pt-6">
                        <a href="#planos" class="inline-flex items-center bg-neuro-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neuro-accent transition-all duration-300 hover:scale-105">
                            Ver Planos Disponíveis
                            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Product Benefits -->
            <div class="bg-gray-50 rounded-3xl p-12">
                <h3 class="text-3xl font-bold text-center text-neuro-dark mb-12">Benefícios Comprovados</h3>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-neuro-dark mb-2">+87%</div>
                        <div class="text-gray-600">Taxa de Conversão</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-neuro-dark mb-2">3.2x</div>
                        <div class="text-gray-600">Retorno sobre Investimento</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-neuro-dark mb-2">-43%</div>
                        <div class="text-gray-600">Custo de Aquisição</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-neuro-dark mb-2">+156%</div>
                        <div class="text-gray-600">Engajamento</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mentoria Section -->
    <section id="mentoria" class="py-20 section-gradient-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Mentoria <span class="text-gradient">Exclusiva</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Um programa personalizado onde Dr. Marcus Silva trabalha diretamente com você 
                    para transformar sua marca usando os códigos da neurociência.
                </p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
                
                <!-- Mentoria Content -->
                <div class="space-y-8">
                    <div>
                        <h3 class="text-3xl font-bold text-neuro-dark mb-6">
                            Transformação 1:1 com o Especialista
                        </h3>
                        <p class="text-lg text-gray-600 leading-relaxed mb-6">
                            Esta não é uma consultoria comum. É uma imersão profunda na neurociência 
                            aplicada ao seu negócio, com acompanhamento direto do Dr. Marcus Silva.
                        </p>
                    </div>
                    
                    <!-- Program Features -->
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                            <div class="w-8 h-8 bg-neuro-dark rounded-lg flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Sessões 1:1 Semanais</h4>
                                <p class="text-gray-600">90 minutos por semana de mentoria direta com Dr. Marcus</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                            <div class="w-8 h-8 bg-neuro-accent rounded-lg flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Análise Neurocognitiva Completa</h4>
                                <p class="text-gray-600">Mapeamento profundo do seu mercado e público-alvo</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                            <div class="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Estratégias Customizadas</h4>
                                <p class="text-gray-600">Planos específicos para seu nicho e objetivos</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                            <div class="w-8 h-8 bg-neuro-dark rounded-lg flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neuro-dark text-lg">Acompanhamento de Resultados</h4>
                                <p class="text-gray-600">Métricas neurais e comerciais em tempo real</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="pt-6">
                        <a href="#contato" class="inline-flex items-center bg-neuro-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neuro-accent transition-all duration-300 hover:scale-105">
                            Candidatar-se à Mentoria
                            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- Mentoria Visual -->
                <div class="relative">
                    <div class="bg-white rounded-3xl p-8 shadow-2xl">
                        <!-- Program Timeline -->
                        <div class="space-y-6">
                            <div class="text-center mb-8">
                                <h4 class="text-2xl font-bold text-neuro-dark mb-2">Programa de 12 Semanas</h4>
                                <p class="text-gray-600">Transformação completa em 3 meses</p>
                            </div>
                            
                            <!-- Timeline Steps -->
                            <div class="space-y-4">
                                <!-- Week 1-3 -->
                                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div class="w-12 h-12 bg-neuro-dark rounded-full flex items-center justify-center">
                                        <span class="text-white font-bold">1-3</span>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold text-neuro-dark">Diagnóstico Neural</h5>
                                        <p class="text-sm text-gray-600">Análise profunda do comportamento do seu público</p>
                                    </div>
                                </div>
                                
                                <!-- Week 4-6 -->
                                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div class="w-12 h-12 bg-neuro-accent rounded-full flex items-center justify-center">
                                        <span class="text-white font-bold">4-6</span>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold text-neuro-dark">Estratégia Cognitiva</h5>
                                        <p class="text-sm text-gray-600">Desenvolvimento de mensagens e touchpoints</p>
                                    </div>
                                </div>
                                
                                <!-- Week 7-9 -->
                                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div class="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                        <span class="text-white font-bold">7-9</span>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold text-neuro-dark">Implementação</h5>
                                        <p class="text-sm text-gray-600">Aplicação prática em campanhas e processos</p>
                                    </div>
                                </div>
                                
                                <!-- Week 10-12 -->
                                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div class="w-12 h-12 bg-neuro-dark rounded-full flex items-center justify-center">
                                        <span class="text-white font-bold">10-12</span>
                                    </div>
                                    <div>
                                        <h5 class="font-semibold text-neuro-dark">Otimização</h5>
                                        <p class="text-sm text-gray-600">Refinamento baseado em dados neurais</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Guarantee Badge -->
                        <div class="mt-8 text-center">
                            <div class="inline-flex items-center bg-neuro-dark text-white px-6 py-3 rounded-xl">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-semibold">Garantia de Resultados</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Floating Stats -->
                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-neuro-dark rounded-2xl shadow-xl flex items-center justify-center">
                        <div class="text-center text-white">
                            <div class="text-lg font-bold">12</div>
                            <div class="text-xs opacity-80">Semanas</div>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-4 -left-4 w-32 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-200">
                        <div class="text-center">
                            <div class="text-lg font-bold text-neuro-dark">1:1</div>
                            <div class="text-xs text-gray-600">Mentoria</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Testimonial -->
            <div class="bg-white rounded-3xl p-12 shadow-lg">
                <div class="max-w-4xl mx-auto text-center">
                    <svg class="w-12 h-12 text-gray-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <blockquote class="text-2xl font-medium text-neuro-dark mb-6 leading-relaxed">
                        "Em 12 semanas com Dr. Marcus, minha empresa aumentou as conversões em 340% e 
                        o engajamento em 280%. A neurociência realmente funciona quando aplicada corretamente."
                    </blockquote>
                    <div class="flex items-center justify-center space-x-4">
                        <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </div>
                        <div class="text-left">
                            <div class="font-semibold text-neuro-dark">Ana Paula Santos</div>
                            <div class="text-gray-600 text-sm">CEO, TechFlow Solutions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio/Cases Section -->
    <section id="portfolio" class="py-20 section-gradient-1">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Nosso <span class="text-gradient">Portfolio</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Cases reais de empresas que transformaram seus resultados aplicando 
                    os códigos da neurociência com nossa metodologia.
                </p>
            </div>
            
            <!-- Cases Carousel -->
            <div class="relative">
                <div class="swiper portfolio-swiper">
                    <div class="swiper-wrapper">
                        
                        <!-- Case 1 -->
                        <div class="swiper-slide">
                            <div class="bg-gray-50 rounded-3xl p-8 h-full">
                                <div class="flex flex-col h-full">
                                    <!-- Company Logo/Icon -->
                                    <div class="w-16 h-16 bg-neuro-dark rounded-2xl flex items-center justify-center mb-6">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    
                                    <!-- Company Info -->
                                    <div class="mb-6">
                                        <h3 class="text-2xl font-bold text-neuro-dark mb-2">TechFlow Solutions</h3>
                                        <p class="text-gray-600 mb-4">SaaS B2B • Tecnologia</p>
                                        <p class="text-gray-700 leading-relaxed">
                                            Empresa de software B2B que estava com baixa conversão em seu funil de vendas. 
                                            Aplicamos neurociência para redesenhar a jornada do cliente.
                                        </p>
                                    </div>
                                    
                                    <!-- Results -->
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+340%</div>
                                            <div class="text-sm text-gray-600">Conversões</div>
                                        </div>
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">-52%</div>
                                            <div class="text-sm text-gray-600">CAC</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Key Strategy -->
                                    <div class="mt-auto">
                                        <div class="bg-neuro-dark rounded-xl p-4 text-white">
                                            <h4 class="font-semibold mb-2">Estratégia Chave</h4>
                                            <p class="text-sm opacity-90">
                                                Redesign neurocognitivo das páginas de vendas com gatilhos de urgência e prova social.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Case 2 -->
                        <div class="swiper-slide">
                            <div class="bg-gray-50 rounded-3xl p-8 h-full">
                                <div class="flex flex-col h-full">
                                    <!-- Company Logo/Icon -->
                                    <div class="w-16 h-16 bg-neuro-accent rounded-2xl flex items-center justify-center mb-6">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z"></path>
                                        </svg>
                                    </div>
                                    
                                    <!-- Company Info -->
                                    <div class="mb-6">
                                        <h3 class="text-2xl font-bold text-neuro-dark mb-2">FashionTrend</h3>
                                        <p class="text-gray-600 mb-4">E-commerce • Moda</p>
                                        <p class="text-gray-700 leading-relaxed">
                                            Loja online de moda feminina com alta taxa de abandono de carrinho. 
                                            Implementamos triggers neurais para aumentar a finalização de compras.
                                        </p>
                                    </div>
                                    
                                    <!-- Results -->
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+280%</div>
                                            <div class="text-sm text-gray-600">Checkout</div>
                                        </div>
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+156%</div>
                                            <div class="text-sm text-gray-600">AOV</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Key Strategy -->
                                    <div class="mt-auto">
                                        <div class="bg-neuro-accent rounded-xl p-4 text-white">
                                            <h4 class="font-semibold mb-2">Estratégia Chave</h4>
                                            <p class="text-sm opacity-90">
                                                Aplicação de psicologia da escassez e ancoragem de preços no processo de compra.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Case 3 -->
                        <div class="swiper-slide">
                            <div class="bg-gray-50 rounded-3xl p-8 h-full">
                                <div class="flex flex-col h-full">
                                    <!-- Company Logo/Icon -->
                                    <div class="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                        </svg>
                                    </div>
                                    
                                    <!-- Company Info -->
                                    <div class="mb-6">
                                        <h3 class="text-2xl font-bold text-neuro-dark mb-2">EduMaster</h3>
                                        <p class="text-gray-600 mb-4">EdTech • Educação</p>
                                        <p class="text-gray-700 leading-relaxed">
                                            Plataforma de cursos online com baixo engajamento dos alunos. 
                                            Utilizamos neurociência para aumentar a retenção e conclusão.
                                        </p>
                                    </div>
                                    
                                    <!-- Results -->
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+425%</div>
                                            <div class="text-sm text-gray-600">Engajamento</div>
                                        </div>
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+190%</div>
                                            <div class="text-sm text-gray-600">Conclusão</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Key Strategy -->
                                    <div class="mt-auto">
                                        <div class="bg-gray-600 rounded-xl p-4 text-white">
                                            <h4 class="font-semibold mb-2">Estratégia Chave</h4>
                                            <p class="text-sm opacity-90">
                                                Gamificação neural e sistema de recompensas baseado em dopamina.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Case 4 -->
                        <div class="swiper-slide">
                            <div class="bg-gray-50 rounded-3xl p-8 h-full">
                                <div class="flex flex-col h-full">
                                    <!-- Company Logo/Icon -->
                                    <div class="w-16 h-16 bg-neuro-dark rounded-2xl flex items-center justify-center mb-6">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                        </svg>
                                    </div>
                                    
                                    <!-- Company Info -->
                                    <div class="mb-6">
                                        <h3 class="text-2xl font-bold text-neuro-dark mb-2">FinanceGrow</h3>
                                        <p class="text-gray-600 mb-4">FinTech • Serviços Financeiros</p>
                                        <p class="text-gray-700 leading-relaxed">
                                            Startup fintech com dificuldades na aquisição de clientes. 
                                            Aplicamos neurociência para superar barreiras psicológicas.
                                        </p>
                                    </div>
                                    
                                    <!-- Results -->
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+520%</div>
                                            <div class="text-sm text-gray-600">Signups</div>
                                        </div>
                                        <div class="bg-white rounded-xl p-4 text-center">
                                            <div class="text-2xl font-bold text-neuro-dark mb-1">+89%</div>
                                            <div class="text-sm text-gray-600">Confiança</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Key Strategy -->
                                    <div class="mt-auto">
                                        <div class="bg-neuro-dark rounded-xl p-4 text-white">
                                            <h4 class="font-semibold mb-2">Estratégia Chave</h4>
                                            <p class="text-sm opacity-90">
                                                Redução da ansiedade financeira com storytelling neural e elementos de confiança.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <!-- Navigation -->
                    <div class="swiper-pagination"></div>
                </div>
                
                <!-- Navigation Arrows -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            
            <!-- Portfolio Stats -->
            <div class="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
                <div class="text-center">
                    <div class="text-4xl font-bold text-neuro-dark mb-2">500+</div>
                    <div class="text-gray-600">Empresas Atendidas</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-neuro-dark mb-2">95%</div>
                    <div class="text-gray-600">Taxa de Sucesso</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-neuro-dark mb-2">3.2x</div>
                    <div class="text-gray-600">ROI Médio</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-neuro-dark mb-2">24h</div>
                    <div class="text-gray-600">Primeiros Resultados</div>
                </div>
            </div>
            
            <!-- CTA -->
            <div class="text-center mt-12">
                <a href="#planos" class="inline-flex items-center bg-neuro-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neuro-accent transition-all duration-300 hover:scale-105">
                    Ver Como Podemos Ajudar Você
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Planos Section -->
    <section id="planos" class="py-20 section-gradient-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Escolha Seu <span class="text-gradient">Plano</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    Soluções personalizadas para cada etapa da sua jornada de transformação neural. 
                    Desde consultorias pontuais até imersão completa.
                </p>
            </div>
            
            <!-- Pricing Tabs -->
            <div x-data="{ activeTab: 'consultoria' }" class="max-w-6xl mx-auto">
                
                <!-- Tab Navigation -->
                <div class="flex flex-wrap justify-center mb-12">
                    <div class="bg-white rounded-2xl p-2 shadow-lg inline-flex">
                        <button @click="activeTab = 'consultoria'" 
                                :class="activeTab === 'consultoria' ? 'bg-neuro-dark text-white' : 'text-neuro-dark hover:bg-gray-100'"
                                class="px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none">
                            Consultoria
                        </button>
                        <button @click="activeTab = 'mentoria'" 
                                :class="activeTab === 'mentoria' ? 'bg-neuro-dark text-white' : 'text-neuro-dark hover:bg-gray-100'"
                                class="px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none">
                            Mentoria
                        </button>
                        <button @click="activeTab = 'enterprise'" 
                                :class="activeTab === 'enterprise' ? 'bg-neuro-dark text-white' : 'text-neuro-dark hover:bg-gray-100'"
                                class="px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none">
                            Enterprise
                        </button>
                    </div>
                </div>
                
                <!-- Tab Content -->
                <div class="relative">
                    
                    <!-- Consultoria Tab -->
                    <div x-show="activeTab === 'consultoria'" 
                         x-transition:enter="transition ease-out duration-300" 
                         x-transition:enter-start="opacity-0 transform translate-y-4" 
                         x-transition:enter-end="opacity-100 transform translate-y-0"
                         class="grid md:grid-cols-3 gap-8">
                        
                        <!-- Plano Diagnóstico -->
                        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-neuro-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-neuro-dark mb-2">Diagnóstico Neural</h3>
                                <p class="text-gray-600 mb-6">Análise completa do comportamento do seu público</p>
                                <div class="text-4xl font-bold text-neuro-dark mb-2">R$ 2.500</div>
                                <div class="text-gray-500 text-sm">projeto único</div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Mapeamento neurocognitivo</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Relatório detalhado</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Recomendações estratégicas</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">1 sessão de apresentação</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Entrega em 7 dias</span>
                                </li>
                            </ul>
                            
                            <a href="#contato" class="w-full bg-gray-100 text-neuro-dark py-3 px-6 rounded-xl font-semibold hover:bg-neuro-dark hover:text-white transition-all duration-300 text-center block">
                                Solicitar Diagnóstico
                            </a>
                        </div>
                        
                        <!-- Plano Estratégia -->
                        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                            <!-- Popular Badge -->
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-neuro-dark text-white px-4 py-2 rounded-full text-sm font-semibold">Mais Popular</span>
                            </div>
                            
                            <div class="text-center mb-8 pt-4">
                                <div class="w-16 h-16 bg-neuro-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-neuro-dark mb-2">Estratégia Completa</h3>
                                <p class="text-gray-600 mb-6">Implementação da metodologia NeuroCode</p>
                                <div class="text-4xl font-bold text-neuro-dark mb-2">R$ 8.500</div>
                                <div class="text-gray-500 text-sm">projeto completo</div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Tudo do plano Diagnóstico</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Redesign neural completo</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Implementação guiada</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">4 sessões de acompanhamento</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Dashboard de métricas</span>
                                </li>
                            </ul>
                            
                            <a href="#contato" class="w-full bg-neuro-dark text-white py-3 px-6 rounded-xl font-semibold hover:bg-neuro-accent transition-all duration-300 text-center block">
                                Começar Agora
                            </a>
                        </div>
                        
                        <!-- Plano Otimização -->
                        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 bg-neuro-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-neuro-dark mb-2">Otimização Contínua</h3>
                                <p class="text-gray-600 mb-6">Refinamento baseado em dados neurais</p>
                                <div class="text-4xl font-bold text-neuro-dark mb-2">R$ 3.500</div>
                                <div class="text-gray-500 text-sm">por mês</div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Monitoramento contínuo</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Relatórios mensais</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Ajustes estratégicos</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Suporte prioritário</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Cancelamento flexível</span>
                                </li>
                            </ul>
                            
                            <a href="#contato" class="w-full bg-gray-100 text-neuro-dark py-3 px-6 rounded-xl font-semibold hover:bg-neuro-dark hover:text-white transition-all duration-300 text-center block">
                                Contratar Otimização
                            </a>
                        </div>
                    </div>
                    
                    <!-- Mentoria Tab -->
                    <div x-show="activeTab === 'mentoria'" 
                         x-transition:enter="transition ease-out duration-300" 
                         x-transition:enter-start="opacity-0 transform translate-y-4" 
                         x-transition:enter-end="opacity-100 transform translate-y-0"
                         class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        
                        <!-- Mentoria Intensiva -->
                        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div class="text-center mb-8">
                                <div class="w-16 h-16 bg-neuro-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-neuro-dark mb-2">Mentoria Intensiva</h3>
                                <p class="text-gray-600 mb-6">6 semanas de transformação 1:1</p>
                                <div class="text-4xl font-bold text-neuro-dark mb-2">R$ 15.000</div>
                                <div class="text-gray-500 text-sm">6 semanas</div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">6 sessões 1:1 (90min cada)</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">WhatsApp direto com Dr. Marcus</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Análise neurocognitiva completa</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Estratégias personalizadas</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Garantia de resultados</span>
                                </li>
                            </ul>
                            
                            <a href="#contato" class="w-full bg-neuro-dark text-white py-3 px-6 rounded-xl font-semibold hover:bg-neuro-accent transition-all duration-300 text-center block">
                                Candidatar-se
                            </a>
                        </div>
                        
                        <!-- Mentoria Premium -->
                        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                            <!-- Exclusive Badge -->
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Exclusivo</span>
                            </div>
                            
                            <div class="text-center mb-8 pt-4">
                                <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-neuro-dark mb-2">Mentoria Premium</h3>
                                <p class="text-gray-600 mb-6">12 semanas de imersão total</p>
                                <div class="text-4xl font-bold text-neuro-dark mb-2">R$ 25.000</div>
                                <div class="text-gray-500 text-sm">12 semanas</div>
                            </div>
                            
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Tudo da Mentoria Intensiva</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">12 sessões semanais (90min)</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Implementação hands-on</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Acesso vitalício ao material</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-gray-700">Certificação NeuroCode</span>
                                </li>
                            </ul>
                            
                            <a href="#contato" class="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-center block">
                                Garantir Vaga
                            </a>
                        </div>
                    </div>
                    
                    <!-- Enterprise Tab -->
                    <div x-show="activeTab === 'enterprise'" 
                         x-transition:enter="transition ease-out duration-300" 
                         x-transition:enter-start="opacity-0 transform translate-y-4" 
                         x-transition:enter-end="opacity-100 transform translate-y-0"
                         class="max-w-4xl mx-auto">
                        
                        <div class="bg-white rounded-3xl p-12 shadow-lg text-center">
                            <div class="w-24 h-24 bg-neuro-dark rounded-3xl flex items-center justify-center mx-auto mb-8">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            
                            <h3 class="text-3xl font-bold text-neuro-dark mb-4">Soluções Enterprise</h3>
                            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Para grandes empresas que precisam transformar toda a organização 
                                com neurociência aplicada em escala.
                            </p>
                            
                            <div class="grid md:grid-cols-2 gap-8 mb-12">
                                <div class="text-left">
                                    <h4 class="text-xl font-semibold text-neuro-dark mb-4">Incluído:</h4>
                                    <ul class="space-y-3">
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Auditoria neurocognitiva completa</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Treinamento de equipes</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Implementação em múltiplos canais</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Dashboard executivo em tempo real</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="text-left">
                                    <h4 class="text-xl font-semibold text-neuro-dark mb-4">Benefícios:</h4>
                                    <ul class="space-y-3">
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Aumento médio de 300% no ROI</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Redução de 50% no CAC</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Melhoria na retenção de clientes</span>
                                        </li>
                                        <li class="flex items-center space-x-3">
                                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">Equipe interna capacitada</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 rounded-2xl p-6 mb-8">
                                <p class="text-lg font-semibold text-neuro-dark mb-2">Investimento personalizado</p>
                                <p class="text-gray-600">A partir de R$ 50.000 - Valor definido após análise da complexidade e escopo do projeto</p>
                            </div>
                            
                            <a href="#contato" class="inline-flex items-center bg-neuro-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neuro-accent transition-all duration-300">
                                Solicitar Proposta
                                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Garantias -->
            <div class="mt-16 bg-white rounded-3xl p-8 shadow-lg">
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Garantia de Resultados</h4>
                        <p class="text-gray-600 text-sm">Se não alcançar os resultados prometidos, devolvemos 100% do investimento</p>
                    </div>
                    
                    <div>
                        <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Resultados em 30 Dias</h4>
                        <p class="text-gray-600 text-sm">Primeiros indicadores de melhoria visíveis já no primeiro mês</p>
                    </div>
                    
                    <div>
                        <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-neuro-dark mb-2">Suporte Contínuo</h4>
                        <p class="text-gray-600 text-sm">Acompanhamento e suporte durante toda a implementação</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Formulário de Contato Section -->
    <section id="contato" class="py-20 mesh-bg">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Vamos <span class="text-gradient">Conversar</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Transforme sua marca com neurociência aplicada. Agende uma conversa estratégica 
                    gratuita e descubra o potencial neural do seu negócio.
                </p>
            </div>
            
            <!-- Form Container -->
            <div class="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <form x-data="contactForm()" @submit.prevent="submitForm" class="space-y-8">
                    
                    <!-- Form Grid -->
                    <div class="grid md:grid-cols-2 gap-6">
                        
                        <!-- Nome -->
                        <div>
                            <label class="block text-sm font-semibold text-neuro-dark mb-3">
                                Nome Completo *
                            </label>
                            <input 
                                type="text" 
                                x-model="form.name"
                                :class="errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-neuro-dark'"
                                class="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-0 transition-colors duration-300"
                                placeholder="Seu nome completo"
                                required>
                            <p x-show="errors.name" x-text="errors.name" class="text-red-500 text-sm mt-2"></p>
                        </div>
                        
                        <!-- Email -->
                        <div>
                            <label class="block text-sm font-semibold text-neuro-dark mb-3">
                                Email Profissional *
                            </label>
                            <input 
                                type="email" 
                                x-model="form.email"
                                :class="errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-neuro-dark'"
                                class="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-0 transition-colors duration-300"
                                placeholder="seuemail@empresa.com"
                                required>
                            <p x-show="errors.email" x-text="errors.email" class="text-red-500 text-sm mt-2"></p>
                        </div>
                        
                        <!-- Telefone -->
                        <div>
                            <label class="block text-sm font-semibold text-neuro-dark mb-3">
                                WhatsApp *
                            </label>
                            <input 
                                type="tel" 
                                x-model="form.phone"
                                :class="errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-neuro-dark'"
                                class="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-0 transition-colors duration-300"
                                placeholder="(11) 99999-9999"
                                required>
                            <p x-show="errors.phone" x-text="errors.phone" class="text-red-500 text-sm mt-2"></p>
                        </div>
                        
                        <!-- Empresa -->
                        <div>
                            <label class="block text-sm font-semibold text-neuro-dark mb-3">
                                Empresa
                            </label>
                            <input 
                                type="text" 
                                x-model="form.company"
                                class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-neuro-dark focus:outline-none focus:ring-0 transition-colors duration-300"
                                placeholder="Nome da sua empresa">
                        </div>
                    </div>
                    
                    <!-- Interesse -->
                    <div>
                        <label class="block text-sm font-semibold text-neuro-dark mb-3">
                            Principal Interesse *
                        </label>
                        <select 
                            x-model="form.interest"
                            :class="errors.interest ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-neuro-dark'"
                            class="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-0 transition-colors duration-300 bg-white"
                            required>
                            <option value="">Selecione uma opção</option>
                            <option value="consultoria">Consultoria Neurocognitiva</option>
                            <option value="mentoria">Mentoria Intensiva</option>
                            <option value="enterprise">Soluções Enterprise</option>
                            <option value="auditoria">Auditoria de Marca</option>
                            <option value="outro">Outro interesse</option>
                        </select>
                        <p x-show="errors.interest" x-text="errors.interest" class="text-red-500 text-sm mt-2"></p>
                    </div>
                    
                    <!-- Mensagem -->
                    <div>
                        <label class="block text-sm font-semibold text-neuro-dark mb-3">
                            Conte-nos sobre seu desafio
                        </label>
                        <textarea 
                            x-model="form.message"
                            rows="4"
                            class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-neuro-dark focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
                            placeholder="Descreva brevemente o desafio da sua marca e como podemos ajudar..."></textarea>
                    </div>
                    
                    <!-- Budget -->
                    <div>
                        <label class="block text-sm font-semibold text-neuro-dark mb-3">
                            Orçamento Disponível
                        </label>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" x-model="form.budget" value="2500-5000" class="text-neuro-dark focus:ring-neuro-dark">
                                <span class="text-sm text-gray-700">R$ 2.5k - 5k</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" x-model="form.budget" value="5000-15000" class="text-neuro-dark focus:ring-neuro-dark">
                                <span class="text-sm text-gray-700">R$ 5k - 15k</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" x-model="form.budget" value="15000-50000" class="text-neuro-dark focus:ring-neuro-dark">
                                <span class="text-sm text-gray-700">R$ 15k - 50k</span>
                            </label>
                            <label class="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" x-model="form.budget" value="50000+" class="text-neuro-dark focus:ring-neuro-dark">
                                <span class="text-sm text-gray-700">R$ 50k+</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Submit Button -->
                    <div class="pt-4">
                        <button 
                            type="submit"
                            :disabled="isSubmitting"
                            :class="isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-neuro-dark hover:bg-neuro-accent'"
                            class="w-full py-4 px-8 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3">
                            
                            <span x-show="!isSubmitting">Agendar Conversa Estratégica</span>
                            <span x-show="isSubmitting">Enviando...</span>
                            
                            <svg x-show="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                            
                            <!-- Loading Spinner -->
                            <svg x-show="isSubmitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </button>
                        
                        <!-- Success Message -->
                        <div x-show="showSuccess" 
                             x-transition:enter="transition ease-out duration-300" 
                             x-transition:enter-start="opacity-0 transform translate-y-2" 
                             x-transition:enter-end="opacity-100 transform translate-y-0"
                             class="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                            <div class="flex items-center space-x-3">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h4 class="font-semibold text-green-800">Mensagem enviada com sucesso!</h4>
                                    <p class="text-green-700 text-sm">Entraremos em contato em até 24 horas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Privacy Notice -->
                    <div class="text-center pt-4 border-t border-gray-200">
                        <p class="text-sm text-gray-500">
                            🔒 Seus dados estão seguros conosco. Não enviamos spam e você pode cancelar a qualquer momento.
                        </p>
                    </div>
                </form>
            </div>
            
            <!-- Contact Info -->
            <div class="mt-16 grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <div class="w-12 h-12 bg-neuro-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h4 class="font-semibold text-neuro-dark mb-2">Email</h4>
                    <p class="text-gray-600">contato@neurocode.com</p>
                </div>
                
                <div>
                    <div class="w-12 h-12 bg-neuro-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h4 class="font-semibold text-neuro-dark mb-2">WhatsApp</h4>
                    <p class="text-gray-600">(11) 99999-9999</p>
                </div>
                
                <div>
                    <div class="w-12 h-12 bg-neuro-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h4 class="font-semibold text-neuro-dark mb-2">Resposta</h4>
                    <p class="text-gray-600">Em até 24 horas</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 section-gradient-2">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-neuro-dark mb-6">
                    Perguntas <span class="text-gradient">Frequentes</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Tire suas dúvidas sobre neurociência aplicada ao branding e descubra 
                    como nossa metodologia pode transformar sua marca.
                </p>
            </div>
            
            <!-- FAQ Accordion -->
            <div x-data="faqAccordion()" class="space-y-4">
                
                <!-- FAQ Item 1 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(1)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            O que é neurociência aplicada ao branding?
                        </h3>
                        <svg :class="isOpen(1) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(1)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            É a aplicação de conhecimentos científicos sobre como o cérebro processa informações, toma decisões e forma memórias para criar estratégias de marca mais eficazes. Utilizamos insights de neurociência cognitiva, psicologia comportamental e neuroplasticidade para desenvolver identidades visuais, mensagens e experiências que se conectam diretamente com os processos neurais do seu público-alvo.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ Item 2 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(2)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            Como vocês medem os resultados das estratégias neurais?
                        </h3>
                        <svg :class="isOpen(2) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(2)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            Utilizamos uma combinação de métricas quantitativas e qualitativas: análise de engagement neural (tempo de atenção, recall de marca), testes A/B neurocognitivos, métricas de conversão comportamental, análise de padrões de navegação e eye-tracking quando aplicável. Também medimos indicadores de negócio como CAC, LTV, taxa de conversão e NPS para validar o impacto real nas vendas.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ Item 3 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(3)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            Quanto tempo leva para ver os primeiros resultados?
                        </h3>
                        <svg :class="isOpen(3) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(3)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            Os primeiros indicadores aparecem entre 2-4 semanas após a implementação inicial. Isso inclui melhorias em métricas de engagement, tempo de permanência e interações qualitativas. Resultados mais substanciais em conversão e vendas geralmente são observados entre 6-12 semanas, dependendo do ciclo de venda do seu negócio e da complexidade da implementação.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ Item 4 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(4)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            A metodologia funciona para qualquer tipo de negócio?
                        </h3>
                        <svg :class="isOpen(4) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(4)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            Sim, mas com adaptações específicas. Nossa metodologia tem maior eficácia em negócios B2B de alta consideração, produtos/serviços de valor elevado, marcas premium e empresas que dependem de confiança e credibilidade. Para e-commerce, SaaS, consultorias, educação e saúde temos resultados especialmente significativos. Fazemos sempre uma análise prévia para determinar o fit ideal.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ Item 5 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(5)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            Qual a diferença entre consultoria e mentoria?
                        </h3>
                        <svg :class="isOpen(5) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(5)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            <strong>Consultoria:</strong> Entregamos a solução pronta - diagnóstico, estratégia e implementação feita pela nossa equipe. Ideal para empresas que querem resultados rápidos sem envolvimento interno intenso.<br><br>
                            <strong>Mentoria:</strong> Transferimos conhecimento e capacitamos sua equipe - você aprende a metodologia, participa ativamente da criação e desenvolve autonomia. Ideal para empresas que querem capacitação interna e aplicação contínua.
                        </p>
                    </div>
                </div>
                
                <!-- FAQ Item 6 -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button @click="toggle(6)" class="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                        <h3 class="text-lg font-semibold text-neuro-dark pr-4">
                            Vocês oferecem garantia de resultados?
                        </h3>
                        <svg :class="isOpen(6) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div x-show="isOpen(6)" x-collapse class="px-6 pb-6">
                        <p class="text-gray-600 leading-relaxed">
                            Sim. Para consultorias completas e mentorias, oferecemos garantia de resultados mensuráveis ou devolução de 100% do investimento. Os indicadores específicos são definidos no início do projeto baseados no seu contexto. Isso demonstra nossa confiança na metodologia e alinhamento total com o seu sucesso.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- CTA Footer -->
            <div class="text-center mt-16">
                <p class="text-gray-600 mb-6">Ainda tem dúvidas? Vamos conversar!</p>
                <a href="#contato" class="inline-flex items-center bg-neuro-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-neuro-accent transition-all duration-300">
                    Falar com Especialista
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neuro-dark text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                
                <!-- Brand -->
                <div class="md:col-span-1">
                    <h3 class="text-2xl font-bold text-gradient mb-4">Neuro Code</h3>
                    <p class="text-gray-300 mb-6">
                        Transformando negócios através da neurociência aplicada ao branding e estratégia.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
                
                <!-- Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Navegação</h4>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#ceo" class="text-gray-300 hover:text-white transition-colors duration-300">CEO</a></li>
                        <li><a href="#missao" class="text-gray-300 hover:text-white transition-colors duration-300">Missão</a></li>
                        <li><a href="#metodologia" class="text-gray-300 hover:text-white transition-colors duration-300">Metodologia</a></li>
                        <li><a href="#mentoria" class="text-gray-300 hover:text-white transition-colors duration-300">Mentoria</a></li>
                        <li><a href="#portfolio" class="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
                    </ul>
                </div>
                
                <!-- Serviços -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Serviços</h4>
                    <ul class="space-y-2">
                        <li><a href="#planos" class="text-gray-300 hover:text-white transition-colors duration-300">Consultoria</a></li>
                        <li><a href="#planos" class="text-gray-300 hover:text-white transition-colors duration-300">Mentoria</a></li>
                        <li><a href="#planos" class="text-gray-300 hover:text-white transition-colors duration-300">Enterprise</a></li>
                        <li><a href="#contato" class="text-gray-300 hover:text-white transition-colors duration-300">Contato</a></li>
                        <li><a href="#faq" class="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a></li>
                    </ul>
                </div>
                
                <!-- Contato -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contato</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>contato@neurocode.com</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>(11) 99999-9999</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <svg class="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Seg-Sex: 9h às 18h<br>Resposta em até 24h</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="border-t border-gray-700 mt-12 pt-8 text-center">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-300">
                        © 2025 Neuro Code. Todos os direitos reservados.
                    </p>
                    <div class="flex space-x-6 text-sm">
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Política de Privacidade</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Termos de Uso</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Custom JavaScript -->
    <script src="script.js"></script>
</body>
</html>