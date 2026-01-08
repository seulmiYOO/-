import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { Message } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

export const AIHost: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '안녕하세요! 😊\n집에 대해 궁금한 점이 있으신가요? 비밀번호나 사용법 등 무엇이든 물어보세요!' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      if (!chatSession.current) {
        chatSession.current = createChatSession();
      }

      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      const streamResult = await chatSession.current.sendMessageStream({ message: userMessage.text });
      
      let fullText = '';
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        
        setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg.role === 'model') {
                lastMsg.text = fullText;
            }
            return newMessages;
        });
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => {
          const newMessages = [...prev];
           if (newMessages[newMessages.length - 1].text === '') {
               newMessages.pop();
           }
           return [...newMessages, { role: 'model', text: '죄송해요, 잠시 문제가 생겼어요. 다시 시도해주시겠어요? 😥' }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 text-white rounded-full shadow-2xl shadow-gray-900/40 hover:scale-110 transition-all z-50 flex items-center justify-center group"
      >
        <Sparkles size={24} className="group-hover:animate-pulse text-pastel-300" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6 bg-black/20 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-xl w-full sm:w-[400px] h-[85vh] sm:h-[600px] sm:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 border border-white/50">
        
        {/* Header */}
        <div className="bg-white/50 p-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pastel-300 to-pastel-500 rounded-full flex items-center justify-center shadow-inner">
                <Sparkles size={18} className="text-white" />
            </div>
            <div>
                <h3 className="font-bold text-gray-800 text-sm">호스트 AI</h3>
                <p className="text-[10px] text-gray-500">무엇이든 물어보세요</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-gray-900 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'}
              `}>
                <span className="whitespace-pre-wrap">{msg.text}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white/50 border-t border-gray-100 shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="궁금한 점을 입력하세요..."
              className="w-full bg-white border border-gray-200 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-300 focus:border-transparent shadow-sm text-gray-800 placeholder:text-gray-400"
              disabled={isLoading}
            />
            <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 p-2 bg-gray-900 text-white rounded-full hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <Send size={16} />
                )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};