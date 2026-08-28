import { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/graph.css'

const GREENS = ['#0e4429', '#006d32', '#26a641', '#39d353']
const MONTH_NAMES = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
const DAY_MS = 24 * 60 * 60 * 1000

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function fmtDate(d) {
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()].toLowerCase()} ${d.getFullYear()}`
}

function levelLabel(level) {
  if (level === 3) return 'много активности'
  if (level === 2) return 'хорошая активность'
  if (level === 1) return 'немного активности'
  return 'слабая активность'
}

// Builds the calendar grid: July 1 of last year -> today, always up to date
function buildWeeks() {
  const today = new Date()
  const rangeStart = new Date(today.getFullYear() - 1, 6, 1) // July 1, prior year
  const rangeEnd = today

  const gridStart = new Date(rangeStart)
  gridStart.setDate(gridStart.getDate() - gridStart.getDay())
  const gridEnd = new Date(rangeEnd)
  gridEnd.setDate(gridEnd.getDate() + (6 - gridEnd.getDay()))

  const totalDays = Math.round((gridEnd - gridStart) / DAY_MS) + 1
  const totalWeeks = totalDays / 7

  const weeks = []
  let cursor = new Date(gridStart)
  let lastMonth = -1

  for (let w = 0; w < totalWeeks; w++) {
    const days = []
    let monthLabel = ''

    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(cursor)
      const inRange = cellDate >= rangeStart && cellDate <= rangeEnd
      const level = inRange ? Math.floor(Math.random() * GREENS.length) : null
      const isToday = inRange && sameDay(cellDate, today)

      if (inRange && cellDate.getMonth() !== lastMonth && cellDate.getDate() <= 7) {
        monthLabel = MONTH_NAMES[cellDate.getMonth()]
        lastMonth = cellDate.getMonth()
      }

      days.push({ date: cellDate, inRange, level, isToday })
      cursor = new Date(cursor.getTime() + DAY_MS)
    }

    weeks.push({ days, monthLabel })
  }

  return weeks
}

export default function ContributionGraph() {
  // recomputed each mount, so the range always ends "today"
  const weeks = useMemo(() => buildWeeks(), [])
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: '' })
  const wrapRef = useRef(null)

  useEffect(() => {
    // scroll to today's column on mount
    if (wrapRef.current) {
      wrapRef.current.scrollLeft = wrapRef.current.scrollWidth
    }
  }, [])

  const handleEnter = (day, e) => {
    if (!day.inRange) return
    const dateLabel = fmtDate(day.date) + (day.isToday ? ' (сегодня)' : '')
    setTooltip({ show: true, x: e.clientX, y: e.clientY, text: `${dateLabel} — ${levelLabel(day.level)}` })
  }
  const handleMove = (e) => {
    setTooltip((t) => (t.show ? { ...t, x: e.clientX, y: e.clientY } : t))
  }
  const handleLeave = () => setTooltip((t) => ({ ...t, show: false }))

  return (
    <>
      <div className="graph-sub">Июль {new Date().getFullYear() - 1} — сегодня</div>
      <div className="graph-wrap" ref={wrapRef}>
        <div className="graph">
          {weeks.map((week, wi) => (
            <div className="week-col" key={wi}>
              {week.days.map((day, di) => (
                <i
                  key={di}
                  className={day.isToday ? 'today' : ''}
                  style={{ background: day.inRange ? GREENS[day.level] : 'transparent' }}
                  onMouseEnter={(e) => handleEnter(day, e)}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="graph-labels">
          {weeks.map((week, wi) => (
            <span key={wi}>{week.monthLabel}</span>
          ))}
        </div>
      </div>

      <div
        className={`tooltip ${tooltip.show ? 'show' : ''}`}
        style={{ left: tooltip.x, top: tooltip.y }}
      >
        {tooltip.text}
      </div>

      <div className="graph-legend">
        <span>Меньше</span>
        {GREENS.map((color) => (
          <i key={color} style={{ background: color }} />
        ))}
        <span>Больше</span>
      </div>
    </>
  )
}
