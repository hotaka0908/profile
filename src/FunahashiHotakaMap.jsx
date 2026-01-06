import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup
} from 'react-simple-maps';

const JAPAN_TOPO = "https://raw.githubusercontent.com/dataofjapan/land/master/japan.topojson";
const WORLD_TOPO = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  {
    id: 1,
    name: '瀬戸市',
    nameEn: 'Seto, Aichi',
    years: '1996-2015',
    age: '0-18歳',
    coordinates: [137.0856, 35.2234],
    description: '出生地。4人兄弟の長男として誕生。小1から高3まで野球を12年間続け、享栄高校では野球部主将を務める',
    color: '#8B4513'
  },
  {
    id: 2,
    name: '横浜',
    nameEn: 'Yokohama',
    years: '2015-2017',
    age: '18-20歳',
    coordinates: [139.6380, 35.4437],
    description: '関東学院大学進学のため一人暮らし開始。1年半で中退を決意。バイクで53日間の日本一周を敢行',
    color: '#CD853F'
  },
  {
    id: 3,
    name: 'バイロンベイ',
    nameEn: 'Byron Bay, Australia',
    years: '2017',
    age: '20-21歳',
    coordinates: [153.6150, -28.6474],
    description: '海外での挑戦。新しい価値観と出会い、複数の起業を試みる',
    color: '#B8860B'
  },
  {
    id: 4,
    name: '東京',
    nameEn: 'Tokyo',
    years: '2018-2020',
    age: '22-24歳',
    coordinates: [139.6917, 35.6895],
    description: '芸能活動期。相方とシェアハウスで生活しながらM-1優勝を目指す。TikTokで763万再生・23万いいねを獲得',
    color: '#DAA520'
  },
  {
    id: 5,
    name: '京都',
    nameEn: 'Kyoto',
    years: '2020-2024',
    age: '24-28歳',
    coordinates: [135.7681, 35.0116],
    description: 'コロナ禍を機に移住。英語学習1095日連続、Google Map公式認定(上位1%)、投資で1万円→4000万円超。全都道府県訪問達成',
    color: '#D2691E'
  },
  {
    id: 6,
    name: '東京',
    nameEn: 'Tokyo',
    years: '2025-現在',
    age: '28歳〜',
    coordinates: [139.7500, 35.7100],
    description: '2025年2月「株式会社Universal Pine」設立。AIネックレスデバイス開発に挑戦。300万円投資+7200万円公庫融資を確保',
    color: '#A0522D'
  }
];

const journeyPaths = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 }
];

export default function FunahashiHotakaMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

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
      </div>

      {/* 地図エリア */}
      <div style={{
        display: 'flex',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        flexWrap: 'wrap'
      }}>
        {/* 地図 */}
        <div style={{
          flex: '1',
          minWidth: '500px',
          background: 'linear-gradient(145deg, #f8f0e3, #ebe0ce)',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 8px 32px rgba(74, 55, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
          border: '3px solid #c4a77d',
          position: 'relative'
        }}>
          {/* 古地図風の装飾枠 */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            right: '8px',
            bottom: '8px',
            border: '1px solid #d4c4a8',
            borderRadius: '4px',
            pointerEvents: 'none'
          }} />

          {/* 日本地図 */}
          <div style={{ marginBottom: '10px' }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 8500,
                center: [137.5, 35.3]
              }}
              style={{
                width: '100%',
                height: 'auto'
              }}
            >
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#8B7355" floodOpacity="0.3"/>
                </filter>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8dcc8" />
                  <stop offset="50%" stopColor="#ddd0b8" />
                  <stop offset="100%" stopColor="#d4c4a8" />
                </linearGradient>
                <pattern id="paperTexture" patternUnits="userSpaceOnUse" width="100" height="100">
                  <rect width="100" height="100" fill="#e8dcc8"/>
                  <circle cx="50" cy="50" r="1" fill="#d4c4a8" opacity="0.3"/>
                  <circle cx="20" cy="30" r="0.5" fill="#c4a77d" opacity="0.2"/>
                  <circle cx="80" cy="70" r="0.8" fill="#c4a77d" opacity="0.2"/>
                </pattern>
              </defs>

              <rect x="-50" y="-50" width="900" height="600" fill="#c9d4c5" opacity="0.4" />

              <Geographies geography={JAPAN_TOPO}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="url(#landGradient)"
                      stroke="#8B7355"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: '#d4c4a8' },
                        pressed: { outline: 'none' }
                      }}
                      filter="url(#shadow)"
                    />
                  ))
                }
              </Geographies>

              {/* 仮想バイロンベイ座標（オーストラリアボックスの位置に対応） */}
              {/* 移動経路 */}
              {/* 1→2 瀬戸市→横浜 */}
              <Line
                from={locations[0].coordinates}
                to={locations[1].coordinates}
                stroke="#8B4513"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5,3"
                strokeOpacity={0.5}
              />
              {/* 2→3 横浜→バイロンベイ（仮想座標：地図右下） */}
              <Line
                from={locations[1].coordinates}
                to={[140.5, 29]}
                stroke="#8B4513"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5,3"
                strokeOpacity={0.5}
              />
              {/* 3→4 バイロンベイ（仮想座標）→東京 */}
              <Line
                from={[140.5, 29]}
                to={locations[3].coordinates}
                stroke="#8B4513"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5,3"
                strokeOpacity={0.5}
              />
              {/* 4→5 東京→京都 */}
              <Line
                from={locations[3].coordinates}
                to={locations[4].coordinates}
                stroke="#8B4513"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5,3"
                strokeOpacity={0.5}
              />
              {/* 5→6 京都→東京 */}
              <Line
                from={locations[4].coordinates}
                to={locations[5].coordinates}
                stroke="#8B4513"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="5,3"
                strokeOpacity={0.5}
              />

              {/* 場所のマーカー（日本国内のみ） */}
              {locations.filter(loc => loc.id !== 3).map((location, index) => (
                <Marker
                  key={location.id}
                  coordinates={location.coordinates}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    r={hoveredLocation === location.id || selectedLocation === location.id ? 14 : 10}
                    fill={location.color}
                    stroke="#f5e6d3"
                    strokeWidth={2}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  <circle
                    r={hoveredLocation === location.id || selectedLocation === location.id ? 20 : 14}
                    fill={location.color}
                    opacity={0.2}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  <text
                    textAnchor="middle"
                    y={5}
                    style={{
                      fontSize: '12px',
                      fill: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    {location.id}
                  </text>
                  <text
                    textAnchor="middle"
                    y={-18}
                    style={{
                      fontSize: '14px',
                      fill: '#4a3728',
                      fontWeight: 'bold'
                    }}
                  >
                    {location.name}
                  </text>
                </Marker>
              ))}

              {/* コンパス */}
              <g transform="translate(80, 80)">
                <circle cx="0" cy="0" r="20" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.5" />
                <path d="M 0 -15 L 3 0 L 0 -6 L -3 0 Z" fill="#8B4513" />
                <path d="M 0 15 L 3 0 L 0 6 L -3 0 Z" fill="#c4a77d" />
                <text x="0" y="-22" fontSize="8" fill="#8B4513" textAnchor="middle" fontWeight="bold">N</text>
              </g>
            </ComposableMap>
          </div>


          {/* オーストラリア（小さく表示） */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '180px',
            background: 'rgba(248, 240, 227, 0.95)',
            borderRadius: '6px',
            padding: '10px',
            border: '2px solid #c4a77d',
            boxShadow: '0 2px 8px rgba(74, 55, 40, 0.2)',
            zIndex: 1
          }}>
            <div style={{ fontSize: '11px', color: '#6b5b4f', textAlign: 'center', marginBottom: '6px', fontStyle: 'italic' }}>
              Australia
            </div>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 900,
                center: [135, -27]
              }}
              style={{ width: '100%', height: '100px' }}
            >
              <Geographies geography={WORLD_TOPO}>
                {({ geographies }) =>
                  geographies
                    .filter(geo => geo.properties.name === "Australia")
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="url(#landGradient)"
                        stroke="#8B7355"
                        strokeWidth={0.5}
                      />
                    ))
                }
              </Geographies>
              <Marker coordinates={[153.6150, -28.6474]}>
                <circle
                  r={hoveredLocation === 3 || selectedLocation === 3 ? 90 : 70}
                  fill="#B8860B"
                  stroke="#f5e6d3"
                  strokeWidth={15}
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={() => setHoveredLocation(3)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setSelectedLocation(selectedLocation === 3 ? null : 3)}
                />
                <text
                  textAnchor="middle"
                  y={25}
                  style={{ fontSize: '70px', fill: '#fff', fontWeight: 'bold' }}
                >
                  3
                </text>
                <text
                  textAnchor="middle"
                  y={-85}
                  style={{ fontSize: '55px', fill: '#4a3728', fontWeight: 'bold' }}
                >
                  バイロンベイ
                </text>
              </Marker>
            </ComposableMap>
          </div>
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
          "人々の生活をより良く"
        </span>
      </div>
    </div>
  );
}
