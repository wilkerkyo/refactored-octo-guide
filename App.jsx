import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Search,
  Filter,
  Heart,
  Award,
  Truck,
  Shield,
  Leaf
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import './App.css';

// Import images
import spicesImage1 from './assets/ocSxE1Bfy1JZ.jpg';
import spicesImage2 from './assets/5olqJOYXAay2.jpg';
import spicesImage3 from './assets/LOf0PWHv0Wql.png';
import spicesImage4 from './assets/A636hTAfbLLX.jpg';
import spicesImage5 from './assets/u38I23yHy2A0.webp';
import spicesImage6 from './assets/QY1PqoPh5WNH.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Açafrão Premium Kashmir',
      price: 'R$ 89,90',
      originalPrice: 'R$ 120,00',
      image: spicesImage1,
      category: 'Especiarias Exóticas',
      origin: 'Kashmir, Índia',
      rating: 4.9,
      reviews: 127,
      description: 'O ouro vermelho da culinária, colhido à mão nos campos de Kashmir.',
      badge: 'Premium'
    },
    {
      id: 2,
      name: 'Garam Masala Artesanal',
      price: 'R$ 24,90',
      originalPrice: 'R$ 32,00',
      image: spicesImage2,
      category: 'Misturas Especiais',
      origin: 'Punjab, Índia',
      rating: 4.8,
      reviews: 89,
      description: 'Mistura tradicional de 7 especiarias, torradas e moídas artesanalmente.',
      badge: 'Bestseller'
    },
    {
      id: 3,
      name: 'Pimenta Rosa Brasileira',
      price: 'R$ 18,90',
      originalPrice: 'R$ 25,00',
      image: spicesImage3,
      category: 'Especiarias Nacionais',
      origin: 'Brasil',
      rating: 4.7,
      reviews: 156,
      description: 'Sabor único e delicado, perfeita para pratos sofisticados.',
      badge: 'Nacional'
    },
    {
      id: 4,
      name: 'Za\'atar Libanês',
      price: 'R$ 22,90',
      originalPrice: 'R$ 30,00',
      image: spicesImage4,
      category: 'Misturas Especiais',
      origin: 'Líbano',
      rating: 4.8,
      reviews: 73,
      description: 'Mistura aromática com tomilho, gergelim e sumac.',
      badge: 'Tradicional'
    },
    {
      id: 5,
      name: 'Cardamomo Verde Guatemala',
      price: 'R$ 45,90',
      originalPrice: 'R$ 58,00',
      image: spicesImage5,
      category: 'Especiarias Exóticas',
      origin: 'Guatemala',
      rating: 4.9,
      reviews: 94,
      description: 'Aroma intenso e sabor complexo, ideal para doces e pratos salgados.',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Páprica Defumada Espanhola',
      price: 'R$ 28,90',
      originalPrice: 'R$ 35,00',
      image: spicesImage6,
      category: 'Pimentas e Chilis',
      origin: 'Espanha',
      rating: 4.8,
      reviews: 112,
      description: 'Sabor defumado único, essencial na culinária espanhola.',
      badge: 'Artesanal'
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: 'Qualidade Premium',
      description: 'Seleção rigorosa de fornecedores e produtos de origem certificada.'
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: 'Entrega Rápida',
      description: 'Entregamos em todo o Brasil com embalagem que preserva o frescor.'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Garantia de Frescor',
      description: 'Produtos com data de validade estendida e armazenamento adequado.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: 'Sustentabilidade',
      description: 'Comércio justo e práticas sustentáveis em toda nossa cadeia.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      comment: 'O açafrão é simplesmente incrível! Transformou completamente meus risotos. Qualidade excepcional!'
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      comment: 'Adoro a variedade de especiarias. O Garam Masala é autêntico e muito aromático.'
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      comment: 'Entrega rápida e produtos fresquíssimos. Já sou cliente fiel há mais de um ano!'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const addToCart = (productId) => {
    setCartItems(prev => prev + 1);
    // Here you would typically add the product to a cart state or context
  };

  return (
    <div className="min-h-screen bg-background">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient"
          >
            Especiarias & Temperos
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "products", "sauces", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section === 'home' ? 'Início' : 
                 section === 'products' ? 'Produtos' :
                 section === 'sauces' ? 'Molhos' :
                 section === 'about' ? 'Sobre' : 'Contato'}
              </button>
            ))}
          </div>
          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            {["home", "products", "sauces", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 capitalize text-muted-foreground hover:text-foreground"
              >
                {section === 'home' ? 'Início' : 
                 section === 'products' ? 'Produtos' :
                 section === 'sauces' ? 'Molhos' :
                 section === 'about' ? 'Sobre' : 'Contato'}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Desperte Seus Sentidos com{' '}
                <span className="text-gradient">Especiarias Autênticas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra sabores únicos do mundo todo, cuidadosamente selecionados 
                para transformar sua culinária em uma experiência extraordinária.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="hero-gradient text-white hover:opacity-90"
                  onClick={() => scrollToSection('products')}
                >
                  Explore Nossos Produtos
                </Button>
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={spicesImage1} 
                  alt="Especiarias Premium" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Por Que Escolher Nossos Temperos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprometidos com a excelência, oferecemos apenas o melhor em especiarias e temperos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nossos Produtos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma seleção cuidadosa das melhores especiarias e temperos do mundo.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar produtos..." className="pl-10" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="spice-card h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {product.origin}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{product.price}</div>
                        <div className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-yellow-400 fill-current' 
               
// (Content truncated due to size limit. Use page ranges or line ranges to read remaining content)
                        />
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="mt-2 w-full"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>