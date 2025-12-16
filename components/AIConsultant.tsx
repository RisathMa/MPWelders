import React, { useState } from 'react';
import { Bot, Sparkles, Send, Loader2, AlertCircle } from 'lucide-react';
import { analyzeProjectRequest } from '../services/geminiService';
import { AIAnalysisResponse } from '../types';
import { CONTACT_INFO } from '../constants';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState<AIAnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeProjectRequest(input);
      if (result) {
        setAnalysis(result);
      } else {
        setError("Could not analyze request. Please check your internet connection or API key.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-20 bg-industrial-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-safety-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Intro */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-700 rounded-full text-safety-500 text-sm font-bold mb-4">
              <Sparkles size={16} />
              <span>Free Project Assistant</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Plan Your Project With AI
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Not sure how to explain what you need? Describe your idea here. Our system will help you list the materials and details you need before you call us.
            </p>
            <div className="bg-industrial-900/50 p-6 rounded-lg border border-industrial-700">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                <Bot size={24} className="text-safety-500"/> Simple Steps:
              </h4>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-base">
                <li>Tell us what you want to build or fix</li>
                <li>See what materials might be needed</li>
                <li>Get ready to talk to our welders</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interaction */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-industrial-900 rounded-xl shadow-2xl border border-industrial-700 overflow-hidden">
              <div className="p-6 border-b border-industrial-800 flex justify-between items-center bg-industrial-900">
                <span className="font-bold text-white flex items-center gap-2 text-lg">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  MP Welders Assistant
                </span>
              </div>

              <div className="p-6">
                {!analysis ? (
                  <div className="space-y-6">
                    <p className="text-gray-300 text-base">Type your requirement here (e.g., "I need a sliding gate for my house front"):</p>
                    <form onSubmit={handleSubmit} className="relative">
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Describe your project here..."
                        className="w-full bg-industrial-800 text-white rounded-lg p-4 h-40 focus:ring-2 focus:ring-safety-500 focus:outline-none border border-industrial-700 resize-none text-lg placeholder-gray-500"
                      />
                      <button 
                        type="submit" 
                        disabled={loading || !input.trim()}
                        className="absolute bottom-4 right-4 bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold p-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      >
                        {loading ? <Loader2 className="animate-spin" size={28}/> : <Send size={28} />}
                      </button>
                    </form>
                    {error && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded">
                        <AlertCircle size={20} />
                        <span className="text-base">{error}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6 animate-fade-in">
                     <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white">Project Summary</h3>
                        <button 
                          onClick={() => setAnalysis(null)} 
                          className="text-gray-400 hover:text-white text-sm underline p-2"
                        >
                          Start Over
                        </button>
                     </div>

                     <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-industrial-800 p-4 rounded border border-industrial-700">
                           <span className="text-xs text-gray-400 uppercase tracking-wider">Work Type</span>
                           <div className="mt-1 font-bold text-white text-lg">
                              {analysis.summary}
                           </div>
                        </div>
                        <div className="bg-industrial-800 p-4 rounded border border-industrial-700">
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Complexity</span>
                          <div className={`mt-1 font-bold text-lg ${
                            analysis.estimatedComplexity === 'High' ? 'text-red-400' : 
                            analysis.estimatedComplexity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {analysis.estimatedComplexity}
                          </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <div>
                          <h4 className="text-safety-500 font-bold mb-2 text-sm uppercase">Recommended Materials</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.suggestedMaterials.map((mat, i) => (
                              <span key={i} className="px-3 py-2 bg-industrial-700 text-gray-100 rounded text-base border border-industrial-600">
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                           <h4 className="text-safety-500 font-bold mb-2 text-sm uppercase">Details To Tell Us</h4>
                           <ul className="space-y-2">
                             {analysis.recommendedQuestions.map((q, i) => (
                               <li key={i} className="flex gap-3 text-gray-200 bg-industrial-800/50 p-3 rounded">
                                 <span className="text-safety-500 font-bold">{i+1}.</span>
                                 {q}
                               </li>
                             ))}
                           </ul>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-industrial-800">
                        <p className="text-center text-gray-300 mb-6 text-base">Send us these details to get a quick price!</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                           <a href={`tel:${CONTACT_INFO.phone}`} className="bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition-colors text-lg shadow-lg">
                              <Phone size={20} /> Call Now
                           </a>
                           <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=I need a quote for: ${analysis.summary}. ${analysis.suggestedMaterials.join(', ')}`} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded flex justify-center items-center gap-2 transition-colors text-lg shadow-lg">
                              <MessageCircle size={20} /> WhatsApp Quote
                           </a>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Phone/Message Icon for usage inside component
const Phone = ({size, className}: {size?:number, className?:string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MessageCircle = ({size, className}: {size?:number, className?:string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

export default AIConsultant;