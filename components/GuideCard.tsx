import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GUIDE_STEPS } from '../constants';
import { Layout } from './Layout';
import { ChevronLeft, ChevronRight, Check, Square, CheckSquare, Sparkles } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

export const GuideCard: React.FC = () => {
  const { stepId } = useParams();
  const { markAsVisited } = useProgress();
  
  const currentIndex = GUIDE_STEPS.findIndex(s => s.id === stepId);
  const step = GUIDE_STEPS[currentIndex];

  const prevStep = currentIndex > 0 ? GUIDE_STEPS[currentIndex - 1] : null;
  const nextStep = currentIndex < GUIDE_STEPS.length - 1 ? GUIDE_STEPS[currentIndex + 1] : null;

  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);

  // Reset checked items when entering a new step
  useEffect(() => {
    setCheckedItems([]);
  }, [stepId]);

  useEffect(() => {
    if (step) {
      markAsVisited(step.id);
    }
  }, [step, markAsVisited]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  if (!step) {
    return (
        <Layout>
            <div className="flex-1 flex items-center justify-center flex-col p-8 text-center text-gray-800">
                <h2 className="text-xl font-bold mb-4">페이지를 찾을 수 없어요</h2>
                <Link to="/" className="underline text-brand">홈으로 돌아가기</Link>
            </div>
        </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col h-full pb-6">
        {/* Floating Card Container */}
        <div className="flex-1 flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden relative animate-fade-in mt-2 mb-4 border border-gray-100">
            
            {/* Image Header - Removed color filter as requested */}
            <div className="h-64 relative overflow-hidden group bg-gray-50">
                <img 
                    src={step.imageUrl} 
                    alt={step.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm uppercase tracking-wide z-20">
                    STEP {String(currentIndex + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-500 uppercase mb-2 inline-block`}>
                        {step.category}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-900">{step.title}</h1>
                </div>
                
                <div className="prose prose-sm">
                    <p className="text-base leading-7 text-gray-800 font-medium whitespace-pre-line">
                        {step.description}
                    </p>
                </div>

                {/* Details / Checklist */}
                {step.details && step.details.length > 0 && (
                    <div className="mt-8 space-y-3">
                        {step.details.map((detail, idx) => {
                            const isChecked = checkedItems.includes(idx);
                            const IconElement = detail.icon as React.ReactElement<{ className?: string }>;
                            
                            return (
                                <button 
                                    key={idx} 
                                    onClick={() => toggleCheck(idx)}
                                    className={`w-full text-left rounded-2xl p-4 flex items-center justify-between group transition-all border-2
                                        ${isChecked ? 'bg-brand/5 border-brand' : 'bg-gray-50 border-transparent hover:bg-white hover:shadow-md'}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl transition-colors ${isChecked ? 'bg-brand text-white' : 'bg-white text-gray-400 shadow-sm'}`}>
                                            {/* Clone element to override default color with white when checked */}
                                            {React.isValidElement(IconElement) && React.cloneElement(IconElement, {
                                                className: isChecked 
                                                    ? 'w-5 h-5 text-white' 
                                                    : IconElement.props.className
                                            })}
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{detail.label}</div>
                                            <div className={`font-bold text-lg transition-colors ${isChecked ? 'text-brand' : 'text-gray-900'}`}>
                                                {detail.value}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`text-2xl transition-all check-anim ${isChecked ? 'text-brand scale-110' : 'text-gray-300'}`}>
                                        {isChecked ? <CheckSquare /> : <Square />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Extra Content Section (e.g. for Cosmetics) */}
                {step.extraContent && (
                   <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="bg-orange-50/50 rounded-2xl p-5 border border-orange-100">
                             <div className="flex items-start gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-brand shrink-0 mt-1" />
                                <p className="font-bold text-gray-800 leading-relaxed whitespace-pre-line">
                                    {step.extraContent.description}
                                </p>
                             </div>
                             <div className="rounded-xl overflow-hidden shadow-sm bg-white">
                                <img 
                                    src={step.extraContent.imageUrl} 
                                    className="w-full h-auto object-cover" 
                                    alt="Extra Info" 
                                />
                             </div>
                        </div>
                   </div>
                )}
            </div>

            {/* Navigation Controls */}
            <div className="p-6 pt-0 flex items-center justify-between">
                {prevStep ? (
                    <Link 
                        to={`/guide/${prevStep.id}`} 
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors active:scale-95"
                    >
                        <ChevronLeft size={22} />
                    </Link>
                ) : (
                    <div className="w-12 h-12" /> 
                )}

                {nextStep ? (
                    <Link 
                        to={`/guide/${nextStep.id}`} 
                        className="flex-1 ml-4 bg-brand text-white h-12 rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand/90 transition-colors font-bold active:scale-95"
                    >
                        다음 단계
                        <ChevronRight size={18} className="ml-1" />
                    </Link>
                ) : (
                     <Link 
                        to="/" 
                        className="flex-1 ml-4 bg-gray-900 text-white h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors font-bold active:scale-95"
                    >
                        확인 완료
                        <Check size={18} className="ml-2" />
                    </Link>
                )}
            </div>
        </div>
      </div>
    </Layout>
  );
};