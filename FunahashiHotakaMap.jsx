import React, { useState } from 'react';

const locations = [
  {
    id: 1,
    name: '瀬戸市',
    nameEn: 'Seto, Aichi',
    years: '1996-2015',
    age: '0-18歳',
    x: 255,
    y: 265,
    description: '出生地。4人兄弟の長男として誕生。小1から高3まで野球を12年間続け、享栄高校では野球部主将を務める',
    color: '#2563eb'
  },
  {
    id: 2,
    name: '横浜',
    nameEn: 'Yokohama',
    years: '2015-2017',
    age: '18-20歳',
    x: 295,
    y: 255,
    description: '関東学院大学進学のため一人暮らし開始。1年半で中退を決意。バイクで53日間の日本一周を敢行',
    color: '#3b82f6'
  },
  {
    id: 3,
    name: 'オーストラリア',
    nameEn: 'Australia',
    years: '2017',
    age: '20-21歳',
    x: 340,
    y: 370,
    description: '海外での挑戦。新しい価値観と出会い、複数の起業を試みる',
    color: '#60a5fa'
  },
  {
    id: 4,
    name: '東京',
    nameEn: 'Tokyo',
    years: '2018-2020',
    age: '22-24歳',
    x: 300,
    y: 245,
    description: '芸能活動期。相方とシェアハウスで生活しながらM-1優勝を目指す。TikTokで763万再生・23万いいねを獲得',
    color: '#0ea5e9'
  },
  {
    id: 5,
    name: '京都',
    nameEn: 'Kyoto',
    years: '2020-2024',
    age: '24-28歳',
    x: 240,
    y: 270,
    description: 'コロナ禍を機に移住。英語学習1095日連続、Google Map公式認定(上位1%)、投資で1万円→4000万円超。全都道府県訪問達成',
    color: '#06b6d4'
  },
  {
    id: 6,
    name: '東京',
    nameEn: 'Tokyo',
    years: '2025-現在',
    age: '28歳〜',
    x: 305,
    y: 240,
    description: '2025年2月「株式会社Universal Pine」設立。AIネックレスデバイス開発に挑戦。300万円投資+7200万円公庫融資を確保',
    color: '#0284c7'
  }
];

const journeyPaths = [
  { from: 1, to: 2, label: '2015' },
  { from: 2, to: 3, label: '2017' },
  { from: 3, to: 4, label: '2018' },
  { from: 4, to: 5, label: '2020' },
  { from: 5, to: 6, label: '2025' }
];

export default function FunahashiHotakaMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const getLocation = (id) => locations.find(l => l.id === id);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 装飾的な背景パターン */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.8,
        pointerEvents: 'none'
      }} />

      {/* グロー効果 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '30%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* タイトル */}
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#f8fafc',
          margin: 0,
          letterSpacing: '6px',
          textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
          fontWeight: '700'
        }}>
          船橋穂天の足跡
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          margin: '8px 0 0 0',
          letterSpacing: '2px'
        }}>
          Funahashi Hotaka (1996.9.8 - )
        </p>
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          margin: '15px auto'
        }} />
        <p style={{
          fontSize: '13px',
          color: '#64748b',
          margin: '5px 0 0 0'
        }}>
          愛知から世界へ — 挑戦と成長の軌跡
        </p>
      </div>

      {/* 地図エリア */}
      <div style={{
        display: 'flex',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* 地図 */}
        <div style={{
          flex: '1',
          background: 'linear-gradient(145deg, #1e293b, #0f172a)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          position: 'relative'
        }}>
          {/* 枠線装飾 */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            pointerEvents: 'none'
          }} />

          <svg viewBox="0 0 400 420" style={{ width: '100%', height: 'auto' }}>
            {/* 海 */}
            <rect x="0" y="0" width="400" height="420" fill="#0c1929" />

            {/* 日本地図（簡略化） */}
            {/* 北海道 */}
            <path
              d="M 300 80 Q 320 70, 340 75 Q 360 80, 365 100 Q 368 115, 355 125
                 Q 340 135, 320 130 Q 305 125, 295 110 Q 290 95, 300 80 Z"
              fill="#1e3a5f"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* 本州 */}
            <path
              d="M 180 180 Q 200 170, 230 175 Q 260 172, 290 180
                 Q 315 185, 330 200 Q 340 215, 335 235
                 Q 325 250, 310 258 Q 295 265, 280 268
                 Q 260 275, 240 280 Q 220 285, 200 282
                 Q 180 278, 165 265 Q 155 250, 160 230
                 Q 165 210, 180 195 Q 185 185, 180 180 Z"
              fill="#1e3a5f"
              stroke="#3b82f6"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <text x="250" y="225" fontSize="11" fill="#64748b" opacity="0.5">JAPAN</text>

            {/* 四国 */}
            <path
              d="M 200 290 Q 220 285, 240 290 Q 255 295, 250 310
                 Q 240 320, 220 318 Q 200 315, 200 300 Q 198 292, 200 290 Z"
              fill="#1e3a5f"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* 九州 */}
            <path
              d="M 160 290 Q 175 285, 185 295 Q 192 310, 185 330
                 Q 178 345, 165 345 Q 150 340, 148 320
                 Q 145 305, 160 290 Z"
              fill="#1e3a5f"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* オーストラリア（小さく右下に） */}
            <path
              d="M 310 350 Q 340 340, 370 350 Q 390 365, 385 385
                 Q 375 400, 350 402 Q 325 400, 315 385
                 Q 305 370, 310 350 Z"
              fill="#1e3a5f"
              stroke="#60a5fa"
              strokeWidth="1"
              opacity="0.5"
            />
            <text x="350" y="375" fontSize="8" fill="#64748b" opacity="0.5">AUSTRALIA</text>

            {/* 移動経路 */}
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#3b82f6" opacity="0.8" />
              </marker>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {journeyPaths.map((path, index) => {
              const from = getLocation(path.from);
              const to = getLocation(path.to);
              const midX = (from.x + to.x) / 2;
              const midY = (from.y + to.y) / 2 - 20;

              return (
                <g key={index}>
                  <path
                    d={`M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                    opacity="0.6"
                    markerEnd="url(#arrowhead)"
                    filter="url(#glow)"
                  />
                </g>
              );
            })}

            {/* 場所のマーカー */}
            {locations.map((location) => (
              <g
                key={location.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
              >
                {/* マーカーのグロー */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={hoveredLocation === location.id || selectedLocation === location.id ? 20 : 14}
                  fill={location.color}
                  opacity="0.2"
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* メインマーカー */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={hoveredLocation === location.id || selectedLocation === location.id ? 12 : 8}
                  fill={location.color}
                  stroke="#f8fafc"
                  strokeWidth="2"
                  style={{ transition: 'all 0.3s ease' }}
                  filter="url(#glow)"
                />
                {/* 番号 */}
                <text
                  x={location.x}
                  y={location.y + 4}
                  fontSize="10"
                  fill="#fff"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {location.id}
                </text>
                {/* 地名ラベル */}
                <text
                  x={location.x}
                  y={location.y - 18}
                  fontSize="11"
                  fill="#e2e8f0"
                  textAnchor="middle"
                  fontWeight="bold"
                  style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                >
                  {location.name}
                </text>
              </g>
            ))}

            {/* コンパス */}
            <g transform="translate(50, 60)">
              <circle cx="0" cy="0" r="25" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <path d="M 0 -20 L 4 0 L 0 -8 L -4 0 Z" fill="#3b82f6" />
              <path d="M 0 20 L 4 0 L 0 8 L -4 0 Z" fill="#1e40af" />
              <text x="0" y="-28" fontSize="10" fill="#3b82f6" textAnchor="middle" fontWeight="bold">N</text>
            </g>
          </svg>
        </div>

        {/* 年表サイドバー */}
        <div style={{
          width: '320px',
          background: 'linear-gradient(145deg, #1e293b, #0f172a)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <h2 style={{
            fontSize: '16px',
            color: '#f8fafc',
            margin: '0 0 15px 0',
            textAlign: 'center',
            borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
            paddingBottom: '10px',
            letterSpacing: '2px'
          }}>
            TIMELINE
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{
                  padding: '12px',
                  background: selectedLocation === location.id
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1))'
                    : hoveredLocation === location.id
                      ? 'rgba(59, 130, 246, 0.1)'
                      : 'transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderLeft: `3px solid ${location.color}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${location.color}, ${location.color}88)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    boxShadow: `0 0 10px ${location.color}40`
                  }}>
                    {location.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#f8fafc'
                    }}>
                      {location.name}
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 'normal',
                        marginLeft: '6px',
                        color: '#94a3b8'
                      }}>
                        {location.nameEn}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#3b82f6',
                      fontWeight: 'bold'
                    }}>
                      {location.years}
                      <span style={{
                        marginLeft: '8px',
                        color: '#64748b',
                        fontWeight: 'normal'
                      }}>
                        ({location.age})
                      </span>
                    </div>
                  </div>
                </div>

                {(selectedLocation === location.id || hoveredLocation === location.id) && (
                  <div style={{
                    marginTop: '10px',
                    paddingTop: '10px',
                    borderTop: '1px dashed rgba(59, 130, 246, 0.3)',
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: '1.6'
                  }}>
                    {location.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 統計情報 */}
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <div style={{
              fontSize: '12px',
              color: '#94a3b8',
              marginBottom: '10px',
              fontWeight: 'bold',
              letterSpacing: '1px'
            }}>
              ACHIEVEMENTS
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              fontSize: '11px'
            }}>
              <div style={{ color: '#64748b' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>47</span> 都道府県制覇
              </div>
              <div style={{ color: '#64748b' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>1095</span> 日英語学習
              </div>
              <div style={{ color: '#64748b' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>100</span> 冊読破
              </div>
              <div style={{ color: '#64748b' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>763万</span> 再生
              </div>
            </div>
          </div>

          {/* 操作説明 */}
          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: 'rgba(6, 182, 212, 0.1)',
            borderRadius: '8px',
            fontSize: '11px',
            color: '#64748b',
            lineHeight: '1.5'
          }}>
            <strong style={{ color: '#06b6d4' }}>操作方法:</strong><br />
            地図上のマーカーまたは年表をクリック・ホバーで詳細表示
          </div>
        </div>
      </div>

      {/* フッター */}
      <div style={{
        textAlign: 'center',
        marginTop: '25px',
        color: '#64748b',
        fontSize: '12px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '150px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          margin: '0 auto 10px'
        }} />
        <span style={{ letterSpacing: '1px' }}>
          株式会社Universal Pine 代表取締役
        </span>
        <br />
        <span style={{ fontSize: '11px', color: '#475569' }}>
          "挑戦し続ける人生を"
        </span>
      </div>
    </div>
  );
}
