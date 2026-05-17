import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/tarot", async (req, res) => {
  try {
    const { mood } = req.body;
    
    // We shuffle the possible Tarot cards (using AI prompt)
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      // Create a fallback randomized result if API key is not present, though it should be.
      console.warn("No GEMINI_API_KEY found, using fallback");
      return res.json({
        cardName: "THE FOOL",
        numeral: "0",
        emoji: "🤡",
        reasoning: "MoMo thấy bạn đang tràn đầy năng lượng để bắt đầu một hành trình mới rực rỡ đấy!",
        recommendationTitle: "Forrest Gump (1994)",
        recommendationGenre: "Drama · Tâm lý · 142 phút",
        recommendationRating: "⭐⭐⭐⭐⭐",
        recommendationReviews: "4.8 từ 1.2k review",
        imagePrompt: "A cute 3D mascot wearing a pink helmet as The Fool tarot card, standing fearlessly on the edge of a cliff with a small dog, vibrant colors, mystical tarot style"
      });
    }

    const ai = new GoogleGenAI({ apiKey: geminiApiKey });
    const prompt = `Người dùng đang cảm thấy ở mức năng lượng tâm trạng ${mood}/100 (0 là tồi tệ nhất, 100 là vui vẻ/tích cực nhất).
Hãy đóng vai Mascot MoMo (một người bạn đồng hành vui vẻ, tinh tế và am hiểu điện ảnh) kiêm chuyên gia Tarot.
Dựa trên mức năng lượng này:
1. Bạn hãy chọn ngẫu nhiên 1 lá bài Tarot (trong bộ ẩn chính - Major Arcana) sao cho ý nghĩa của lá bài THẬT SỰ PHÙ HỢP với tâm trạng và mức năng lượng hiện tại để đưa ra lời khuyên hoặc sự đồng cảm. (Có thể là The Fool, The Magician, The High Priestess, v.v.)
2. Gợi ý 1 bộ phim CÓ THẬT có nội dung/thông điệp kết nối trực tiếp với lá bài này và tâm trạng của họ.

Trả về kết quả 100% bằng JSON với định dạng sau (đừng thêm markdown code block, chỉ nội dung JSON nguyên bản):
{
  "cardName": "Tên tiếng Anh của lá bài (ví dụ: THE FOOL)",
  "numeral": "Số La Mã của lá bài (ví dụ: 0)",
  "emoji": "1 emoji đại diện cho lá bài",
  "reasoning": "Một câu tiếng Việt diễn giải theo giọng điệu thân thiện của MoMo (có thể xưng 'MoMo' hoặc 'Mình'), kết nối ý nghĩa lá bài Tarot với cảm xúc của người dùng, từ đó dẫn dắt đến bộ phim.",
  "recommendationTitle": "Tên phim và năm (vd: Her (2013))",
  "recommendationGenre": "Thể loại phim (ví dụ: Drama · Tâm lý · 126 phút)",
  "recommendationRating": "Số lượng sao (ví dụ: ⭐⭐⭐⭐ hoặc ⭐⭐⭐⭐⭐)",
  "recommendationReviews": "Số review (ví dụ: 4.2 từ 847 review)",
  "imagePrompt": "Một đoạn prompt (bằng tiếng Anh) miêu tả hình ảnh lá bài Tarot này. BẮT BUỘC nhân vật chính phải là 'A cute 3D mascot wearing a pink helmet (MoMo wallet mascot)' đang thực hiện hành động giống như hình ảnh kinh điển của lá bài Tarot đã chọn. Ví dụ: 'A cute 3D mascot wearing a pink helmet as The Fool tarot card, standing fearlessly on the edge of a cliff with a small dog, vibrant colors, mystical tarot style'"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const data = JSON.parse(response.text || "{}");
    res.json(data);
  } catch (error) {
    console.error("Tarot API error:", error);
    res.status(500).json({ error: "Thất bại trong việc rút bài Tarot." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
