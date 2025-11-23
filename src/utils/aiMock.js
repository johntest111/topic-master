export function mockAIAnalysis(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const content = text.toLowerCase();

      const keywords = {
        money: ["阿里", "腾讯", "京东", "美团", "华为", "芯片", "财报", "暴跌"],
        emotion: ["裁员", "危机", "内幕", "真相", "逃离", "绝望", "爆发", "崩盘"],
      };

      let base = { money: 6, emotion: 6, heat: 15 };
      let score = { ...base };

      // 关键词匹配：提高可控性（非随机）
      keywords.money.forEach(k => {
        if (content.includes(k.toLowerCase())) score.money += 9;
      });

      keywords.emotion.forEach(k => {
        if (content.includes(k.toLowerCase())) score.emotion += 10;
      });

      if (text.length > 5 && text.length < 20) score.heat += 8;

      // 封顶
      score.money = Math.min(score.money, 25);
      score.emotion = Math.min(score.emotion, 40);
      score.heat = Math.min(score.heat, 35);

      const total = score.money + score.emotion + score.heat;

      const titles =
        total > 80
          ? [
              `深度解析：${text}背后的增长密码`,
              `${text}为什么突然火了？核心逻辑全讲透`,
              `从 0 到 1：${text}如何改变普通人的机会路径？`,
            ]
          : [
              `关于${text}，你可能忽略了 3 个关键问题`,
              `${text}背后有哪些被误解的点？`,
              `拆解：${text}的真正底层逻辑是什么？`,
            ];

      const comment =
        total > 85
          ? "选题具有极高的信息密度和情绪张力，适合深度剖析类视频内容。"
          : total > 70
          ? "选题具备一定可用性，如能强化矛盾冲突，可显著提升传播性。"
          : "选题吸引力较弱，缺乏明确冲突点，可尝试增加情绪或信息增量。";

      resolve({ score: total, breakdown: score, comment, titles });
    }, 1200);
  });
}

