"use client"

import { useState } from 'react';
import { QrCode, Download, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { translations, type Language } from '@/lib/translations';
import QRCode from 'qrcode';

export default function Home() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const generateQR = async (value: string) => {
    try {
      const url = await QRCode.toDataURL(value, {
        width: 400,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
      setQrCode(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = qrCode;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <main className={`min-h-screen p-4 md:p-24 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
            >
              <Languages className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <ThemeToggle />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder={t.inputPlaceholder}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1"
            />
            <Button onClick={() => generateQR(text)}>
              <QrCode className="h-4 w-4 mr-2" />
              {t.generate}
            </Button>
          </div>

          {qrCode && (
            <div className="space-y-4">
              <div className="flex justify-center p-8 bg-white rounded-lg shadow-lg">
                <img src={qrCode} alt="QR Code" className="max-w-full" />
              </div>
              <Button onClick={handleDownload} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                {t.download}
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}