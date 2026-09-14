import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";

const scenes = [
  {
    title: "全校唯一的废职业",
    text: "觉醒当天，我成了全校最大的笑话。",
    symbol: "废",
    from: "#07111f",
    to: "#1d4b78",
    accent: "#56b5ff",
  },
  {
    title: "潜力评级：F",
    text: "无战斗能力。陆沉，你被武道班除名了！",
    symbol: "F",
    from: "#17080d",
    to: "#72182d",
    accent: "#ff4266",
  },
  {
    title: "穷人，就该认命",
    text: "A级炎枪武者沈烈，当着全校踩碎了我的报告。",
    symbol: "炎",
    from: "#210900",
    to: "#9c3108",
    accent: "#ff8a2c",
  },
  {
    title: "检测到十七处破绽",
    text: "就在他出手的一刻，我看见了功法的全部缺陷。",
    symbol: "破",
    from: "#031513",
    to: "#08655c",
    accent: "#24e8c5",
  },
  {
    title: "两指，破A级武技",
    text: "我只点了一下，他身上的火焰便瞬间熄灭。",
    symbol: "灭",
    from: "#061027",
    to: "#1850a1",
    accent: "#75baff",
  },
  {
    title: "功法修复成功",
    text: "获得《九炎灭神枪·第一式》！",
    symbol: "神",
    from: "#211300",
    to: "#8b5900",
    accent: "#ffd447",
  },
  {
    title: "一根树枝，也能败你",
    text: "金色枪影贯穿广场，A级天才当场跪地！",
    symbol: "枪",
    from: "#240701",
    to: "#b94108",
    accent: "#ffe26a",
  },
  {
    title: "这里不是垃圾场",
    text: "八千七百三十一部残缺功法，全都是我的宝藏。",
    symbol: "藏",
    from: "#0a0619",
    to: "#472482",
    accent: "#be8cff",
  },
  {
    title: "检测到神级残卷",
    text: "修复后果未知，宿主存活率：0.01%。",
    symbol: "禁",
    from: "#030303",
    to: "#4d0715",
    accent: "#ff244c",
  },
];

const sceneDuration = 120;

const Scene: React.FC<{
  scene: (typeof scenes)[number];
  index: number;
}> = ({scene, index}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 10, sceneDuration - 12, sceneDuration],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  const zoom = interpolate(frame, [0, sceneDuration], [1.2, 1.02]);
  const symbolScale = interpolate(frame, [0, 24], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [8, 30], [90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        overflow: "hidden",
        background: `radial-gradient(circle at 50% 35%, ${scene.to}, ${scene.from} 72%)`,
        color: "white",
        fontFamily:
          '"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif',
      }}
    >
      <AbsoluteFill
        style={{
          transform: `scale(${zoom})`,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      {[0, 1, 2, 3, 4, 5, 6].map((n) => {
        const left = (n * 157 + index * 81) % 1080;
        const top = (n * 271 + frame * (1 + n * 0.08)) % 1920;

        return (
          <div
            key={n}
            style={{
              position: "absolute",
              left,
              top,
              width: 4 + n,
              height: 80 + n * 22,
              background: scene.accent,
              opacity: 0.18,
              filter: "blur(2px)",
              transform: "rotate(35deg)",
            }}
          />
        );
      })}

      <div
        style={{
          position: "absolute",
          top: 55,
          left: 55,
          color: scene.accent,
          fontSize: 27,
          fontWeight: 800,
          letterSpacing: 7,
        }}
      >
        残卷天尊 · 第一集
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 290,
          width: 580,
          height: 580,
          marginLeft: -290,
          borderRadius: "50%",
          border: `5px solid ${scene.accent}`,
          boxShadow: `0 0 85px ${scene.accent}88, inset 0 0 85px ${scene.accent}44`,
          opacity: 0.7,
          transform: `scale(${symbolScale}) rotate(${frame * 0.1}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 385,
          width: "100%",
          textAlign: "center",
          color: scene.accent,
          fontSize: 270,
          lineHeight: 1,
          fontWeight: 900,
          textShadow: `0 0 45px ${scene.accent}`,
          transform: `scale(${symbolScale})`,
        }}
      >
        {scene.symbol}
      </div>

      <div
        style={{
          position: "absolute",
          left: 60,
          right: 60,
          bottom: 390,
          textAlign: "center",
          fontSize: 70,
          lineHeight: 1.25,
          fontWeight: 900,
          letterSpacing: 2,
          textShadow: "0 6px 20px #000",
          transform: `translateY(${titleY}px)`,
        }}
      >
        {scene.title}
      </div>

      <div
        style={{
          position: "absolute",
          left: 55,
          right: 55,
          bottom: 175,
          padding: "28px 34px",
          borderRadius: 24,
          background: "rgba(0,0,0,.76)",
          border: `2px solid ${scene.accent}aa`,
          boxShadow: "0 15px 45px rgba(0,0,0,.6)",
          textAlign: "center",
          fontSize: 41,
          lineHeight: 1.5,
          fontWeight: 700,
        }}
      >
        {scene.text}
      </div>
    </AbsoluteFill>
  );
};

export const CanjuanEpisode: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "#000"}}>
      {scenes.map((scene, index) => (
        <Sequence
          key={scene.title}
          from={index * sceneDuration}
          durationInFrames={sceneDuration}
        >
          <Scene scene={scene} index={index} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export const canjuanDuration = scenes.length * sceneDuration;
