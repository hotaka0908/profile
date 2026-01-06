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
    color: '#8B4513'
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
    color: '#CD853F'
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
    color: '#B8860B'
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
    color: '#DAA520'
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
    color: '#D2691E'
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
    color: '#A0522D'
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
      background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d4bc 50%, #d4c4a8 100%)',
      fontFamily: '"Crimson Text", "Noto Serif JP", Georgia, serif',
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a08060' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.8,
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
          fontSize: '28px',
          color: '#4a3728',
          margin: 0,
          letterSpacing: '4px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          fontWeight: 'normal'
        }}>
          船橋穂天の足跡
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#7a6a58',
          margin: '8px 0 0 0',
          fontStyle: 'italic'
        }}>
          Funahashi Hotaka (1996.9.8 - )
        </p>
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #8B7355, transparent)',
          margin: '15px auto'
        }} />
        <p style={{
          fontSize: '13px',
          color: '#7a6a58',
          margin: '5px 0 0 0'
        }}>
          愛知から世界へ — 挑戦と成長の軌跡
        </p>
      </div>

      {/* 地図エリア */}
      <div style={{
        display: 'flex',
        gap: '30px',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* 地図 */}
        <div style={{
          flex: '1',
          background: 'linear-gradient(145deg, #f8f0e3, #ebe0ce)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(74, 55, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
          border: '3px solid #c4a77d',
          position: 'relative'
        }}>
          {/* 古地図風の装飾 */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '1px solid #d4c4a8',
            borderRadius: '4px',
            pointerEvents: 'none'
          }} />

          <svg viewBox="0 0 400 420" style={{ width: '100%', height: 'auto' }}>
            {/* 海 */}
            <rect x="0" y="0" width="400" height="420" fill="#c9d4c5" opacity="0.3" />

            {/* 日本地図（簡略化） */}
            {/* 北海道 */}
            <path
              d="M 300 80 Q 320 70, 340 75 Q 360 80, 365 100 Q 368 115, 355 125
                 Q 340 135, 320 130 Q 305 125, 295 110 Q 290 95, 300 80 Z"
              fill="#e8dcc8"
              stroke="#8B7355"
              strokeWidth="1"
              opacity="0.9"
            />

            {/* 本州 */}
            <path
              d="M 180 180 Q 200 170, 230 175 Q 260 172, 290 180
                 Q 315 185, 330 200 Q 340 215, 335 235
                 Q 325 250, 310 258 Q 295 265, 280 268
                 Q 260 275, 240 280 Q 220 285, 200 282
                 Q 180 278, 165 265 Q 155 250, 160 230
                 Q 165 210, 180 195 Q 185 185, 180 180 Z"
              fill="#e8dcc8"
              stroke="#8B7355"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <text x="250" y="225" fontSize="12" fill="#6b5b4f" fontStyle="italic" opacity="0.7">Japan</text>

            {/* 四国 */}
            <path
              d="M 200 290 Q 220 285, 240 290 Q 255 295, 250 310
                 Q 240 320, 220 318 Q 200 315, 200 300 Q 198 292, 200 290 Z"
              fill="#e8dcc8"
              stroke="#8B7355"
              strokeWidth="1"
              opacity="0.9"
            />

            {/* 九州 */}
            <path
              d="M 160 290 Q 175 285, 185 295 Q 192 310, 185 330
                 Q 178 345, 165 345 Q 150 340, 148 320
                 Q 145 305, 160 290 Z"
              fill="#e8dcc8"
              stroke="#8B7355"
              strokeWidth="1"
              opacity="0.9"
            />

            {/* オーストラリア（小さく右下に） */}
            <path
              d="M 310 350 Q 340 340, 370 350 Q 390 365, 385 385
                 Q 375 400, 350 402 Q 325 400, 315 385
                 Q 305 370, 310 350 Z"
              fill="#e8dcc8"
              stroke="#8B7355"
              strokeWidth="1"
              opacity="0.9"
            />
            <text x="350" y="375" fontSize="10" fill="#6b5b4f" fontStyle="italic" opacity="0.7">Australia</text>

            {/* 移動経路 */}
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#8B4513" opacity="0.6" />
              </marker>
            </defs>

            {journeyPaths.map((path, index) => {
              const from = getLocation(path.from);
              const to = getLocation(path.to);
              const midX = (from.x + to.x) / 2;
              const midY = (from.y + to.y) / 2 - 15;

              return (
                <g key={index}>
                  <path
                    d={`M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}`}
                    fill="none"
                    stroke="#8B4513"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                    opacity="0.4"
                    markerEnd="url(#arrowhead)"
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
                {/* マーカーの影 */}
                <circle
                  cx={location.x + 2}
                  cy={location.y + 2}
                  r={hoveredLocation === location.id || selectedLocation === location.id ? 14 : 10}
                  fill="rgba(0,0,0,0.2)"
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* メインマーカー */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={hoveredLocation === location.id || selectedLocation === location.id ? 12 : 8}
                  fill={location.color}
                  stroke="#f5e6d3"
                  strokeWidth="2"
                  style={{ transition: 'all 0.3s ease' }}
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
                  y={location.y - 16}
                  fontSize="11"
                  fill="#4a3728"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {location.name}
                </text>
              </g>
            ))}

            {/* コンパス */}
            <g transform="translate(50, 60)">
              <circle cx="0" cy="0" r="25" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
              <path d="M 0 -20 L 4 0 L 0 -8 L -4 0 Z" fill="#8B4513" />
              <path d="M 0 20 L 4 0 L 0 8 L -4 0 Z" fill="#c4a77d" />
              <text x="0" y="-28" fontSize="10" fill="#8B4513" textAnchor="middle" fontWeight="bold">N</text>
            </g>

            {/* スケール */}
            <g transform="translate(280, 400)">
              <line x1="0" y1="0" x2="60" y2="0" stroke="#8B7355" strokeWidth="2" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="#8B7355" strokeWidth="2" />
              <line x1="60" y1="-3" x2="60" y2="3" stroke="#8B7355" strokeWidth="2" />
              <text x="30" y="12" fontSize="8" fill="#6b5b4f" textAnchor="middle">約500km</text>
            </g>
          </svg>
        </div>

        {/* 年表サイドバー */}
        <div style={{
          width: '280px',
          background: 'linear-gradient(145deg, #f8f0e3, #ebe0ce)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(74, 55, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
          border: '3px solid #c4a77d'
        }}>
          <h2 style={{
            fontSize: '16px',
            color: '#4a3728',
            margin: '0 0 15px 0',
            textAlign: 'center',
            borderBottom: '1px solid #c4a77d',
            paddingBottom: '10px'
          }}>
            年表 / Timeline
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{
                  padding: '12px',
                  background: selectedLocation === location.id
                    ? 'linear-gradient(135deg, #d4c4a8, #c4b498)'
                    : hoveredLocation === location.id
                      ? 'rgba(212, 196, 168, 0.5)'
                      : 'transparent',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderLeft: `4px solid ${location.color}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: location.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {location.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#4a3728'
                    }}>
                      {location.name}
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 'normal',
                        marginLeft: '6px',
                        color: '#7a6a58'
                      }}>
                        {location.nameEn}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#8B4513',
                      fontWeight: 'bold'
                    }}>
                      {location.years}
                      <span style={{
                        marginLeft: '8px',
                        color: '#7a6a58',
                        fontWeight: 'normal'
                      }}>
                        ({location.age})
                      </span>
                    </div>
                  </div>
                </div>

                {(selectedLocation === location.id || hoveredLocation === location.id) && (
                  <div style={{
                    marginTop: '8px',
                    paddingTop: '8px',
                    borderTop: '1px dashed #c4a77d',
                    fontSize: '12px',
                    color: '#5a4a3f',
                    lineHeight: '1.5'
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
            padding: '12px',
            background: 'rgba(139, 69, 19, 0.1)',
            borderRadius: '6px',
            border: '1px dashed #c4a77d'
          }}>
            <div style={{
              fontSize: '12px',
              color: '#4a3728',
              marginBottom: '8px',
              fontWeight: 'bold'
            }}>
              主な実績
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              fontSize: '11px'
            }}>
              <div style={{ color: '#5a4a3f' }}>
                <span style={{ color: '#8B4513', fontWeight: 'bold' }}>47</span> 都道府県制覇
              </div>
              <div style={{ color: '#5a4a3f' }}>
                <span style={{ color: '#8B4513', fontWeight: 'bold' }}>1095</span> 日英語学習
              </div>
              <div style={{ color: '#5a4a3f' }}>
                <span style={{ color: '#8B4513', fontWeight: 'bold' }}>100</span> 冊読破
              </div>
              <div style={{ color: '#5a4a3f' }}>
                <span style={{ color: '#8B4513', fontWeight: 'bold' }}>763万</span> 再生
              </div>
            </div>
          </div>

          {/* 操作説明 */}
          <div style={{
            marginTop: '12px',
            padding: '12px',
            background: 'rgba(139, 69, 19, 0.1)',
            borderRadius: '6px',
            fontSize: '11px',
            color: '#6b5b4f',
            lineHeight: '1.6'
          }}>
            <strong>操作方法:</strong><br />
            地図上のマーカーまたは年表をクリック/ホバーすると詳細が表示されます
          </div>
        </div>
      </div>

      {/* フッター */}
      <div style={{
        textAlign: 'center',
        marginTop: '25px',
        color: '#7a6a58',
        fontSize: '11px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '150px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8B7355, transparent)',
          margin: '0 auto 10px'
        }} />
        株式会社Universal Pine 代表取締役
        <br />
        <span style={{ fontStyle: 'italic' }}>
          "挑戦し続ける人生を"
        </span>
      </div>
    </div>
  );
}
