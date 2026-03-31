import { api } from "@shared/api/instance"

export async function getViewer() {
  const _serverRenderStart = Date.now()
  
  const response = await api.get('timetable/lessons/viewer', {
    params: {
      end_date: '2026-03-29',
      start_date:'2026-03-23',
      teacher: 6130
    }
  })
  
  return {...response.data, _serverRenderStart}    
}