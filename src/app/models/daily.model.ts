export interface Daily {
  id: number,
  note: string,
  emotion: string,
  color: string,
  timestamp: number
}

export interface NewDaily extends Omit<Daily, 'id' | 'timestamp'> { }

