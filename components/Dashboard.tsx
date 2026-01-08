import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GUIDE_STEPS } from '../constants';
import { Layout } from './Layout';
import { ArrowRight, Check, Sparkles, X } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

export const Dashboard: React.FC = () => {
  const { isComplete } = useProgress();
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <Layout showHomeButton={false}>
      <div className="pb-32 pt-2">
        {/* Intro Section */}
        <section className="space-y-2 mb-6 text-gray-900">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
            Welcome Guide
          </div>
          <h2 className="text-3xl font-bold leading-tight drop-shadow-sm text-gray-900">
            리안님의 편안한<br />휴식을 도와줄게요
          </h2>
        </section>

        {/* Solid Cards Grid */}
        <section className="grid grid-cols-2 gap-4">
            {GUIDE_STEPS.map((step, index) => (
                <Link 
                    key={step.id} 
                    to={`/guide/${step.id}`}
                    className={`
                        ${step.themeColor} 
                        group relative flex flex-col p-5 rounded-3xl
                        shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                        active:scale-95 transition-all duration-200 
                        ${index === 0 ? 'col-span-2 aspect-[2.5/1]' : 'aspect-square'}
                    `}
                >
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                             <span className="text-[10px] font-bold text-white/60 bg-black/10 px-2 py-1 rounded-full backdrop-blur-sm">
                                STEP {String(index + 1).padStart(2, '0')}
                             </span>
                             {index === 0 && (
                                <div className="bg-white/20 p-2 rounded-full text-white">
                                    <ArrowRight size={16} />
                                </div>
                             )}
                        </div>

                        <div>
                            <h3 className={`font-bold text-white leading-tight ${index === 0 ? 'text-2xl mt-2' : 'text-lg'}`}>
                                {step.title}
                            </h3>
                            {index === 0 && (
                                <p className="text-white/80 text-sm mt-1 font-medium">{step.description.slice(0, 20)}...</p>
                            )}
                        </div>
                    </div>

                    {/* Minimal Icon/Illustration - Full Opacity (No Filter) */}
                    {/* Updated to use same size (w-24 h-24) for all cards */}
                    <div className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-100 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                         <img 
                            src={step.imageUrl} 
                            alt="" 
                            className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-inner"
                         />
                    </div>
                </Link>
            ))}
        </section>

        {/* Completion Button */}
        {isComplete && (
            <div className="fixed bottom-8 left-0 right-0 px-6 z-40 animate-pop">
                <button 
                    onClick={() => setShowCelebration(true)}
                    className="w-full bg-white text-brand font-bold py-4 rounded-full shadow-xl shadow-brand/20 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                    <Sparkles className="w-5 h-5 text-brand" />
                    리안님의 웰컴가이드가 완료되었어요
                </button>
            </div>
        )}

        {/* Celebration Overlay */}
        {showCelebration && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
                <div className="relative bg-white rounded-[2.5rem] p-8 w-full max-w-sm text-center shadow-2xl overflow-hidden">
                    {/* Confetti Elements */}
                    <div className="absolute top-0 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-confetti" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-confetti" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-0 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-confetti" style={{animationDelay: '1s'}}></div>
                    
                    <button 
                        onClick={() => setShowCelebration(false)}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-6 rounded-2xl overflow-hidden aspect-square mx-auto shadow-lg relative">
                         <img 
                            src="https://images.unsplash.com/photo-1623638309606-e587fda3fb49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Celebration"
                            className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                            <span className="text-4xl">🎉</span>
                         </div>
                    </div>

                    <h3 className="text-2xl font-bold text-brand mb-2">환영합니다!</h3>
                    <p className="text-gray-600 mb-6">
                        모든 안내를 확인하셨군요.<br/>
                        편안하고 행복한 시간 보내요! 곧 만나요 리안님💖
                    </p>
                    <button 
                        onClick={() => setShowCelebration(false)}
                        className="bg-brand text-white w-full py-3 rounded-full font-bold shadow-lg hover:bg-brand/90 transition-colors"
                    >
                        궁금한 점은 언제든지 연락해요
                    </button>
                </div>
            </div>
        )}
      </div>
    </Layout>
  );
};