// 등급 5단계. A가 가장 잘 입은 코디이고 E는 없다 (§3.1)
// 점수(A4~F0)는 서버가 관리하므로 여기에 두지 않는다
export const GRADES = ['A', 'B', 'C', 'D', 'F'] as const

export type Grade = (typeof GRADES)[number]
