export type VoiceState = 'idle' | 'listening' | 'processing' | 'response'
export type CrowdChoice = 'none' | 'current' | 'calmer' | 'guide'
export type LostAction =
  | 'none'
  | 'guide'
  | 'location-consent'
  | 'location'
  | 'meeting'
  | 'sound'
  | 'qr'
export type AssistType =
  | 'medical'
  | 'mobility'
  | 'translation'
  | 'document'
  | 'item'
  | 'leader'
export type AssistStage = 'choose' | 'confirm' | 'sent'

export const SCREEN_COUNT = 7

export interface DemoState {
  screen: number
  offline: boolean
  voice: VoiceState
  heatGuided: boolean
  routeConfirmed: boolean
  /** Incremented to replay the spoken instruction on the route screen. */
  routeRepeatKey: number
  crowdChoice: CrowdChoice
  lostAction: LostAction
  assistSelected: AssistType | null
  assistStage: AssistStage
}

export const initialDemoState: DemoState = {
  screen: 0,
  offline: false,
  voice: 'idle',
  heatGuided: false,
  routeConfirmed: false,
  routeRepeatKey: 0,
  crowdChoice: 'none',
  lostAction: 'none',
  assistSelected: null,
  assistStage: 'choose',
}

export type DemoAction =
  | { type: 'goto'; screen: number }
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'setOffline'; offline: boolean }
  | { type: 'voice'; state: VoiceState }
  | { type: 'heatGuide' }
  | { type: 'routeConfirm' }
  | { type: 'routeRepeat' }
  | { type: 'crowdChoose'; choice: CrowdChoice }
  | { type: 'lost'; action: LostAction }
  | { type: 'assistSelect'; assist: AssistType }
  | { type: 'assistConfirm' }
  | { type: 'assistBack' }
  | { type: 'assistReset' }

const clamp = (n: number) => Math.min(SCREEN_COUNT - 1, Math.max(0, n))

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'goto':
      return { ...state, screen: clamp(action.screen) }
    case 'next':
      return { ...state, screen: (state.screen + 1) % SCREEN_COUNT }
    case 'prev':
      return { ...state, screen: (state.screen - 1 + SCREEN_COUNT) % SCREEN_COUNT }
    case 'setOffline':
      return { ...state, offline: action.offline }
    case 'voice':
      return { ...state, voice: action.state }
    case 'heatGuide':
      return { ...state, heatGuided: true }
    case 'routeConfirm':
      return { ...state, routeConfirmed: true }
    case 'routeRepeat':
      return { ...state, routeRepeatKey: state.routeRepeatKey + 1 }
    case 'crowdChoose':
      return { ...state, crowdChoice: action.choice }
    case 'lost':
      return { ...state, lostAction: action.action }
    case 'assistSelect':
      return { ...state, assistSelected: action.assist, assistStage: 'confirm' }
    case 'assistConfirm':
      return { ...state, assistStage: 'sent' }
    case 'assistBack':
      return { ...state, assistSelected: null, assistStage: 'choose' }
    case 'assistReset':
      return { ...state, assistSelected: null, assistStage: 'choose' }
  }
}
