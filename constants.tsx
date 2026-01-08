import React from 'react';
import { Home, KeyRound, Coffee, Thermometer, Sparkles, Sofa, BedDouble, Flame, Droplets, Shirt } from 'lucide-react';
import { GuideStep } from './types';

// 👇 [핵심] 이미지를 파일처럼 불러옵니다. (경로: 현재 파일과 같은 위치의 assets 폴더)
// 만약 빨간줄이 뜬다면 경로 오타를 확인하세요!
import step2Img from './assets/step2.png';
import step3Img from './assets/step3.png';
import step4Img from './assets/step4.png';
import step5_1Img from './assets/step5-1.png';
import step5_2Img from './assets/step5-2.png';
import step6Img from './assets/step6.png';
import step7Img from './assets/step7.png';

export const GUIDE_STEPS: GuideStep[] = [
  {
    id: 'entry',
    title: '비밀번호',
    category: 'Check-In',
    description: '집에 오시느라 고생하셨어요! 입장을 위한 비밀번호입니다.',
    // Unsplash 이미지는 그대로 둡니다.
    imageUrl: 'https://images.unsplash.com/photo-1579402394414-323ea221ed67?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    themeColor: 'bg-card-orange',
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
    imageUrl: step2Img,  // 👈 따옴표 없이 변수명 사용
    themeColor: 'bg-card-pink',
    details: []
  },
  {
    id: 'welcome-tea',
    title: '웰컴 티',
    category: 'Relax',
    description: '추운 길을 걸어오느라 수고했어요 : ) 웰컴티를 준비했어요! 놓여있는 두가지의 티 중 좋아하는 맛과 향을 즐겨주세요. 🍵',
    imageUrl: step3Img,
    themeColor: 'bg-card-green',
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
    imageUrl: step4Img,
    themeColor: 'bg-card-grey',
    details: []
  },
  {
    id: 'amenities',
    title: '어메니티',
    category: 'Bathroom',
    description: '혹시 놓고 온 것이 있나요? 걱정하지 마세요! 편안한 밤을 준비하기 위한 웰컴키트를 준비했어요. 필요한 것을 사용해주세요 : ) 🫧',
    imageUrl: step5_1Img,
    themeColor: 'bg-card-blue',
    details: [],
    extraContent: {
        description: '혹시 스킨케어제품을 깜빡했다면? 표시한 크림과 세럼을 추천해요✨',
        imageUrl: step5_2Img
    }
  },
  {
    id: 'bedding',
    title: '침실 안내',
    category: 'Bedroom',
    description: '반가운 이부자리가 보이시나요? 오늘 리안님을 위해 준비된 작은 침실입니다 : ) 전기장판의 전원은 5이상을 추천해요 😴\n만약 잠옷이 필요하다면? 놓여진 잠옷을 편하게 사용해주세요👕',
    imageUrl: step6Img,
    themeColor: 'bg-card-dark',
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
    imageUrl: step7Img,
    themeColor: 'bg-card-orange',
    details: []
  },
];

// SYSTEM_INSTRUCTION 부분은 그대로 두셔도 됩니다.
export const SYSTEM_INSTRUCTION = `... (기존 내용 유지) ...`;
