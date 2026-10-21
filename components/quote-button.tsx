"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const quotes = [
  "เริ่มจากสิ่งเล็กๆ แล้ว deploy ให้ไว",
  "error คือครูที่ตอบเร็วที่สุด",
  "commit เล็กๆ บ่อยๆ ดีกว่าก้อนใหญ่ก้อนเดียว",
];

export function QuoteButton() {
  const [quote, setQuote] = useState(quotes[0]);
  const [count, setCount] = useState(0)

  function pickRandom() {
    const next = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(next);
    setCount(count >= 10 ?  0 : count + 1);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-2xl"> คุณได้รับคำอวยพรเป็น </p>
      <p className="text-muted-foreground">{quote}</p>
      <Button onClick={pickRandom}>สุ่มคำคม</Button>
      <p className="text-accent-foreground">กดไปแแล้วทั้งหมด {count}  {count >= 10 ? "กดอีกครั้งจะรีเซ็ต" : "ครั้ง"}</p>
    </div>
  );
}
