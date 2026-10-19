import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const features = [
  { title: "UX/UI", desc: "มาตรฐานสากล" },
  { title: "ใช้งานได้จริง", desc: "ต้องไม่ได้แค่สวยแต่ต้องใช้งานได้จริง" },
  { title: "สานต่อได้ไม่หยุดนิ่ง", desc: "ใช้งานได้ทั้งบนมือถือและเดสก์ท็อปและต้องอัพเดท" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          ตารางเรียนของฉันใน สัปดาห์นี้จะต้องจบตั้งแต่ basic UI ไปจนถึง ez landing web
        </h1>
        <p className="mt-4 text-muted-foreground">
          สร้างด้วย Next.js, Tailwind และ shadcn/ui
        </p>
        <Button className="mt-6" size="lg">
          เริ่มเลย
        </Button>
      </section>

      <section className="mt-16 grid gap-3 sm:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mt-16 flex justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>คอมเม้นมาได้ว่ามันดีขึ้นอย่างไร</CardTitle>
            <CardDescription>comment เถอะ ไหว้ละพี่</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input type="text" placeholder="เขียนคอมเม้นของคุณที่นี่" />
            <Button>ส่งคอมเม้น</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}