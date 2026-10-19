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
  { title: "เร็ว", desc: "โหลดไวด้วย Next.js และ Server Components" },
  { title: "สวย", desc: "ออกแบบด้วย Tailwind และ shadcn/ui" },
  { title: "ใช้ง่าย", desc: "ใช้งานได้ทั้งบนมือถือและเดสก์ท็อป" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          เว็บแรกของฉันหลัง reskill
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
            <CardTitle>สมัครรับข่าว</CardTitle>
            <CardDescription>กรอกอีเมลเพื่อรับอัปเดต</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input type="email" placeholder="you@example.com" />
            <Button>สมัครเลย</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}