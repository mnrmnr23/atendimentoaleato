import { Zap, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={32} />
              <span className="text-2xl font-bold">EletroService</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#servicos" className="hover:text-yellow-200 transition">Serviços</a>
              <a href="#sobre" className="hover:text-yellow-200 transition">Sobre</a>
              <a href="#contato" className="hover:text-yellow-200 transition">Contato</a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Manutenção de Energia Elétrica</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Serviços profissionais de instalação e manutenção elétrica com segurança e qualidade garantidas</p>
          <a href="#contato" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Solicite um Orçamento
          </a>
        </div>
      </header>

      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Instalações Elétricas</h3>
              <p className="text-gray-600 leading-relaxed">Instalação completa de sistemas elétricos residenciais, comerciais e industriais com materiais de qualidade.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Manutenção Preventiva</h3>
              <p className="text-gray-600 leading-relaxed">Inspeções regulares e manutenção preventiva para garantir o funcionamento seguro do seu sistema elétrico.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Emergências 24h</h3>
              <p className="text-gray-600 leading-relaxed">Atendimento de emergência disponível 24 horas para resolver problemas elétricos urgentes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Por Que Escolher a EletroService?</h2>
            <p className="text-lg text-gray-600 mb-12">Somos especialistas em manutenção de energia elétrica com anos de experiência no mercado</p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Profissionais Qualificados</h4>
                  <p className="text-gray-600">Equipe técnica certificada e experiente</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Segurança Garantida</h4>
                  <p className="text-gray-600">Seguimos todas as normas técnicas vigentes</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Materiais de Qualidade</h4>
                  <p className="text-gray-600">Utilizamos apenas materiais homologados</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Garantia de Serviço</h4>
                  <p className="text-gray-600">Todos os serviços com garantia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-orange-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 98765-4321</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contato@eletroservice.com</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Endereço</h3>
              <p className="text-gray-600">São Paulo - SP</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={24} />
            <span className="text-xl font-bold">EletroService</span>
          </div>
          <p className="text-gray-400">&copy; 2025 EletroService. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
