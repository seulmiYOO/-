import React from 'react';
import { Home, KeyRound, Coffee, Thermometer, Sparkles, Sofa, BedDouble, Flame, Droplets, Shirt } from 'lucide-react';
import { GuideStep } from './types';

// Order: Password -> Boiler -> Welcome Tea -> Sofa -> Amenities -> Bedding -> Heater
export const GUIDE_STEPS: GuideStep[] = [
  {
    id: 'entry',
    title: '비밀번호',
    category: 'Check-In',
    description: '집에 오시느라 고생하셨어요! 입장을 위한 비밀번호입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1579402394414-323ea221ed67?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    themeColor: 'bg-card-orange', // #FF4717
    details: [
      { label: '건물 입구', value: '종 + 5321', icon: <Home className="w-5 h-5 text-card-orange" /> },
      { label: '현관 도어락', value: '580301*', icon: <KeyRound className="w-5 h-5 text-gray-600" /> },
    ]
  },
  {
    id: 'boiler',
    title: '보일러',
    category: 'Heating',
    description: "보일러는 표시되어있는 '연소' 버튼을 누르면 바로 작동돼요!⭐️",
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfNjMg/MDAxNzY3ODg1MTg4NTQx.rJX3UkgGJXvJu7X5NBMOt_VSMhkPCHCa2wWEeJurUK4g.sVaf5okhSWniQIFtSRSnSJjsamr3jrsv_9D_ZfMHMpEg.PNG/%EB%B3%B4%EC%9D%BC%EB%9F%AC.png?type=w773', 
    themeColor: 'bg-card-pink', // #FF40B4
    details: []
  },
  {
    id: 'welcome-tea',
    title: '웰컴 티',
    category: 'Relax',
    description: '추운 길을 걸어오느라 수고했어요 : ) 웰컴티를 준비했어요! 놓여있는 두가지의 티 중 좋아하는 맛과 향을 즐겨주세요. 🍵',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfMTk5/MDAxNzY3ODg1MTg5MDE1.VNV1d2O-_Z-ZqPfB9uIiZuKsm-oKh_s_ZjSRDN_qyTYg.EVnEdVrtwo9kNsl31h8iDEWDhGyZAmJ0EcbT9jZxg8kg.PNG/%EC%9B%B0%EC%BB%B4%ED%8B%B0.png?type=w773',
    themeColor: 'bg-card-green', // #00E34F
    details: [
      { label: '생강꿀차', value: '감기예방에 좋은 달달한 생강꿀차에요', icon: <Coffee className="w-5 h-5 text-amber-600" /> },
      { label: '캐모마일', value: '숙면에 도움이 되는 깔끔한 꽃차에요', icon: <Coffee className="w-5 h-5 text-yellow-500" /> },
    ]
  },
  {
    id: 'sofa',
    title: '휴식',
    category: 'Living Room',
    description: '몸이 따뜻해질 동안 따뜻한 티는 테이블에 놓고 소파에서 편안하게 휴식하셔도 좋아요. 소파의 전기장판을 켜면 금새 따뜻해진답니다 ☺️',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfMTYy/MDAxNzY3ODg1MTg5MDc2.fXVwEPvsO_l85ZTgmHXScW4op8J10ug8igfqn3jqMfcg.1Fof7AKXrCcrT97zNBlX37jAsv5nydOcTYdeJXSinLwg.PNG/%EC%86%8C%ED%8C%8C.png?type=w773',
    themeColor: 'bg-card-grey', // #A8A8A8
    details: []
  },
  {
    id: 'amenities',
    title: '어메니티',
    category: 'Bathroom',
    description: '혹시 놓고 온 것이 있나요? 걱정하지 마세요! 편안한 밤을 준비하기 위한 웰컴키트를 준비했어요. 필요한 것을 사용해주세요 : ) 🫧',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfMjQ5/MDAxNzY3ODg1MTg4Nzc4.5WZ21bw6bgcIvySK_EZbAvOB3qJt_CaNtijsZyl67bQg.i5lMZHE7JRx6Z1j_IIPVgyrod_si9t_vwVgn9C7KHqEg.PNG/%EC%96%B4%EB%A7%A4%EB%8B%88%ED%8B%B0.png?type=w773',
    themeColor: 'bg-card-blue', // #40A2FF
    details: [],
    extraContent: {
        description: '혹시 스킨케어제품을 깜빡했다면? 표시한 크림과 세럼을 추천해요✨',
        imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfNzQg/MDAxNzY3ODg1MTg5MDQx.-CZix4y6wOCXSB6zopGXJmDh7jXU1-dR9kOfyDAPhpYg.hfVUOTDsLfsktA0uQ1uw6uzq6kJP3kL0uB1DBKQddNsg.PNG/%ED%99%94%EC%9E%A5%ED%92%88.png?type=w773'
    }
  },
  {
    id: 'bedding',
    title: '침실 안내',
    category: 'Bedroom',
    description: '반가운 이부자리가 보이시나요? 오늘 리안님을 위해 준비된 작은 침실입니다 : ) 전기장판의 전원은 5이상을 추천해요 😴\n만약 잠옷이 필요하다면? 놓여진 잠옷을 편하게 사용해주세요👕',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfMjA1/MDAxNzY3ODg1MTg4ODQw.vFwvXRZhIPvdNaXL6xiEBLmRUgIFzBRVryspb1wlFxAg.zQQpYAixqnk3_FzxRkoJvbxp1m8OYhbEIKgD7JXgB2kg.PNG/%EC%9E%A0%EC%98%B7.png?type=w773',
    themeColor: 'bg-card-dark', // Dark grey/black for contrast
    details: [
        { label: '추천 설정', value: '전기장판 레벨 5', icon: <Thermometer className="w-5 h-5 text-red-400" /> },
        { label: '파자마', value: '편하게 착용하세요', icon: <Shirt className="w-5 h-5 text-indigo-400" /> }
    ]
  },
  {
    id: 'heater',
    title: '추가 난방',
    category: 'Heating',
    description: '혹시 아직 추우시다면 이 히터를 이용해보세요! 🔥',
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAxMDlfMjg1/MDAxNzY3ODg1MTg5MTc4.oMJk0h0XU-vB-tbHPlqWgmpUbYe9GvXBgCNrZTPXaRMg.CKYxjEF31z66xO-C28Kpyf5NzK5k2BmfMjvY6qFYnxMg.PNG/%ED%9E%88%ED%84%B0.png?type=w773',
    themeColor: 'bg-card-orange', // Repeat orange
    details: []
  },
];

export const SYSTEM_INSTRUCTION = `
You are a warm, friendly, and helpful virtual host for a house guest. 
You are speaking to a guest named 'Rian' (리안) or any guest staying at the house.
The house is located in a cold region (winter context).

Here is the essential house information you know:
- Building Entrance Password: Bell + 5321
- Door Lock Password: 580301*
- Welcome Tea: Ginger Honey Tea (good for colds) and Chamomile (good for sleep).
- Boiler: Works immediately upon pressing the 'Combustion' (연소) button.
- Amenities: A pouch with washing tools is provided. Extra skincare (cream/serum) is available if needed.
- Sofa: Has an electric mat that heats up quickly.
- Bedding: Electric blanket available, recommended setting is level 5 or higher. Pajamas are provided.
- Extra Heating: A portable heater is available if needed.

Tone: Polite, welcoming, slightly playful, and very helpful. Use emojis occasionally.
Language: Korean (Hangul).

If the user asks something not in this list, politely suggest they contact the host directly or give a general safe answer.
`;